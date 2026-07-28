import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const BASE_TITLE = 'Ahmed Bouamama — Product Designer · UI/UX & Front-End';

/**
 * Minimal per-route head management (no dependency). Sets the document title
 * and meta/OG description for the current page; restores nothing on unmount
 * because the next route sets its own.
 */
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title ? `${title} — Ahmed Bouamama` : BASE_TITLE;

    if (description) {
      const set = (selector: string, attr: string) => {
        const el = document.head.querySelector(selector);
        if (el) el.setAttribute(attr, description);
      };
      set('meta[name="description"]', 'content');
      set('meta[property="og:description"]', 'content');
      set('meta[name="twitter:description"]', 'content');
    }
  }, [title, description]);

  return null;
}
