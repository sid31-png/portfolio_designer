import type { Localized } from './types';

/**
 * Experience + education. Drives both the Resume page and the case-study
 * cross-links. Verbatim from the current site (EN markup, FR/AR i18n.js).
 * Single editable source for the on-page résumé and the PDF.
 */

export interface Role {
  date: Localized;
  title: Localized;
  org: string;
  body: Localized;
}

export const experience: Role[] = [
  {
    date: { en: 'Since May 2025', fr: 'Depuis mai 2025', ar: 'منذ مايو 2025' },
    title: { en: 'Product Designer & Front-End Developer', fr: 'Product Designer & Développeur Front-End', ar: 'مصمّم منتج ومطوّر واجهات أمامية' },
    org: 'RCH Business Solutions · Qatar',
    body: {
      en: "Designed & built RCH's internal CRM/ERP and the Saudi corporate website — design system, dashboards and front-end. Led marketing & digital; the tools I shipped cut processing time 20% across 500+ mandates.",
      fr: "J'ai conçu & développé le CRM/ERP interne de RCH et le site corporate Saudi, design system, dashboards et front-end. J'ai piloté le marketing & digital ; les outils livrés ont réduit le temps de traitement de 20% sur 500+ mandats.",
      ar: 'صمّمت وطوّرت نظام CRM/ERP الداخلي لـ RCH والموقع المؤسسي السعودي، نظام تصميم ولوحات تحكم وواجهة أمامية. قُدْت التسويق والرقمي؛ والأدوات التي أطلقتها خفضت زمن المعالجة 20% عبر +500 معاملة.',
    },
  },
  {
    date: { en: 'Nov 2024 — May 2025', fr: 'Nov. 2024 à mai 2025', ar: 'نوفمبر 2024 إلى مايو 2025' },
    title: { en: 'Digital Marketing & Client Solutions', fr: 'Marketing Digital & Solutions Client', ar: 'تسويق رقمي وحلول العملاء' },
    org: 'Cat Planet · Doha, Qatar',
    body: {
      en: 'Owned brand, digital campaigns and client experience, growing the customer base 70% with 90% retention.',
      fr: "J'ai géré la marque, les campagnes digitales et l'expérience client, +70% de clientèle, 90% de rétention.",
      ar: 'أدرت العلامة والحملات الرقمية وتجربة العميل، نمو العملاء 70% واحتفاظ 90%.',
    },
  },
  {
    date: { en: 'Mar 2020 — Jul 2022', fr: 'Mars 2020 à juil. 2022', ar: 'مارس 2020 إلى يوليو 2022' },
    title: { en: 'Marketing & Digital · Business Development', fr: 'Marketing & Digital · Développement commercial', ar: 'تسويق ورقمي · تطوير أعمال' },
    org: 'Vet Plus Distribution · Algeria',
    body: {
      en: 'Ran marketing and digital support across 150+ products — repeat orders +35%, product adoption +25%, satisfaction above 90%.',
      fr: 'Support marketing et digital sur 150+ produits, commandes répétées +35%, adoption produit +25%, satisfaction au-dessus de 90%.',
      ar: 'دعم تسويقي ورقمي عبر +150 منتجاً، طلبات متكررة +35%، تبنٍّ +25%، رضا فوق 90%.',
    },
  },
];

export const education: Role = {
  date: { en: 'Education & Training', fr: 'Formation & apprentissage', ar: 'التعليم والتدريب' },
  title: { en: 'Foundations & self-taught craft', fr: 'Bases & savoir-faire autodidacte', ar: 'أسس ومهارة مكتسبة ذاتياً' },
  org: 'Tissemsilt University · FORCOM · Algeria',
  body: {
    en: "Master's & Bachelor's in Agronomy and professional Marketing training (FORCOM), plus self-taught UI/UX & front-end, grounded in human-centred design (ISO 9241-210).",
    fr: 'Master & Licence en Agronomie et formation professionnelle en Marketing (FORCOM), plus UI/UX & front-end en autodidacte, ancrés dans le design centré utilisateur (ISO 9241-210).',
    ar: 'ماجستير وبكالوريوس في الأغرونوميا وتدريب مهني في التسويق (FORCOM)، إضافة إلى UI/UX وواجهة أمامية تعلّمتها ذاتياً، مبنية على التصميم المتمحور حول الإنسان (ISO 9241-210).',
  },
};

/** Services ("what I do") — the six offers from the current site. */
export const services: { icon: string; title: Localized; body: Localized }[] = [
  {
    icon: '◐',
    title: { en: 'Product & UX Design', fr: 'Design Produit & UX', ar: 'تصميم المنتج وتجربة المستخدم' },
    body: {
      en: 'User flows, wireframes and polished UI grounded in human-centred design (ISO 9241-210), from problem to shippable system.',
      fr: 'User flows, wireframes et UI soignée, ancrés dans le design centré utilisateur (ISO 9241-210), du problème au système livrable.',
      ar: 'مسارات المستخدم والتخطيطات وواجهة مصقولة، مبنية على التصميم المتمحور حول الإنسان (ISO 9241-210)، من المشكلة إلى نظام قابل للتسليم.',
    },
  },
  {
    icon: '⌘',
    title: { en: 'Front-End Development', fr: 'Développement Front-End', ar: 'تطوير الواجهة الأمامية' },
    body: {
      en: 'Responsive, fast, detail-obsessed builds in HTML/CSS/JS, React & Tailwind, matching the design pixel for pixel.',
      fr: 'Des builds responsives, rapides et obsédés du détail en HTML/CSS/JS, React & Tailwind, fidèles au design au pixel près.',
      ar: 'بناء متجاوب وسريع ومهووس بالتفاصيل بـ HTML/CSS/JS وReact وTailwind، مطابق للتصميم بدقة البكسل.',
    },
  },
  {
    icon: '▤',
    title: { en: 'Internal Tools & CRM/ERP', fr: 'Outils internes & CRM/ERP', ar: 'الأدوات الداخلية وCRM/ERP' },
    body: {
      en: 'Dashboards and internal software that run the business, like the RCH CRM/ERP I designed and built end-to-end.',
      fr: "Dashboards et logiciels internes qui font tourner l'entreprise, comme le CRM/ERP RCH que j'ai conçu et développé de bout en bout.",
      ar: 'لوحات تحكم وبرمجيات داخلية تُشغّل الأعمال، مثل نظام CRM/ERP لـ RCH الذي صمّمته وطوّرته بالكامل.',
    },
  },
  {
    icon: '◑',
    title: { en: 'Design Systems', fr: 'Design Systems', ar: 'أنظمة التصميم' },
    body: {
      en: 'Tokens, components and patterns — a single source of truth so product and brand stay consistent at scale.',
      fr: 'Tokens, composants et patterns, une source de vérité unique pour garder produit et marque cohérents à l\'échelle.',
      ar: 'رموز ومكوّنات وأنماط — مصدر حقيقة واحد يُبقي المنتج والعلامة متّسقين على نطاق واسع.',
    },
  },
  {
    icon: '✦',
    title: { en: 'Generative AI', fr: 'IA générative', ar: 'الذكاء الاصطناعي التوليدي' },
    body: {
      en: 'Visuals, motion and content with Higgsfield, plus AI-assisted development to build and ship faster.',
      fr: 'Visuels, motion et contenu avec Higgsfield, plus le développement assisté par IA pour construire et livrer plus vite.',
      ar: 'صور وحركة ومحتوى عبر Higgsfield، إضافة إلى التطوير بمساعدة الذكاء الاصطناعي للبناء والإطلاق أسرع.',
    },
  },
  {
    icon: '◇',
    title: { en: 'Marketing & Digital', fr: 'Marketing & Digital', ar: 'التسويق والرقمي' },
    body: {
      en: 'Brand, websites and campaigns — the marketing-and-digital thread that has run through every role.',
      fr: 'Marque, sites et campagnes, le fil marketing-et-digital qui a traversé chaque poste.',
      ar: 'علامة ومواقع وحملات — خيط التسويق والرقمي الذي مرّ عبر كل دور.',
    },
  },
];

export const servicesIntro = {
  title: { en: 'Design it. Build it. Ship it.', fr: 'Concevoir. Construire. Livrer.', ar: 'صمّم. ابنِ. أطلِق.' } as Localized,
};
