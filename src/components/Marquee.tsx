/**
 * Infinite horizontal marquee. The items are duplicated once and the track
 * animates to -50%, so the loop is seamless. Stills under prefers-reduced-motion
 * (handled in CSS). Purely decorative — marked aria-hidden.
 */
export function Marquee({
  items,
  reverse = false,
  separator = '✦',
  className,
}: {
  items: string[];
  reverse?: boolean;
  separator?: string;
  className?: string;
}) {
  const run = (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-6">
          {item}
          <span className="text-accent">{separator}</span>
        </span>
      ))}
    </>
  );

  return (
    <div aria-hidden="true" className={['w-full overflow-hidden', className].filter(Boolean).join(' ')}>
      <div className={['marquee-track', reverse ? 'is-reverse' : ''].join(' ')}>
        {/* two identical runs for a seamless -50% loop */}
        <div className="inline-flex">{run}</div>
        <div className="inline-flex">{run}</div>
      </div>
    </div>
  );
}
