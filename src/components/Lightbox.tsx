import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { asset } from '@/lib/asset';
import { useI18n } from '@/i18n';

interface LightboxProps {
  src: string; // content-relative
  alt: string;
  caption?: string;
  onClose: () => void;
}

/** Full-screen image viewer. Closes on Esc, backdrop click, or the X. */
export function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  const { t } = useI18n();

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onKey]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.actions.closeMenu}
        className="absolute end-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <img
        src={asset(src)}
        alt={alt}
        className="max-h-[85vh] max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      {caption && <p className="mt-3 max-w-prose text-center text-sm text-white/70">{caption}</p>}
    </div>,
    document.body,
  );
}
