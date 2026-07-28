import type { Localized } from '../types';

/**
 * Case-study content model. Every case study is a list of the fixed sections
 * from the brief, in this order — each hidden when it has no blocks:
 *
 *   metadata → problem → research → flows → wireframes → solution → build → ai → outcome
 *
 * Section headings come from i18n (t.caseStudy.*); the body is a list of typed
 * blocks so a study can mix text, images, video, galleries, Figma embeds,
 * before/after comparisons, quotes, step lists and metric rows without any
 * layout code in the data.
 */

export type SectionKind =
  | 'problem'
  | 'research'
  | 'flows'
  | 'wireframes'
  | 'solution'
  | 'build'
  | 'ai'
  | 'outcome';

export interface ImageRef {
  src: string;
  alt: Localized;
  caption?: Localized;
}

export type Block =
  | { type: 'text'; body: Localized }
  | { type: 'image'; image: ImageRef; wide?: boolean }
  | { type: 'video'; src: string; caption?: Localized }
  | { type: 'gallery'; images: ImageRef[] }
  | { type: 'figma'; embedUrl: string; title: Localized }
  | { type: 'quote'; body: Localized }
  | { type: 'steps'; items: { n: string; title: Localized; body: Localized }[] }
  | { type: 'metrics'; items: { value: number; suffix: string; label: Localized }[] }
  | {
      type: 'beforeAfter';
      before: { badge: Localized; caption: Localized; iframe?: string; img?: string };
      after: { badge: Localized; caption: Localized; iframe?: string; img?: string; live?: string };
      meta?: Localized;
    }
  // A clean, labelled placeholder for an asset Ahmed hasn't supplied yet.
  | { type: 'placeholder'; label: Localized };

export interface Section {
  kind: SectionKind;
  blocks: Block[];
}

/** How a card renders its thumbnail: a real image, or the "browser" motif. */
export type Cover =
  | { kind: 'image'; src: string; alt: Localized }
  | { kind: 'browser'; brand: string; tag: Localized }
  | { kind: 'video'; src: string };

export interface Project {
  slug: string;
  title: Localized;
  /** One-line tagline shown under the case-study title. */
  tagline: Localized;
  /** Short description on the Work grid card. */
  cardText: Localized;
  tags: string[];
  cover: Cover;
  featured: boolean;
  confidential?: boolean;
  /** Optional external destination (live site / preview) for the card CTA. */
  externalUrl?: string;
  cardLink?: Localized;
  meta: {
    role: Localized;
    scope: Localized;
    tools: string;
    year: string;
  };
  sections: Section[];
}

import { rchSaudi } from './rch-saudi';
import { rchCrm } from './rch-crm';
import { rchLanding } from './rch-landing-figma';

/** Ordered registry — controls the Work grid and featured teasers. */
export const projects: Project[] = [rchSaudi, rchCrm, rchLanding];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured);
