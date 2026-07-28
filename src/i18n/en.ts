/**
 * English is the source-of-truth dictionary. fr.ts and ar.ts must match this
 * shape (they are typed as `typeof en`). Long-form case-study prose is NOT
 * kept here — it lives in the typed content files. This holds UI chrome +
 * short section labels only.
 */
export const en = {
  meta: {
    langName: 'English',
    short: 'EN',
  },
  nav: {
    home: 'Home',
    work: 'Work',
    about: 'About',
    resume: 'Resume',
    contact: 'Contact',
    skipToContent: 'Skip to content',
  },
  actions: {
    seeWork: 'See my work',
    downloadCv: 'Download CV',
    viewCaseStudy: 'View case study',
    backToWork: 'Back to work',
    toggleTheme: 'Toggle light / dark',
    toggleMotion: 'Toggle background motion',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    playShowreel: 'Play showreel',
    fullscreen: 'Fullscreen',
  },
  sections: {
    whatIDo: 'what i do',
    impact: 'impact',
    featuredWork: 'selected work',
    showreel: 'showreel',
    about: 'about',
    howIWork: 'how i work',
    skills: 'skills',
    languages: 'languages',
    now: 'now',
    experience: 'experience',
    education: 'education',
    contact: 'contact',
  },
  contact: {
    lead: 'Let’s talk',
    email: 'Email',
    whatsapp: 'WhatsApp',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    x: 'X',
  },
  caseStudy: {
    role: 'Role',
    scope: 'Scope',
    tools: 'Tools',
    year: 'Year',
    problem: 'the problem',
    research: 'research & discovery',
    flows: 'flows & information architecture',
    wireframes: 'wireframes to hi-fi',
    solution: 'the solution',
    build: 'build',
    ai: 'ai in the workflow',
    outcome: 'outcome & what’s next',
  },
  misc: {
    placeholder: 'Asset coming soon',
    notFound: 'This page wandered off.',
    goHome: 'Go home',
    figmaNote: 'Live Figma file',
  },
} as const;

// Widen the `as const` literal leaves back to `string` so fr.ts / ar.ts can be
// typed as `Dictionary` (same shape, different strings) while consumers still
// get full key-path autocomplete from the structure.
type Widen<T> = { [K in keyof T]: T[K] extends string ? string : Widen<T[K]> };
export type Dictionary = Widen<typeof en>;
