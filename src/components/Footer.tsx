import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-section border-t border-border/60">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <div className="text-sm text-fg-muted">
          <span className="font-medium text-fg">Ahmed Bouamama</span> — Doha, Qatar
        </div>
        <nav className="flex items-center gap-5 text-sm text-fg-muted" aria-label="Footer">
          <Link to="/work" className="hover:text-fg transition-colors">{t.nav.work}</Link>
          <Link to="/about" className="hover:text-fg transition-colors">{t.nav.about}</Link>
          <Link to="/contact" className="hover:text-fg transition-colors">{t.nav.contact}</Link>
        </nav>
        <div className="text-xs text-fg-subtle">© {year}</div>
      </div>
    </footer>
  );
}
