import type { Localized } from './types';

/**
 * Core identity + contact. Text is verbatim from Ahmed's current site (EN from
 * the markup, FR/AR from its i18n.js). The public title leads with "Product
 * Designer" per the brief's repositioning for the target role, while keeping
 * front-end as a strong second — the rest of the copy is unchanged.
 */

export const profile = {
  name: 'Ahmed Bouamama',
  fullName: 'Ahmed Abdelrahim Bouamama',

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

  // Profile paragraphs taken from Ahmed's Product Designer CV (EN verbatim;
  // FR/AR are faithful translations of his own bio — flagged for review).
  aboutParagraphs: [
    {
      en: 'Product Designer & Front-End Developer based in Doha, dedicated to building digital experiences that put people first. I bridge the gap between user needs and clean code by sitting down with real users, mapping their workflows, and carrying those insights from wireframes to the final front-end that ships.',
      fr: "Product Designer & développeur front-end basé à Doha, attaché à construire des expériences numériques qui placent les gens d'abord. Je fais le lien entre les besoins des utilisateurs et un code propre : je m'assois avec de vrais utilisateurs, je cartographie leurs workflows, et je porte ces enseignements du wireframe au front-end final qui part en production.",
      ar: 'مصمّم منتجات ومطوّر واجهات أمامية مقيم في الدوحة، ملتزم ببناء تجارب رقمية تضع الإنسان أولاً. أصل بين احتياجات المستخدمين والكود النظيف: أجلس مع مستخدمين حقيقيين، وأرسم مسارات عملهم، وأنقل هذه الرؤى من التخطيط الأولي إلى الواجهة الأمامية النهائية التي تُطلق.',
    },
    {
      en: 'By integrating AI as a collaborative partner to accelerate prototyping, I recently delivered a comprehensive internal CRM/ERP and a bilingual corporate website from the ground up. My end-to-end practice blends five years of cross-functional experience with a strict adherence to human-centred design principles (ISO 9241-210).',
      fr: "En intégrant l'IA comme partenaire pour accélérer le prototypage, j'ai récemment livré un CRM/ERP interne complet et un site corporate bilingue, de zéro. Ma pratique de bout en bout mêle cinq ans d'expérience transverse à une adhésion stricte aux principes du design centré utilisateur (ISO 9241-210).",
      ar: 'وبدمج الذكاء الاصطناعي كشريك لتسريع النمذجة، أنجزت مؤخراً نظام CRM/ERP داخلياً متكاملاً وموقعاً مؤسسياً ثنائي اللغة من الصفر. تمزج ممارستي الشاملة خمس سنوات من الخبرة متعددة الوظائف بالتزام صارم بمبادئ التصميم المتمحور حول الإنسان (ISO 9241-210).',
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

  headshot: 'assets/ahmed-portrait.jpg',
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
