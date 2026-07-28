import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/**
 * A count-up number that CANNOT render 0.
 *
 * The current portfolio has a bug where these show "0" if the animation never
 * fires. Here the initial state is the REAL final value, formatted, so with JS
 * off, before the observer fires, or if anything throws, the correct number is
 * already in the DOM. The count-up is pure progressive enhancement: it starts
 * from a fraction of the target (never 0) only after the element scrolls into
 * view, and it's skipped entirely under prefers-reduced-motion.
 */
export function StatCounter({ value, suffix = '', className }: StatCounterProps) {
  const reduced = usePrefersReducedMotion();
  // Start AT the real value — this is what guarantees no "0".
  const [display, setDisplay] = useState<number>(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reduced || hasAnimated.current) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        const duration = 1100;
        // Begin from ~a third of the target (never 0) and ease up to it.
        const start = Math.max(1, Math.round(value * 0.35));
        const startTime = performance.now();

        const tick = (now: number) => {
          const t = Math.min(1, (now - startTime) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(start + (value - start) * eased);
          setDisplay(current);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value); // land exactly on the real value
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
