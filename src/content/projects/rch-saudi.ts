import type { Project } from './index';

/**
 * RCH Saudi corporate website — concept → IA → visual system → live build,
 * bilingual EN/AR, with a real before/after (rch.sa vs the redesign).
 * Copy is verbatim from Ahmed's current site (EN markup, FR/AR i18n.js),
 * remapped into the research-first 9-section structure.
 */
export const rchSaudi: Project = {
  slug: 'rch-saudi-website',
  title: {
    en: 'RCH Saudi — Corporate Website',
    fr: 'RCH Saudi — Site corporate',
    ar: 'RCH السعودية — موقع مؤسسي',
  },
  tagline: {
    en: "Designing and building the digital front door for RCH's launch in Saudi Arabia.",
    fr: "Concevoir et construire la vitrine digitale du lancement de RCH en Arabie Saoudite.",
    ar: 'تصميم وبناء الواجهة الرقمية لإطلاق RCH في السعودية.',
  },
  cardText: {
    en: "Concept, UI/UX and front-end design for RCH's expansion into the Saudi market, built and shipped solo.",
    fr: "Concept, UI/UX et design front-end pour l'expansion de RCH sur le marché saoudien, conçu et livré en solo.",
    ar: 'الفكرة وتصميم تجربة المستخدم والواجهة الأمامية لتوسّع RCH في السوق السعودي، صُمّم ونُفّذ منفرداً.',
  },
  tags: ['Web Design', 'UI/UX', 'Front-End', 'Brand'],
  cover: {
    kind: 'image',
    src: 'assets/rch-saudi-preview.jpg',
    alt: { en: 'RCH Saudi redesign', fr: 'Refonte RCH Saudi', ar: 'إعادة تصميم RCH السعودية' },
  },
  featured: true,
  externalUrl: 'projects/rch-saudi.html',
  cardLink: { en: 'Read the case study →', fr: "Lire l'étude de cas →", ar: 'اقرأ دراسة الحالة →' },
  meta: {
    role: {
      en: 'UI/UX Designer & Front-End Developer, solo',
      fr: 'UI/UX Designer & Développeur Front-End, solo',
      ar: 'مصمّم UI/UX ومطوّر واجهات أمامية، منفرداً',
    },
    scope: {
      en: 'Concept · UI/UX · Front-end · Copy direction',
      fr: 'Concept · UI/UX · Front-end · Direction éditoriale',
      ar: 'الفكرة · UI/UX · الواجهة الأمامية · توجيه النصوص',
    },
    tools: 'Figma · Framer · React · Tailwind · Claude',
    year: '2025',
  },
  sections: [
    {
      kind: 'problem',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'RCH needed a credible presence to enter the Saudi market. I owned the whole thing, from positioning and information architecture to the visual language, the components and the live build. Every decision below started as my idea and was handled hands-on, not handed off.',
            fr: "RCH avait besoin d'une présence crédible pour entrer sur le marché saoudien. J'ai tout pris en main, du positionnement et de l'architecture de l'information jusqu'au langage visuel, aux composants et au build en ligne. Chaque décision ci-dessous est partie de mon idée et a été gérée concrètement, sans la déléguer.",
            ar: 'احتاجت RCH إلى حضور موثوق لدخول السوق السعودي. تولّيتُ كل شيء، من التموضع وهندسة المعلومات إلى اللغة البصرية والمكوّنات والبناء المباشر. كل قرار أدناه بدأ كفكرة لي ونُفّذ بيديّ، لا بتفويضه.',
          },
        },
      ],
    },
    {
      kind: 'research',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              n: '01',
              title: { en: 'Positioning & structure', fr: 'Positionnement & structure', ar: 'التموضع والبنية' },
              body: {
                en: 'Defined who the site speaks to, mapped the journey for government & corporate clients, and structured the pages around trust and compliance.',
                fr: 'Défini à qui le site s\'adresse, cartographié le parcours des clients gouvernementaux & corporate, et structuré les pages autour de la confiance et de la conformité.',
                ar: 'حدّدتُ لمن يتحدث الموقع، ورسمتُ رحلة العملاء الحكوميين والمؤسسيين، ونظّمتُ الصفحات حول الثقة والامتثال.',
              },
            },
          ],
        },
      ],
    },
    {
      kind: 'wireframes',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              n: '02',
              title: { en: 'Visual system', fr: 'Système visuel', ar: 'النظام البصري' },
              body: {
                en: 'Built a clean, Apple-inspired design system in Figma — typography scale, spacing, colour and reusable components for a consistent look across the site.',
                fr: "Construit un design system clair, inspiré d'Apple, dans Figma, échelle typographique, espacements, couleurs et composants réutilisables pour une cohérence sur tout le site.",
                ar: 'بنيتُ نظام تصميم نظيفاً مستوحى من Apple في Figma — مقياس الخطوط والمسافات والألوان ومكوّنات قابلة لإعادة الاستخدام لاتساق عبر الموقع.',
              },
            },
          ],
        },
      ],
    },
    {
      kind: 'solution',
      blocks: [
        {
          type: 'image',
          wide: true,
          image: {
            src: 'assets/rch-workspace-tour.png',
            alt: {
              en: 'RCH generative brand visual — Book Your Workspace Tour',
              fr: 'Visuel de marque RCH généré — Book Your Workspace Tour',
              ar: 'تصميم بصري لعلامة RCH — Book Your Workspace Tour',
            },
            caption: {
              en: 'Generative brand visual I created with Higgsfield, “Book Your Workspace Tour”, in RCH’s navy & magenta.',
              fr: 'Visuel de marque que j\'ai créé avec Higgsfield, « Book Your Workspace Tour », aux couleurs navy & magenta de RCH.',
              ar: 'تصميم بصري للعلامة أنشأته بـ Higgsfield، «Book Your Workspace Tour» بألوان RCH الكحلي والأرجواني.',
            },
          },
        },
        {
          type: 'beforeAfter',
          before: {
            badge: { en: 'Before', fr: 'Avant', ar: 'قبل' },
            caption: { en: 'rch.sa, the existing site', fr: 'rch.sa, le site existant', ar: 'rch.sa، الموقع الحالي' },
            iframe: 'https://rch.sa/',
          },
          after: {
            badge: { en: 'After', fr: 'Après', ar: 'بعد' },
            caption: { en: 'My redesign, live', fr: 'Ma refonte, en ligne', ar: 'إعادة تصميمي، مباشر' },
            img: 'assets/rch-saudi-preview.jpg',
            live: 'projects/rch-saudi.html',
          },
          meta: {
            en: 'Built in React & Tailwind · bilingual EN / AR',
            fr: 'Conçu en React & Tailwind · bilingue EN / AR',
            ar: 'بُني بـ React وTailwind · ثنائي اللغة EN / AR',
          },
        },
      ],
    },
    {
      kind: 'build',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              n: '03',
              title: { en: 'Front-end build', fr: 'Build front-end', ar: 'بناء الواجهة الأمامية' },
              body: {
                en: 'Brought the design to life in Framer with responsive layouts, smooth interactions and fast load — no developer hand-off needed.',
                fr: 'Donné vie au design dans Framer avec des mises en page responsives, des interactions fluides et un chargement rapide, sans hand-off développeur.',
                ar: 'أحييتُ التصميم في Framer بتخطيطات متجاوبة وتفاعلات سلسة وتحميل سريع — دون تسليم لمطوّر.',
              },
            },
          ],
        },
      ],
    },
    {
      kind: 'ai',
      blocks: [
        {
          type: 'steps',
          items: [
            {
              n: '04',
              title: { en: 'AI-assisted content', fr: 'Contenu assisté par IA', ar: 'محتوى بمساعدة الذكاء الاصطناعي' },
              body: {
                en: 'Used Higgsfield and Claude to generate visuals and craft sharp, on-brand copy at speed.',
                fr: 'Utilisé Higgsfield et Claude pour générer des visuels et rédiger un copy net et fidèle à la marque, rapidement.',
                ar: 'استخدمتُ Higgsfield وClaude لتوليد الصور وصياغة نصوص دقيقة ومتوافقة مع العلامة بسرعة.',
              },
            },
          ],
        },
      ],
    },
    {
      kind: 'outcome',
      blocks: [
        {
          type: 'text',
          body: {
            en: 'A live, bilingual site RCH can put in front of Saudi clients — shipped end-to-end by one person. Open it and compare it to the old rch.sa above.',
            fr: 'Un site en ligne, bilingue, que RCH peut présenter à ses clients saoudiens, livré de bout en bout par une seule personne. Ouvrez-le et comparez-le à l\'ancien rch.sa ci-dessus.',
            ar: 'موقع مباشر ثنائي اللغة تستطيع RCH عرضه على عملائها السعوديين — أُنجز بالكامل بيد شخص واحد. افتحه وقارنه بموقع rch.sa القديم أعلاه.',
          },
        },
      ],
    },
  ],
};
