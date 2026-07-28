import type { Project } from './index';

/**
 * RCH CRM / ERP — the strongest end-to-end product story: design system,
 * dashboards, clients/compliance/collections across two entities. Confidential,
 * so screens are a sanitized preview. Several research/UX sections are clean
 * labelled placeholders until Ahmed drops in flow/journey/wireframe artifacts
 * (see README "assets needed").
 */
export const rchCrm: Project = {
  slug: 'rch-crm-erp',
  title: {
    en: 'RCH CRM / ERP — Internal Product',
    fr: 'RCH CRM / ERP — Produit interne',
    ar: 'RCH CRM / ERP — منتج داخلي',
  },
  tagline: {
    en: 'A full internal product I designed and built — design system, dashboards, clients, compliance and collections across two entities.',
    fr: "Un produit interne complet que j'ai conçu et développé — design system, dashboards, clients, conformité et recouvrement sur deux entités.",
    ar: 'منتج داخلي كامل صمّمته وطوّرته — نظام تصميم ولوحات تحكم وعملاء وامتثال وتحصيل عبر كيانين.',
  },
  cardText: {
    en: 'An internal product I designed & built — design system, dashboard, clients, compliance & collections across two entities. Confidential; sanitized design preview.',
    fr: "Un produit interne que j'ai conçu & développé, design system, dashboard, clients, conformité & recouvrement sur deux entités. Confidentiel ; aperçu de design anonymisé.",
    ar: 'منتج داخلي صمّمته وطوّرته — نظام تصميم ولوحة تحكم وعملاء وامتثال وتحصيل عبر كيانين. سري؛ معاينة تصميم مُنقّاة.',
  },
  tags: ['Product', 'CRM / ERP', 'Design System', 'Front-End'],
  cover: {
    kind: 'image',
    src: 'assets/rch-crm-preview.jpg',
    alt: { en: 'RCH CRM / ERP design preview', fr: 'Aperçu du design RCH CRM / ERP', ar: 'معاينة تصميم RCH CRM / ERP' },
  },
  featured: true,
  confidential: true,
  externalUrl: 'projects/rch-crm.html',
  cardLink: { en: 'View the design preview ↗', fr: "Voir l'aperçu design ↗", ar: 'عرض معاينة التصميم ↗' },
  meta: {
    role: {
      en: 'Product Designer & Front-End Developer, solo',
      fr: 'Product Designer & Développeur Front-End, solo',
      ar: 'مصمّم منتج ومطوّر واجهات أمامية، منفرداً',
    },
    scope: {
      en: 'Research · Design system · Dashboards · Front-end',
      fr: 'Recherche · Design system · Dashboards · Front-end',
      ar: 'بحث · نظام تصميم · لوحات تحكم · واجهة أمامية',
    },
    tools: 'Figma · React · Tailwind · Claude · Cursor',
    year: '2025',
  },
  sections: [
    {
      kind: 'problem',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'RCH ran clients, compliance and collections across two entities on spreadsheets and email. Nothing shared a single source of truth, so status was hard to see and government processing was slow. They needed one internal product to run the business.',
            fr: "RCH gérait clients, conformité et recouvrement sur deux entités avec des tableurs et des e-mails. Rien ne partageait une source de vérité unique, le statut était difficile à voir et le traitement gouvernemental était lent. Il fallait un seul produit interne pour faire tourner l'activité.",
            ar: 'كانت RCH تُدير العملاء والامتثال والتحصيل عبر كيانين باستخدام جداول البيانات والبريد. لا شيء يشترك في مصدر حقيقة واحد، فكان تتبّع الحالة صعباً والمعالجة الحكومية بطيئة. احتاجوا إلى منتج داخلي واحد يُدير الأعمال.',
          },
        },
      ],
    },
    {
      kind: 'research',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'I sat with the PROs and account managers who run mandates every day — what they re-key, where things stall, which numbers they chase at month-end. That fieldwork set the priorities: a shared client record, a compliance timeline, and collections that surface aging automatically.',
            fr: "Je me suis assis avec les PRO et les gestionnaires de comptes qui traitent les dossiers chaque jour, ce qu'ils re-saisissent, où ça bloque, quels chiffres ils courent en fin de mois. Ce terrain a fixé les priorités : une fiche client partagée, une chronologie de conformité, et un recouvrement qui fait remonter l'ancienneté automatiquement.",
            ar: 'جلستُ مع موظفي العلاقات ومديري الحسابات الذين يُديرون المعاملات يومياً — ما الذي يُعيدون إدخاله، أين تتعطّل الأمور، وأي أرقام يلاحقونها في نهاية الشهر. حدّد هذا العمل الميداني الأولويات: سجل عميل مشترك، وخط زمني للامتثال، وتحصيل يُظهر التقادم تلقائياً.',
          },
        },
        { type: 'placeholder', label: { en: 'User journey / discovery notes', fr: 'Parcours utilisateur / notes de découverte', ar: 'رحلة المستخدم / ملاحظات الاستكشاف' } },
      ],
    },
    {
      kind: 'flows',
      blocks: [
        { type: 'placeholder', label: { en: 'Flow diagram — mandate lifecycle across the two entities', fr: 'Diagramme de flux — cycle de vie d\'un dossier sur les deux entités', ar: 'مخطط التدفق — دورة حياة المعاملة عبر الكيانين' } },
      ],
    },
    {
      kind: 'wireframes',
      blocks: [
        { type: 'placeholder', label: { en: 'Low-fi wireframes → hi-fi screens', fr: 'Wireframes low-fi → écrans hi-fi', ar: 'تخطيطات أولية → شاشات نهائية' } },
      ],
    },
    {
      kind: 'solution',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'A single design system underpins the whole product — tokens pulled straight from the front-end globals, a daily dashboard split into lead and lag indicators, and per-entity views for Rapid and RCHBS. The preview below is sanitized; it mirrors the real component classes.',
            fr: "Un design system unique sous-tend tout le produit, des tokens tirés directement des globals du front-end, un dashboard quotidien séparant indicateurs avancés et retardés, et des vues par entité pour Rapid et RCHBS. L'aperçu ci-dessous est anonymisé ; il reflète les vraies classes de composants.",
            ar: 'نظام تصميم واحد يقوم عليه المنتج كله — رموز مأخوذة مباشرةً من globals الواجهة الأمامية، ولوحة يومية مقسّمة إلى مؤشرات قائدة ومتأخرة، وعروض لكل كيان لـ Rapid وRCHBS. المعاينة أدناه مُنقّاة؛ تعكس فئات المكوّنات الحقيقية.',
          },
        },
        {
          type: 'htmlEmbed',
          src: 'projects/rch-crm.html',
          url: 'rch-erp — design preview',
          title: { en: 'RCH ERP — design system & screens', fr: 'RCH ERP — design system & écrans', ar: 'RCH ERP — نظام التصميم والشاشات' },
        },
      ],
    },
    {
      kind: 'build',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'I wrote the front-end myself in React & Tailwind, with the design tokens as the single source of truth so brand and product never drift. AI-assisted dev (Cursor, Claude Code) kept the pace up without giving up control of the details.',
            fr: "J'ai écrit le front-end moi-même en React & Tailwind, avec les design tokens comme source de vérité unique pour que marque et produit ne dérivent jamais. Le dev assisté par IA (Cursor, Claude Code) a tenu le rythme sans céder le contrôle des détails.",
            ar: 'كتبتُ الواجهة الأمامية بنفسي بـ React وTailwind، مع design tokens كمصدر حقيقة واحد كي لا تنحرف العلامة والمنتج أبداً. حافظ التطوير بمساعدة الذكاء الاصطناعي (Cursor، Claude Code) على الوتيرة دون التخلي عن التحكّم في التفاصيل.',
          },
        },
      ],
    },
    {
      kind: 'ai',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'AI ran through the whole build: Claude for turning fuzzy requirements into flows and copy, Cursor and Claude Code for shipping the front-end faster, and Higgsfield for brand visuals. It accelerated discovery and prototyping without replacing the design decisions — those stayed mine.',
            fr: "L'IA a traversé tout le build : Claude pour transformer des besoins flous en flux et en copy, Cursor et Claude Code pour livrer le front-end plus vite, et Higgsfield pour les visuels de marque. Ça a accéléré la découverte et le prototypage sans remplacer les décisions de design, elles sont restées les miennes.",
            ar: 'مرّ الذكاء الاصطناعي عبر البناء كله: Claude لتحويل المتطلبات الغامضة إلى مسارات ونصوص، وCursor وClaude Code لإطلاق الواجهة الأمامية أسرع، وHiggsfield للصور. سرّع الاستكشاف والنمذجة دون أن يحلّ محل قرارات التصميم — بقيت تلك قراراتي.',
          },
        },
      ],
    },
    {
      kind: 'outcome',
      blocks: [
        {
          type: 'metrics',
          items: [
            { value: 20, suffix: '%', label: { en: 'Faster government processing', fr: 'Traitement gouvernemental plus rapide', ar: 'معالجة حكومية أسرع' } },
            { value: 500, suffix: '+', label: { en: 'Mandates run on the tools', fr: 'Dossiers gérés via les outils', ar: 'معاملات تُدار عبر الأدوات' } },
          ],
        },
        {
          type: 'text',
          body: {
            en: 'The tools I shipped cut processing time 20% across 500+ mandates. Next: extend the collections module and add role-based views for the two entities.',
            fr: "Les outils que j'ai livrés ont réduit le temps de traitement de 20% sur 500+ mandats. Ensuite : étendre le module de recouvrement et ajouter des vues par rôle pour les deux entités.",
            ar: 'خفّضت الأدوات التي أطلقتها زمن المعالجة 20% عبر +500 معاملة. التالي: توسيع وحدة التحصيل وإضافة عروض حسب الدور للكيانين.',
          },
        },
      ],
    },
  ],
};
