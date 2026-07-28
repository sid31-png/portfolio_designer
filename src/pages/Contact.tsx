import { useI18n } from '@/i18n';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

export default function Contact() {
  const { t } = useI18n();
  return (
    <PagePlaceholder
      eyebrow={t.sections.contact}
      title={t.nav.contact}
      note="Email, WhatsApp, LinkedIn, Instagram and X — one clear place to reach me."
    />
  );
}
