import { LANGS, useI18n, type Lang } from '@/i18n';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';
import { ar } from '@/i18n/ar';

const SHORTS: Record<Lang, string> = {
  en: en.meta.short,
  fr: fr.meta.short,
  ar: ar.meta.short,
};

/**
 * Segmented EN / FR / ع switcher. Selecting Arabic flips the whole document
 * to RTL (handled in the I18nProvider effect).
 */
export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-0.5 rounded-full border border-border bg-bg-elev/60 p-0.5"
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={[
              'min-w-8 rounded-full px-2 py-1 text-xs font-medium transition-colors',
              l === 'ar' ? 'text-sm leading-none' : '',
              active ? 'bg-fg text-bg' : 'text-fg-muted hover:text-fg',
            ].join(' ')}
          >
            {SHORTS[l]}
          </button>
        );
      })}
    </div>
  );
}
