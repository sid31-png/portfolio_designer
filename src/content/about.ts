import type { Localized } from './types';

/** "How I work" — the 4-step loop, verbatim from the current site. */
export const process: { n: string; title: Localized; body: Localized }[] = [
  {
    n: '01',
    title: { en: 'Understand the real problem', fr: 'Comprendre le vrai problème', ar: 'فهم المشكلة الحقيقية' },
    body: {
      en: "I sit with the people who'll actually use it — what's slow, what's manual, what breaks. That's where the real brief hides.",
      fr: "Je m'assois avec ceux qui vont l'utiliser, ce qui est lent, manuel, ce qui casse. C'est là que se cache le vrai brief.",
      ar: 'أجلس مع من سيستخدمه فعلاً — ما هو بطيء ويدوي وما الذي يتعطّل. هناك يختبئ البريف الحقيقي.',
    },
  },
  {
    n: '02',
    title: { en: 'Design the smallest thing that works', fr: 'Concevoir le plus petit truc qui marche', ar: 'تصميم أصغر شيء يعمل' },
    body: {
      en: 'Flows first, then screens, then a design system. Clear beats clever. I prototype fast and cut whatever nobody needs.',
      fr: "Les flux d'abord, puis les écrans, puis un design system. Le clair plutôt que le malin. Je prototype vite et je coupe l'inutile.",
      ar: 'المسارات أولاً، ثم الشاشات، ثم نظام تصميم. الوضوح قبل الذكاء. أُنمذج بسرعة وأحذف ما لا يحتاجه أحد.',
    },
  },
  {
    n: '03',
    title: { en: 'Build it for real', fr: 'Le construire pour de vrai', ar: 'بناؤه فعلياً' },
    body: {
      en: 'I write the front-end myself, so it ships exactly as designed — responsive, fast and accessible, not a hand-off that drifts.',
      fr: "J'écris le front-end moi-même, donc ça part exactement comme conçu, responsive, rapide et accessible, sans hand-off qui dérive.",
      ar: 'أكتب الواجهة الأمامية بنفسي، فيخرج كما صُمّم تماماً — متجاوب وسريع وسهل الوصول، دون تسليم ينحرف.',
    },
  },
  {
    n: '04',
    title: { en: 'Ship, watch, refine', fr: 'Livrer, observer, affiner', ar: 'الإطلاق، المراقبة، التحسين' },
    body: {
      en: 'Real usage tells the truth. I watch how people move through it and keep iterating until it feels obvious.',
      fr: "L'usage réel dit la vérité. Je regarde comment les gens s'en servent et j'itère jusqu'à ce que ce soit évident.",
      ar: 'الاستخدام الحقيقي يقول الحقيقة. أراقب كيف يتنقّل الناس وأُكرّر حتى يصبح بديهياً.',
    },
  },
];

export const processIntro = {
  title: { en: 'From a fuzzy problem to something people use.', fr: "D'un problème flou à quelque chose qu'on utilise.", ar: 'من مشكلة غامضة إلى شيء يُستخدم.' } as Localized,
  sub: { en: 'The same loop on every product — the brief is rarely the real problem.', fr: 'La même boucle sur chaque produit, le brief est rarement le vrai problème.', ar: 'نفس الحلقة في كل منتج، والبريف نادراً ما يكون المشكلة الحقيقية.' } as Localized,
};

/** Skills — two sets. Chip labels that aren't proper nouns are localized. */
export const skillSets: { title: Localized; chips: Localized[] }[] = [
  {
    title: { en: 'Design & Product', fr: 'Design & Produit', ar: 'التصميم والمنتج' },
    chips: [
      { en: 'Product Design', fr: 'Product Design', ar: 'تصميم المنتجات' },
      { en: 'UI / UX Design', fr: 'UI / UX Design', ar: 'تصميم UI / UX' },
      { en: 'User Research', fr: 'Recherche utilisateur', ar: 'بحث المستخدم' },
      { en: 'User Flows', fr: 'User flows', ar: 'مسارات المستخدم' },
      { en: 'Customer Journey Mapping', fr: 'Cartographie du parcours client', ar: 'رسم رحلة العميل' },
      { en: 'Wireframing', fr: 'Wireframing', ar: 'التخطيط الأولي' },
      { en: 'Prototyping', fr: 'Prototypage', ar: 'النمذجة' },
      { en: 'Usability Testing', fr: 'Tests d’utilisabilité', ar: 'اختبار قابلية الاستخدام' },
      { en: 'Human-Centred Design (ISO 9241-210)', fr: 'Design centré utilisateur (ISO 9241-210)', ar: 'التصميم المتمحور حول الإنسان (ISO 9241-210)' },
      { en: 'Design Systems', fr: 'Design Systems', ar: 'أنظمة التصميم' },
      { en: 'Figma', fr: 'Figma', ar: 'Figma' },
      { en: 'Framer', fr: 'Framer', ar: 'Framer' },
      { en: 'Brand & Web Design', fr: 'Marque & Web Design', ar: 'العلامة وتصميم الويب' },
    ],
  },
  {
    title: { en: 'Front-End & Build', fr: 'Front-End & Build', ar: 'الواجهة الأمامية والبناء' },
    chips: [
      { en: 'HTML / CSS / JS', fr: 'HTML / CSS / JS', ar: 'HTML / CSS / JS' },
      { en: 'React', fr: 'React', ar: 'React' },
      { en: 'Tailwind', fr: 'Tailwind', ar: 'Tailwind' },
      { en: 'Internal Tools & CRM/ERP', fr: 'Outils internes & CRM/ERP', ar: 'الأدوات الداخلية وCRM/ERP' },
      { en: 'Generative AI (Higgsfield)', fr: 'IA générative (Higgsfield)', ar: 'الذكاء الاصطناعي التوليدي (Higgsfield)' },
      { en: 'AI-Assisted Dev (Cursor, Claude Code)', fr: 'Dév assisté par IA (Cursor, Claude Code)', ar: 'تطوير بمساعدة الذكاء الاصطناعي (Cursor، Claude Code)' },
      { en: 'No-Code Automation & AI Agents', fr: 'Automatisation no-code & agents IA', ar: 'أتمتة بلا كود ووكلاء ذكاء اصطناعي' },
    ],
  },
];

export const skillsIntro = {
  title: { en: 'Two sides, one operator.', fr: 'Deux facettes, un seul opérateur.', ar: 'وجهان، مشغّل واحد.' } as Localized,
  sub: { en: 'Business judgement that knows what to build, and the hands to build it.', fr: 'Le jugement produit qui sait quoi construire, et les mains pour le construire.', ar: 'حسٌّ بالمنتج يعرف ماذا يبني، ويدان تبنيانه.' } as Localized,
};

/** "Now" — what I'm sharpening. */
export const now = {
  intro: {
    title: { en: "What I'm sharpening.", fr: "Ce que j'aiguise.", ar: 'ما أصقله.' } as Localized,
    sub: { en: "A designer who codes never really stops learning — here's where my attention is these days.", fr: "Un designer qui code n'arrête jamais vraiment d'apprendre, voici où est mon attention en ce moment.", ar: 'المصمّم الذي يبرمج لا يتوقف عن التعلّم — هنا يتركّز اهتمامي هذه الأيام.' } as Localized,
  },
  learningTitle: { en: 'Currently learning', fr: "J'apprends en ce moment", ar: 'أتعلّم حالياً' } as Localized,
  learning: [
    { en: 'Deeper React & component architecture', fr: 'React & architecture de composants, plus en profondeur', ar: 'React وبنية المكوّنات بعمق أكبر' },
    { en: 'Design tokens & multi-brand theming', fr: 'Design tokens & theming multi-marques', ar: 'Design tokens وثيمنغ متعدد العلامات' },
    { en: 'AI agents & automation for real workflows', fr: 'Agents IA & automatisation pour de vrais workflows', ar: 'وكلاء الذكاء الاصطناعي والأتمتة لتدفّقات عمل حقيقية' },
    { en: 'Motion & 3D for product storytelling', fr: 'Motion & 3D pour raconter le produit', ar: 'موشن و3D لسرد المنتج' },
  ] as Localized[],
  toolsTitle: { en: 'Tools I reach for', fr: 'Mes outils', ar: 'أدواتي' } as Localized,
  tools: ['Figma', 'Framer', 'React', 'Tailwind', 'Cursor', 'Claude', 'Higgsfield', 'Git'],
};
