import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';

/** A page section with vertical rhythm; `alt` gives a subtle elevated band. */
export function Section({
  id,
  children,
  alt = false,
  className,
}: {
  id?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section id={id} className={['py-section', alt ? 'bg-bg-elev/40' : '', className].filter(Boolean).join(' ')}>
      <div className="container-page">{children}</div>
    </section>
  );
}

/** Understated section header: lowercase eyebrow, title, optional sub. */
export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="max-w-prose">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-h2 font-semibold text-fg">{title}</h2>
      {sub && <p className="prose-block mt-3">{sub}</p>}
    </Reveal>
  );
}

type ButtonVariant = 'solid' | 'ghost';

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200';
const buttonVariants: Record<ButtonVariant, string> = {
  solid: 'bg-fg text-bg hover:-translate-y-0.5',
  ghost: 'border border-border text-fg hover:border-fg-subtle hover:-translate-y-0.5',
};

export function LinkButton({
  to,
  children,
  variant = 'solid',
}: {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <Link to={to} className={[buttonBase, buttonVariants[variant]].join(' ')}>
      {children}
    </Link>
  );
}

export function AnchorButton({
  href,
  children,
  variant = 'solid',
  download = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={[buttonBase, buttonVariants[variant]].join(' ')}
      {...(download ? { download: '' } : {})}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-bg-elev/60 px-3 py-1.5 text-sm text-fg-muted">
      {children}
    </span>
  );
}
