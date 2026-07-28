import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';
import { ContactBlock } from '@/components/ContactBlock';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const { t } = useI18n();
  const L = useLoc();

  return (
    <>
      <SEO title={t.nav.contact} description={L(profile.contactLead)} />
      <section className="container-page py-section">
        <Reveal>
          <p className="eyebrow mb-3">{t.sections.contact}</p>
          <h1 className="max-w-prose text-h1 font-semibold text-fg">{L(profile.contactTitle)}</h1>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <ContactBlock />
        </Reveal>
      </section>
    </>
  );
}
