import { useI18n } from '@/i18n';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

export default function Resume() {
  const { t } = useI18n();
  return (
    <PagePlaceholder
      eyebrow={t.sections.experience}
      title={t.nav.resume}
      note="A clean on-page résumé (experience, education, skills) driven by the content model, plus a one-page PDF download styled to match."
    />
  );
}
