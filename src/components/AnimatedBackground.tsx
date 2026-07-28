import { useMotionPref } from '@/theme/MotionProvider';

/**
 * Subtle animated backdrop that defines the Tabfolio-style ambience: a couple
 * of soft, slowly drifting gradient blobs plus a faint grain, sitting behind
 * everything. Purely decorative (aria-hidden). Animation only runs when
 * `backgroundOn` is true — i.e. the user hasn't turned it off AND the OS isn't
 * asking for reduced motion. When off, a static gradient remains.
 */
export function AnimatedBackground() {
  const { backgroundOn } = useMotionPref();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-bg" />

      {/* soft colour blobs */}
      <div
        className={[
          'absolute -top-1/4 -start-1/4 h-[70vh] w-[70vh] rounded-full blur-3xl',
          'bg-accent/20 dark:bg-accent/15',
          backgroundOn ? 'animate-blob-1' : '',
        ].join(' ')}
      />
      <div
        className={[
          'absolute -bottom-1/3 -end-1/4 h-[65vh] w-[65vh] rounded-full blur-3xl',
          'bg-navy/20 dark:bg-navy/10',
          backgroundOn ? 'animate-blob-2' : '',
        ].join(' ')}
      />

      {/* faint grain to kill banding */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.05] bg-grain" />
    </div>
  );
}
