import type { Lang } from '@/i18n';

/**
 * A string available in the three site languages. Content is authored inline
 * (colocated with the data) rather than in the i18n dictionaries, because the
 * rich prose — about, experience, case studies — is easier to maintain next to
 * the thing it describes. All three values come straight from Ahmed's current
 * site (EN from the markup, FR + AR from its i18n.js), so the voice is his.
 */
export interface Localized {
  en: string;
  fr: string;
  ar: string;
}

/** Resolve a Localized value for the active language. */
export const loc = (value: Localized, lang: Lang): string => value[lang];

/** Convenience for building a Localized where a value is language-neutral. */
export const same = (value: string): Localized => ({ en: value, fr: value, ar: value });
