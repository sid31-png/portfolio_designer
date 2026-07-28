import type { Project } from './index';
import { figmaFiles, figmaEmbedUrl } from '../figma';

/**
 * RCH Landing Page — Ray Directions. A Figma project embedded live.
 * The design lives in Figma; this case study frames it and embeds the file.
 */
export const rchLanding: Project = {
  slug: 'rch-landing-ray-directions',
  title: {
    en: 'RCH Landing Page — Ray Directions',
    fr: 'RCH Landing Page — Ray Directions',
    ar: 'صفحة هبوط RCH — Ray Directions',
  },
  tagline: {
    en: 'A focused landing page concept, designed in Figma.',
    fr: 'Un concept de landing page ciblé, conçu dans Figma.',
    ar: 'مفهوم صفحة هبوط مركّز، مصمّم في Figma.',
  },
  cardText: {
    en: 'A landing page concept designed in Figma — embedded live below so you can move through the frames.',
    fr: 'Un concept de landing page conçu dans Figma, intégré en direct ci-dessous pour parcourir les frames.',
    ar: 'مفهوم صفحة هبوط مصمّم في Figma — مضمّن مباشرةً بالأسفل لتتنقّل بين الإطارات.',
  },
  tags: ['UI Design', 'Landing Page', 'Figma'],
  cover: {
    kind: 'browser',
    brand: 'RCH',
    tag: { en: 'Landing · Ray Directions', fr: 'Landing · Ray Directions', ar: 'هبوط · Ray Directions' },
  },
  featured: false,
  cardLink: { en: 'Open the Figma file ↗', fr: 'Ouvrir le fichier Figma ↗', ar: 'افتح ملف Figma ↗' },
  meta: {
    role: { en: 'UI Designer', fr: 'UI Designer', ar: 'مصمّم واجهات' },
    scope: { en: 'Concept · UI · Layout', fr: 'Concept · UI · Mise en page', ar: 'الفكرة · الواجهة · التخطيط' },
    tools: 'Figma',
    year: '2025',
  },
  sections: [
    {
      kind: 'solution',
      blocks: [
        {
          type: 'figma',
          embedUrl: figmaEmbedUrl(figmaFiles.rchLanding),
          title: { en: 'RCH Landing Page — Ray Directions', fr: 'RCH Landing Page — Ray Directions', ar: 'صفحة هبوط RCH — Ray Directions' },
        },
      ],
    },
  ],
};
