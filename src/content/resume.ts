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
    date: { en: 'May 2025 — Present', fr: 'Mai 2025 — Aujourd’hui', ar: 'مايو 2025 — حتى الآن' },
    title: { en: 'Product Designer & Front-End Developer', fr: 'Product Designer & Développeur Front-End', ar: 'مصمّم منتج ومطوّر واجهات أمامية' },
    org: 'RCH Business Solutions · Qatar',
    body: {
      en: "Designed and built RCH's internal system from scratch by mapping workflows for the operations, PRO and collections teams. Streamlined dashboards to cut government processing time 20% across 500+ client mandates, and independently designed and developed the RCH Saudi corporate website in React and Tailwind. Partnered directly with leadership and government-facing staff to ground designs in real user workflows, using AI tools (Claude, Cursor, Higgsfield) to accelerate prototyping and development.",
      fr: "J'ai conçu et développé le système interne de RCH de zéro, en cartographiant les workflows des équipes opérations, PRO et recouvrement. Des dashboards épurés ont réduit le temps de traitement gouvernemental de 20% sur 500+ mandats clients, et j'ai conçu et développé seul le site corporate RCH Saudi en React et Tailwind. J'ai travaillé directement avec la direction et le personnel en contact avec l'administration pour ancrer les designs dans de vrais workflows, en utilisant des outils d'IA (Claude, Cursor, Higgsfield) pour accélérer le prototypage et le développement.",
      ar: 'صمّمت وطوّرت نظام RCH الداخلي من الصفر عبر رسم مسارات عمل فرق العمليات والعلاقات الحكومية والتحصيل. لوحات تحكم مبسّطة خفّضت زمن المعالجة الحكومية 20% عبر +500 معاملة عميل، وصمّمت وطوّرت منفرداً الموقع المؤسسي RCH السعودية بـ React وTailwind. عملت مباشرةً مع القيادة والموظفين المتعاملين مع الجهات الحكومية لترسيخ التصاميم في مسارات عمل حقيقية، مستخدماً أدوات الذكاء الاصطناعي (Claude، Cursor، Higgsfield) لتسريع النمذجة والتطوير.',
    },
  },
  {
    date: { en: 'Nov 2024 — May 2025', fr: 'Nov. 2024 — Mai 2025', ar: 'نوفمبر 2024 — مايو 2025' },
    title: { en: 'Product / Digital Designer', fr: 'Product / Digital Designer', ar: 'مصمّم منتجات / رقمي' },
    org: 'Cat Planet (Animal Nutrition & Health Center) · Doha, Qatar',
    body: {
      en: 'Owned the end-to-end client experience and brand identity, driving user-centric improvements that grew the customer base 70%. Held client retention at 90% through consistent follow-up and relationship management, and planned and ran both digital and field campaigns from concept to execution.',
      fr: "J'ai géré l'expérience client de bout en bout et l'identité de marque, avec des améliorations centrées utilisateur qui ont fait croître la clientèle de 70%. J'ai maintenu la rétention à 90% grâce à un suivi régulier et à la gestion de la relation, et j'ai planifié et mené les campagnes digitales et terrain, du concept à l'exécution.",
      ar: 'أدرت تجربة العميل من البداية إلى النهاية وهوية العلامة، بتحسينات متمحورة حول المستخدم نمت قاعدة العملاء 70%. حافظت على الاحتفاظ بالعملاء عند 90% عبر متابعة مستمرة وإدارة للعلاقات، وخطّطت ونفّذت الحملات الرقمية والميدانية من الفكرة إلى التنفيذ.',
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
