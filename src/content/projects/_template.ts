import type { Project } from './index';

/**
 * TEMPLATE for a new case study. Copy this file, fill it in, and add it to the
 * `projects` array in ./index.ts.
 *
 * REMINDER (brief §5 / §9): add at least one MOBILE-APP / CONSUMER PRODUCT case
 * study. The Qatar Airways role centres on the mobile app, and a native/app
 * flow is the biggest gap in the current portfolio. Even a strong concept —
 * with real UX artifacts (flows, journey map, wireframes → hi-fi, a usability
 * pass) — would land well here.
 *
 * Keep only the sections you have content for; empty sections are hidden.
 * Section order is fixed: problem → research → flows → wireframes → solution →
 * build → ai → outcome.
 */
export const templateProject: Project = {
  slug: 'new-project-slug',
  title: { en: 'Project title', fr: 'Titre du projet', ar: 'عنوان المشروع' },
  tagline: { en: 'One-line tagline.', fr: 'Accroche en une ligne.', ar: 'سطر تعريفي واحد.' },
  cardText: { en: 'Short card description.', fr: 'Courte description.', ar: 'وصف قصير.' },
  tags: ['Mobile App', 'UX', 'Prototype'],
  cover: { kind: 'browser', brand: 'APP', tag: { en: 'Mobile · concept', fr: 'Mobile · concept', ar: 'موبايل · مفهوم' } },
  featured: false,
  meta: {
    role: { en: 'Product Designer', fr: 'Product Designer', ar: 'مصمّم منتج' },
    scope: { en: 'Research · UX · UI · Prototype', fr: 'Recherche · UX · UI · Prototype', ar: 'بحث · UX · UI · نموذج' },
    tools: 'Figma · Claude',
    year: '2025',
  },
  sections: [
    { kind: 'problem', blocks: [{ type: 'text', body: { en: 'The problem…', fr: 'Le problème…', ar: 'المشكلة…' } }] },
    { kind: 'research', blocks: [{ type: 'placeholder', label: { en: 'Research artifacts', fr: 'Éléments de recherche', ar: 'مواد البحث' } }] },
    { kind: 'flows', blocks: [{ type: 'placeholder', label: { en: 'User flow / journey map', fr: 'Flux / carte de parcours', ar: 'مسار المستخدم / خريطة الرحلة' } }] },
    { kind: 'wireframes', blocks: [{ type: 'placeholder', label: { en: 'Wireframes → hi-fi', fr: 'Wireframes → hi-fi', ar: 'تخطيطات → نهائي' } }] },
    { kind: 'solution', blocks: [{ type: 'placeholder', label: { en: 'Key screens', fr: 'Écrans clés', ar: 'شاشات رئيسية' } }] },
    { kind: 'outcome', blocks: [{ type: 'text', body: { en: 'Outcome / next…', fr: 'Résultat / suite…', ar: 'النتيجة / التالي…' } }] },
  ],
};
