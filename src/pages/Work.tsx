import { useI18n, useLoc } from '@/i18n';
import { projects } from '@/content/projects';
import { Reveal } from '@/components/Reveal';
import { SectionHead } from '@/components/ui/primitives';
import { ProjectCard } from '@/components/ProjectCard';
import { SEO } from '@/components/SEO';

export default function Work() {
  const { t } = useI18n();
  const L = useLoc();

  return (
    <>
      <SEO title={t.nav.work} description={L({ en: 'Selected product, web and design-system work.', fr: 'Projets produit, web et design system sélectionnés.', ar: 'أعمال مختارة في المنتج والويب وأنظمة التصميم.' })} />
      <section className="container-page py-section">
        <SectionHead
          eyebrow={t.sections.featuredWork}
          title={L({ en: 'Projects I owned, designed and shipped end-to-end.', fr: 'Des projets que j’ai possédés, conçus et livrés de bout en bout.', ar: 'مشاريع امتلكتُها وصمّمتُها وأنجزتُها من البداية إلى النهاية.' })}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="div" key={p.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
