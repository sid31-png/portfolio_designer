import { useMotionPref } from '@/theme/MotionProvider';
import { useI18n } from '@/i18n';

export function MotionToggle() {
  const { enabled, toggle } = useMotionPref();
  const { t } = useI18n();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={t.actions.toggleMotion}
      title={t.actions.toggleMotion}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg-elev/60 text-fg-muted transition-colors hover:text-fg hover:border-fg-subtle/50"
    >
      {enabled ? (
        // waves (motion on)
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M3 12c2 0 2-4 4-4s2 8 4 8 2-8 4-8 2 4 4 4" />
        </svg>
      ) : (
        // flat line (motion off)
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M3 12h18" />
        </svg>
      )}
    </button>
  );
}
