import type { Localized } from './types';

/**
 * Core identity + contact. Text is verbatim from Ahmed's current site (EN from
 * the markup, FR/AR from its i18n.js). The public title leads with "Product
 * Designer" per the brief's repositioning for the target role, while keeping
 * front-end as a strong second — the rest of the copy is unchanged.
 */

export const profile = {
  name: 'Ahmed Bouamama',

  // Repositioned design-first (brief §0/§9); front-end stays a strong second.
  title: {
    en: 'Product Designer · UI/UX & Front-End',
    fr: 'Product Designer · UI/UX & Front-End',
    ar: 'مصمّم منتجات · UI/UX وواجهات أمامية',
  } as Localized,

  location: {
    en: 'Doha, Qatar',
    fr: 'Doha, Qatar',
    ar: 'الدوحة، قطر',
  } as Localized,

  heroEyebrow: {
    en: 'Doha, Qatar · Available for select projects',
    fr: 'Doha, Qatar · Disponible pour des projets sélectionnés',
    ar: 'الدوحة، قطر · متاح لمشاريع مختارة',
  } as Localized,

  heroSubtitle: {
    en: 'UI/UX Designer · Front-End Developer',
    fr: 'UI/UX Designer · Développeur Front-End',
    ar: 'مصمّم UI/UX · مطوّر واجهات أمامية',
  } as Localized,

  // The one-line positioning (brief §6 / current hero_lead). HTML-free.
  heroLead: {
    en: 'I turn marketing and operations problems into real digital products — from UI/UX and front-end builds to the internal software that runs the business. I design and ship products end-to-end, grounded in human-centred design (ISO 9241-210).',
    fr: "Je transforme les enjeux marketing et opérationnels en vrais produits digitaux, de l'UI/UX et du front-end jusqu'au logiciel interne qui fait tourner l'entreprise. Je conçois et je livre de bout en bout, ancré dans le design centré utilisateur (ISO 9241-210).",
    ar: 'أحوّل تحديات التسويق والعمليات إلى منتجات رقمية حقيقية — من UI/UX والواجهة الأمامية إلى البرمجيات الداخلية التي تُدير الأعمال. أصمّم وأُطلق من البداية إلى النهاية، مستنداً إلى التصميم المتمحور حول الإنسان (ISO 9241-210).',
  } as Localized,

  aboutTitle: {
    en: 'I design products, and I build them.',
    fr: 'Je conçois des produits, et je les construis.',
    ar: 'أُصمّم المنتجات وأبنيها.',
  } as Localized,

  aboutParagraphs: [
    {
      en: "I'm Ahmed, based in Doha. Across every role my work has stayed close to marketing and digital, and to building the internal software that makes a business run. From websites and brand to dashboards and internal tools, I design the experience and then write the front-end that ships it.",
      fr: "Je suis Ahmed, basé à Doha. À chaque poste, mon travail est resté proche du marketing et du digital, et de la construction du logiciel interne qui fait tourner l'entreprise. Des sites et de la marque jusqu'aux dashboards et outils internes, je conçois l'expérience puis j'écris le front-end qui la met en ligne.",
      ar: 'أنا أحمد، مقيم في الدوحة. في كل دور بقي عملي قريباً من التسويق والرقمي، ومن بناء البرمجيات الداخلية التي تُشغّل الأعمال. من المواقع والعلامة إلى لوحات التحكم والأدوات الداخلية، أُصمّم التجربة ثم أكتب الواجهة الأمامية التي تُطلقها.',
    },
    {
      en: 'Most recently I designed and built a full CRM/ERP for RCH — design system, screens and front-end — to manage clients, compliance and collections across two entities. I work the way the standard prescribes: human-centred design, ISO 9241-210, applied to real products people use every day.',
      fr: "Récemment, j'ai conçu et développé un CRM/ERP complet pour RCH, design system, écrans et front-end, pour gérer clients, conformité et recouvrement sur deux entités. Je travaille comme le prescrit la norme : design centré utilisateur, ISO 9241-210, appliqué à de vrais produits utilisés au quotidien.",
      ar: 'حديثاً صمّمت وطوّرت نظام CRM/ERP كاملاً لـ RCH، نظام تصميم وشاشات وواجهة أمامية، لإدارة العملاء والامتثال والتحصيل عبر كيانين. أعمل كما تنصّ المعايير: تصميم متمحور حول الإنسان، ISO 9241-210، مطبّق على منتجات حقيقية تُستخدم يومياً.',
    },
  ] as Localized[],

  aboutBadge: {
    number: {
      en: '5+ yrs',
      fr: '5+ ans',
      ar: '+5 سنوات',
    } as Localized,
    text: {
      en: 'marketing · digital · product',
      fr: 'marketing · digital · produit',
      ar: 'تسويق · رقمي · منتج',
    } as Localized,
  },

  headshot: 'assets/ahmed-headshot.jpg',
  showreel: 'assets/showreel.mp4',
  cv: 'cv/ahmed-bouamama-cv.pdf',

  languages: [
    { label: { en: 'Arabic', fr: 'Arabe', ar: 'العربية' }, level: { en: 'Native', fr: 'Langue maternelle', ar: 'اللغة الأم' } },
    { label: { en: 'English', fr: 'Anglais', ar: 'الإنجليزية' }, level: { en: 'Fluent', fr: 'Courant', ar: 'بطلاقة' } },
    { label: { en: 'French', fr: 'Français', ar: 'الفرنسية' }, level: { en: 'Fluent', fr: 'Courant', ar: 'بطلاقة' } },
  ] as { label: Localized; level: Localized }[],

  // Contact + socials — exact destinations from the current site.
  contact: {
    email: 'ahmedbouamama3105@gmail.com',
    whatsappLabel: '+974 50314732',
    whatsapp: 'https://wa.me/message/OPR5GQJAE3MUC1',
    linkedin: 'https://www.linkedin.com/in/ahmed-bouamama',
    instagram: 'https://www.instagram.com/sid_boua',
    x: 'https://x.com/sidahmedbouama2',
  },

  contactTitle: {
    en: 'Let’s build something clean and clever.',
    fr: "Construisons quelque chose de clair et d'astucieux.",
    ar: 'لنبنِ شيئاً نظيفاً وذكياً.',
  } as Localized,

  contactLead: {
    en: 'Available for freelance projects and open to full-time roles in product, UI/UX and front-end. The fastest way to reach me:',
    fr: 'Disponible pour des missions en freelance et ouvert aux postes à temps plein en produit, UI/UX et front-end. Le plus rapide pour me joindre :',
    ar: 'متاح لمشاريع العمل الحر ومنفتح على وظائف بدوام كامل في المنتج وUI/UX والواجهة الأمامية. أسرع طريقة للوصول إليّ:',
  } as Localized,
} as const;
