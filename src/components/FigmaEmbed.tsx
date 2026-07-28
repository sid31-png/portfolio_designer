import { useI18n } from '@/i18n';

interface FigmaEmbedProps {
  embedUrl: string;
  title: string;
}

/**
 * Responsive, lazy-loaded Figma embed in a 16:9 container.
 *
 * NOTE: the Figma file MUST be shared as "Anyone with the link → can view",
 * otherwise this iframe renders blank. (See src/content/figma.ts.)
 */
export function FigmaEmbed({ embedUrl, title }: FigmaEmbedProps) {
  const { t } = useI18n();
  return (
    <figure className="not-prose">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-bg-elev">
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          style={{ border: 'none' }}
        />
      </div>
      <figcaption className="mt-2 text-xs text-fg-subtle">{t.misc.figmaNote} — {title}</figcaption>
    </figure>
  );
}
