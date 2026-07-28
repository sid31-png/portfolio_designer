import { asset } from '@/lib/asset';
import { useI18n } from '@/i18n';

interface HtmlEmbedProps {
  src: string; // content-relative internal page, e.g. 'projects/rch-saudi.html'
  title: string;
  url?: string; // optional pretty URL shown in the fake address bar
}

/**
 * Embeds one of the real project demo pages (self-contained HTML in /public)
 * inside a browser-chrome frame with its own scroll, so the actual work is
 * visible without leaving the case study. Lazy-loaded.
 */
export function HtmlEmbed({ src, title, url }: HtmlEmbedProps) {
  const { t } = useI18n();
  const full = asset(src);

  return (
    <figure className="not-prose overflow-hidden rounded-2xl border border-border bg-bg-elev">
      {/* fake browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-bg px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-fg/15" />
        <span className="h-3 w-3 rounded-full bg-fg/15" />
        <span className="h-3 w-3 rounded-full bg-fg/15" />
        <span className="mx-auto max-w-[60%] truncate rounded-md bg-bg-elev px-3 py-1 text-xs text-fg-subtle">
          {url ?? title}
        </span>
        <a href={full} target="_blank" rel="noopener" className="text-xs font-medium text-fg-muted hover:text-fg">
          {t.actions.openLive}
        </a>
      </div>
      <iframe
        title={title}
        src={full}
        loading="lazy"
        className="h-[70vh] w-full bg-white"
        style={{ border: 'none' }}
      />
    </figure>
  );
}
