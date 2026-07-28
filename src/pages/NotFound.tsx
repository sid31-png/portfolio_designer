import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="container-page grid min-h-[60vh] place-items-center py-section text-center">
      <div>
        <p className="text-display font-semibold text-fg">404</p>
        <p className="prose-block mx-auto mt-4">{t.misc.notFound}</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          {t.misc.goHome}
        </Link>
      </div>
    </div>
  );
}
