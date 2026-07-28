import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { fr } from './fr';
import { ar } from './ar';

export type Lang = 'en' | 'fr' | 'ar';

const DICTS: Record<Lang, Dictionary> = { en, fr, ar };
export const LANGS: Lang[] = ['en', 'fr', 'ar'];
const RTL_LANGS: Lang[] = ['ar'];

interface I18nContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  setLang: (l: Lang) => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem('lang') as Lang | null;
    if (saved && LANGS.includes(saved)) return saved;
  } catch {
    /* ignore */
  }
  const nav = window.navigator.language.slice(0, 2).toLowerCase();
  if (nav === 'fr') return 'fr';
  if (nav === 'ar') return 'ar';
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  // Reflect language + direction onto <html> so CSS logical properties,
  // the Arabic font and screen readers all behave correctly.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', dir);
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, dir, t: DICTS[lang], setLang, isRTL: dir === 'rtl' }),
    [lang, dir, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

/**
 * Returns a picker for inline Localized content ({ en, fr, ar }) bound to the
 * active language, so components can write L(project.title) instead of
 * project.title[lang].
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useLoc() {
  const { lang } = useI18n();
  return (value: { en: string; fr: string; ar: string }) => value[lang];
}
