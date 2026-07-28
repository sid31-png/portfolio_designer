import { useState } from 'react';
import { asset } from '@/lib/asset';
import { Lightbox } from './Lightbox';

export interface GalleryImage {
  src: string; // content-relative
  alt: string;
  caption?: string;
}

/**
 * Clickable image or grid of images that open in a lightbox. A single image
 * renders full-width; multiple render as a responsive grid.
 */
export function Gallery({ images, wide }: { images: GalleryImage[]; wide?: boolean }) {
  const [active, setActive] = useState<number | null>(null);
  const single = images.length === 1;

  return (
    <>
      <div className={single ? '' : 'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
        {images.map((img, i) => (
          <figure key={img.src + i} className="not-prose">
            <button
              type="button"
              onClick={() => setActive(i)}
              className={[
                'group block w-full overflow-hidden rounded-2xl border border-border bg-bg-elev',
                single && wide ? '' : '',
              ].join(' ')}
              aria-label={img.alt}
            >
              <img
                src={asset(img.src)}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
              />
            </button>
            {img.caption && <figcaption className="mt-2 text-xs text-fg-subtle">{img.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {active !== null && (
        <Lightbox
          src={images[active].src}
          alt={images[active].alt}
          caption={images[active].caption}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
