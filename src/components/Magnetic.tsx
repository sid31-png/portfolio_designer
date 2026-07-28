import { useRef, type ReactNode } from 'react';
import { usePointerFine } from '@/hooks/usePointerFine';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Wraps an element so it drifts toward the cursor while hovered and springs
 * back on leave — the signature "magnetic" pull. No-op on touch devices and
 * under reduced motion, where children render as a plain inline-block.
 */
export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const fine = usePointerFine();
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);

  const active = fine && !reduced;

  const onMove = (e: React.MouseEvent) => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={['inline-block will-change-transform', active ? 'transition-transform duration-300 ease-out-expo' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
