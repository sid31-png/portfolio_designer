import type { Localized } from './types';

/**
 * Two number sections carried over from the current site.
 *
 * `value` + `suffix` are stored separately from the label so the StatCounter
 * can render the REAL final value as static text on first paint (e.g. "70%"),
 * and only animate as progressive enhancement. The number must never be 0.
 */

export interface Stat {
  value: number;
  suffix: string;
  label: Localized;
}

// Hero statement strip.
export const heroStats: Stat[] = [
  {
    value: 70,
    suffix: '%',
    label: { en: 'Customer growth driven', fr: 'Croissance client générée', ar: 'نمو عملاء حقّقته' },
  },
  {
    value: 500,
    suffix: '+',
    label: { en: 'Mandates run on tools I built', fr: 'Dossiers gérés via mes outils', ar: 'سجلات تُدار عبر أدوات بنيتها' },
  },
  {
    value: 20,
    suffix: '%',
    label: { en: 'Faster processing, by design', fr: 'Traitement plus rapide, par design', ar: 'معالجة أسرع بالتصميم' },
  },
  {
    value: 15,
    suffix: '+',
    label: { en: 'Projects shipped', fr: 'Projets livrés', ar: 'مشاريع أُطلقت' },
  },
];

export interface ImpactBar extends Stat {
  note: Localized;
}

// "Impact" bars — the same real outcomes, with a note on where each came from.
export const impactBars: ImpactBar[] = [
  {
    value: 70,
    suffix: '%',
    label: { en: 'Customer base growth', fr: 'Croissance de la clientèle', ar: 'نمو قاعدة العملاء' },
    note: { en: 'Digital & field campaigns, Cat Planet', fr: 'Campagnes digitales & terrain, Cat Planet', ar: 'حملات رقمية وميدانية، Cat Planet' },
  },
  {
    value: 90,
    suffix: '%',
    label: { en: 'Client retention', fr: 'Fidélisation client', ar: 'الاحتفاظ بالعملاء' },
    note: { en: 'Consistent follow-up & relationship management', fr: 'Suivi régulier & gestion de la relation', ar: 'متابعة مستمرة وإدارة للعلاقات' },
  },
  {
    value: 20,
    suffix: '%',
    label: { en: 'Faster government processing', fr: 'Traitement gouvernemental plus rapide', ar: 'معالجة حكومية أسرع' },
    note: { en: 'The CRM/tools I built across 500+ mandates', fr: "Le CRM/les outils que j'ai construits sur 500+ mandats", ar: 'الـ CRM/الأدوات التي بنيتها عبر +500 معاملة' },
  },
  {
    value: 15,
    suffix: '%',
    label: { en: 'Project cost savings', fr: "Gains d'efficacité", ar: 'مكاسب في الكفاءة' },
    note: { en: 'Efficiency from the tools & systems I shipped', fr: 'Efficacité issue des outils & systèmes que j\'ai livrés', ar: 'كفاءة من الأدوات والأنظمة التي أطلقتها' },
  },
];
