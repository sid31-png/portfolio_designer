import { asset } from '@/lib/asset';
import { useI18n } from '@/i18n';

interface Side {
  badge: string;
  caption: string;
  iframe?: string;
  img?: string; // content-relative
  live?: string; // content-relative page to open
}

interface BeforeAfterProps {
  before: Side;
  after: Side;
  meta?: string;
}

function Frame({ side, variant }: { side: Side; variant: 'before' | 'after' }) {
  const { t } = useI18n();
  const badgeClass =
    variant === 'before'
      ? 'bg-fg/70 text-bg'
      : 'bg-accent text-accent-fg';

  return (
    <figure className="min-w-0 flex-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-bg-elev">
        <span className={['absolute start-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-medium', badgeClass].join(' ')}>
          {side.badge}
        </span>
        {side.iframe ? (
          <iframe
            title={side.caption}
            src={side.iframe}
            loading="lazy"
            className="h-full w-full"
            style={{ border: 'none' }}
          />
        ) : side.img ? (
          <img src={asset(side.img)} alt={side.caption} loading="lazy" className="h-full w-full object-cover object-top" />
        ) : null}
      </div>
      <figcaption className="mt-2 flex items-center justify-between gap-2 text-xs text-fg-subtle">
        <span>{side.caption}</span>
        {side.live && (
          <a
            href={asset(side.live)}
            target="_blank"
            rel="noopener"
            className="link-underline font-medium text-fg-muted"
          >
            {t.actions.openLive}
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * Side-by-side before/after comparison. Each side can be a live iframe (e.g.
 * the old rch.sa) or a static image (the redesign), with an optional "open
 * live" link. Stacks on mobile.
 */
export function BeforeAfter({ before, after, meta }: BeforeAfterProps) {
  return (
    <div className="not-prose">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <Frame side={before} variant="before" />
        <div aria-hidden="true" className="mx-auto text-fg-subtle sm:mx-0">
          <span className="block rotate-90 text-xl sm:rotate-0 flip-rtl">→</span>
        </div>
        <Frame side={after} variant="after" />
      </div>
      {meta && <p className="mt-3 text-center text-xs text-fg-subtle sm:text-start">{meta}</p>}
    </div>
  );
}
