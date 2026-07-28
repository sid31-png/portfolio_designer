import { useI18n } from '@/i18n';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

export default function Work() {
  const { t } = useI18n();
  return (
    <PagePlaceholder
      eyebrow={t.sections.featuredWork}
      title={t.nav.work}
      note="A grid of case studies — RCH CRM/ERP, RCH Saudi website, RCH Landing (Figma) — each opening a full, research-first case study."
    />
  );
}
