import { useRef } from 'react';
import { asset } from '@/lib/asset';
import { useI18n } from '@/i18n';

interface ShowreelProps {
  src: string; // content-relative, e.g. 'assets/showreel.mp4'
  className?: string;
}

/**
 * Autoplaying, muted, looped showreel with a fullscreen button. Muted+inline so
 * autoplay is allowed on mobile; lazy metadata to keep it light.
 */
export function Showreel({ src, className }: ShowreelProps) {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  const goFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    // Safari uses the webkit-prefixed API on the video element itself.
    const anyEl = el as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (el.requestFullscreen) el.requestFullscreen();
    else if (anyEl.webkitEnterFullscreen) anyEl.webkitEnterFullscreen();
  };

  return (
    <div className={['group relative overflow-hidden rounded-2xl border border-border bg-bg-elev', className].filter(Boolean).join(' ')}>
      <video
        ref={videoRef}
        src={asset(src)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full object-cover"
      />
      <button
        type="button"
        onClick={goFullscreen}
        aria-label={t.actions.fullscreen}
        title={t.actions.fullscreen}
        className="absolute bottom-3 end-3 grid h-10 w-10 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
      </button>
    </div>
  );
}
