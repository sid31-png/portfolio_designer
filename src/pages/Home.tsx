import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { heroStats, impactBars } from '@/content/stats';
import { services, servicesIntro } from '@/content/resume';
import { featuredProjects } from '@/content/projects';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHead, LinkButton, AnchorButton } from '@/components/ui/primitives';
import { StatCounter } from '@/components/StatCounter';
import { ImpactBar } from '@/components/ImpactBar';
import { Showreel } from '@/components/Showreel';
import { ProjectCard } from '@/components/ProjectCard';
import { SEO } from '@/components/SEO';

export default function Home() {
  const { t } = useI18n();
  const L = useLoc();
  const featured = featuredProjects();

  return (
    <>
      <SEO description={L(profile.heroLead)} />

      {/* HERO */}
      <section className="container-page pt-16 pb-section sm:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr,0.85fr]">
          <Reveal>
            <p className="eyebrow mb-5">{L(profile.heroEyebrow)}</p>
            <h1 className="text-display font-semibold text-fg">{L(profile.aboutTitle)}</h1>
            <p className="mt-3 text-h3 font-medium text-fg-muted">{L(profile.heroSubtitle)}</p>
            <p className="prose-block mt-6">{L(profile.heroLead)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton to="/work">{t.actions.seeWork}</LinkButton>
              <AnchorButton href={asset(profile.cv)} variant="ghost" download>
                {t.actions.downloadCv} ↓
              </AnchorButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-3xl border border-border bg-bg-elev shadow-sm">
                <img
                  src={asset(profile.headshot)}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover"
                  width={480}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-4 -start-4 rounded-2xl border border-border bg-bg px-4 py-3 shadow-sm">
                <p className="text-lg font-semibold text-fg">{L(profile.aboutBadge.number)}</p>
                <p className="text-xs text-fg-subtle">{L(profile.aboutBadge.text)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border/60 bg-bg-elev/40">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal as="div" key={i} delay={i * 0.06}>
              <StatCounter value={s.value} suffix={s.suffix} className="text-h1 font-semibold tabular-nums text-fg" />
              <p className="mt-1 text-sm text-fg-subtle">{L(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT I DO */}
      <Section id="services">
        <SectionHead eyebrow={t.sections.whatIDo} title={L(servicesIntro.title)} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="article" key={i} delay={(i % 3) * 0.06} className="rounded-2xl border border-border bg-bg-elev/40 p-6">
              <span className="text-2xl text-accent">{s.icon}</span>
              <h3 className="mt-3 text-h3 font-semibold text-fg">{L(s.title)}</h3>
              <p className="prose-block mt-2 text-[0.95rem]">{L(s.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact" alt>
        <SectionHead eyebrow={t.sections.impact} title={L({ en: 'Numbers I’m proud of.', fr: 'Des chiffres dont je suis fier.', ar: 'أرقام أفخر بها.' })} />
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {impactBars.map((b, i) => (
            <Reveal as="div" key={i} delay={(i % 2) * 0.08}>
              <ImpactBar value={b.value} suffix={b.suffix} label={L(b.label)} note={L(b.note)} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SELECTED WORK */}
      <Section id="work">
        <SectionHead eyebrow={t.sections.featuredWork} title={L({ en: 'Projects I owned, designed and shipped end-to-end.', fr: 'Des projets que j’ai possédés, conçus et livrés de bout en bout.', ar: 'مشاريع امتلكتُها وصمّمتُها وأنجزتُها من البداية إلى النهاية.' })} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal as="div" key={p.slug} delay={(i % 2) * 0.08} className={i === 0 ? 'sm:col-span-2' : ''}>
              <ProjectCard project={p} feature={i === 0} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <LinkButton to="/work" variant="ghost">
            {t.nav.work} →
          </LinkButton>
        </div>
      </Section>

      {/* SHOWREEL */}
      <Section id="showreel" alt>
        <SectionHead
          eyebrow={t.sections.showreel}
          title={L({ en: 'Video editing & generation.', fr: 'Montage & génération vidéo.', ar: 'مونتاج وتوليد الفيديو.' })}
          sub={L({ en: 'Short-form edits and AI-generated video for brand and social — motion that sells.', fr: 'Montages courts et vidéo générée par IA pour la marque et le social, du motion qui vend.', ar: 'مونتاجات قصيرة وفيديو مولّد بالذكاء الاصطناعي للعلامة والسوشيال — موشن يبيع.' })}
        />
        <Reveal className="mt-10">
          <Showreel src={profile.showreel} className="mx-auto max-w-3xl" />
        </Reveal>
      </Section>
    </>
  );
}
