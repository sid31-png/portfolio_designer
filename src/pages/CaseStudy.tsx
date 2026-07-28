import { Link, useParams } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

// Scaffold — the generic 9-section case-study renderer (metadata → problem →
// research → flows → wireframes → solution → build → AI → outcome) is built in
// step 5 from the typed project content.
export default function CaseStudy() {
  const { slug } = useParams();
  const { t } = useI18n();
  return (
    <div>
      <PagePlaceholder eyebrow={t.nav.work} title={slug ?? 'Case study'} />
      <div className="container-page pb-section">
        <Link to="/work" className="link-underline text-sm">
          ← {t.actions.backToWork}
        </Link>
      </div>
    </div>
  );
}
