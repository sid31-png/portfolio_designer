import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

/**
 * Temporary scaffold placeholder so every tab renders during step-1 review.
 * Replaced by the real page content in step 4.
 */
export function PagePlaceholder({ eyebrow, title, note }: { eyebrow: string; title: string; note?: ReactNode }) {
  return (
    <div className="container-page py-section">
      <Reveal className="max-w-prose">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-h1 font-semibold text-fg">{title}</h1>
        {note && <p className="prose-block mt-6">{note}</p>}
        <p className="mt-10 text-sm text-fg-subtle">Scaffold view — content comes in the next steps.</p>
      </Reveal>
    </div>
  );
}
