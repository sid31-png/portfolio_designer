import { useI18n } from '@/i18n';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

export default function About() {
  const { t } = useI18n();
  return (
    <PagePlaceholder
      eyebrow={t.sections.about}
      title={t.nav.about}
      note="My story, how I work (4-step process), skills split into Design & Product and Front-End & Build, languages, and what I'm sharpening now."
    />
  );
}
