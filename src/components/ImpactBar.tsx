import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ImpactBarProps {
  value: number; // 0–100
  suffix?: string;
  label: string;
  note?: string;
}

/**
 * A labelled progress bar with the real percentage as text. Like StatCounter,
 * the number is shown at its true value from the first paint (never 0); only
 * the fill width animates in on scroll, and only when motion is allowed.
 */
export function ImpactBar({ value, suffix = '%', label, note }: ImpactBarProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState<number>(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setFill(value);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setFill(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFill(value);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduced]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-fg">{label}</span>
        {/* Real value, always in the DOM. */}
        <span className="text-sm font-semibold tabular-nums text-fg">
          {value}
          {suffix}
        </span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-fg/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-navy to-accent transition-[width] duration-1000 ease-out-expo motion-reduce:transition-none"
          style={{ width: `${fill}%` }}
        />
      </div>
      {note && <p className="mt-2 text-xs text-fg-subtle">{note}</p>}
    </div>
  );
}
