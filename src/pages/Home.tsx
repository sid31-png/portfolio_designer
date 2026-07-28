import { Link } from 'react-router-dom';
import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { heroStats, impactBars } from '@/content/stats';
import { services, servicesIntro } from '@/content/resume';
import { projects } from '@/content/projects';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHead, LinkButton, AnchorButton } from '@/components/ui/primitives';
import { StatCounter } from '@/components/StatCounter';
import { ImpactBar } from '@/components/ImpactBar';
import { Showreel } from '@/components/Showreel';
import { WorkList } from '@/components/WorkList';
import { Marquee } from '@/components/Marquee';
import { Magnetic } from '@/components/Magnetic';
import { SEO } from '@/components/SEO';

export default function Home() {
  const { t } = useI18n();
  const L = useLoc();

  const marqueeItems = [
    'Product Design',
    'UI / UX',
    'Front-End',
    'Design Systems',
    'Human-Centred Design',
    'React',
    'Tailwind',
    'Generative AI',
  ];

  return (
    <>
      <SEO description={L(profile.heroLead)} />

      {/* HERO */}
      <section className="container-page pt-14 pb-16 sm:pt-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-fg-subtle">
            <span>{L(profile.heroEyebrow)}</span>
            <span className="hidden sm:inline">© {new Date().getFullYear()}</span>
          </div>
        </Reveal>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <h1 className="display-hero text-fg">
                Ahmed
                <br />
                <span className="text-accent">Bouamama</span>
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg font-medium uppercase tracking-widest text-fg-muted">
                {L(profile.heroSubtitle)}
              </p>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={0.12}>
            <Magnetic strength={0.15}>
              <div className="cursor-grow relative w-52 overflow-hidden rounded-2xl border border-border sm:w-64 md:w-72">
                <img
                  src={asset(profile.headshot)}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover object-[60%_top]"
                  width={480}
                  height={600}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-xs uppercase tracking-widest text-white/90">{L(profile.location)}</p>
                </div>
              </div>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <p className="prose-block mt-10 max-w-2xl">{L(profile.heroLead)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <LinkButton to="/work">{t.actions.seeWork}</LinkButton>
            </Magnetic>
            <Magnetic>
              <AnchorButton href={asset(profile.cv)} variant="ghost" download>
                {t.actions.downloadCv} ↓
              </AnchorButton>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border py-5 text-2xl font-extrabold uppercase tracking-tight text-fg sm:text-3xl">
        <Marquee items={marqueeItems} />
      </div>

      {/* STATS */}
      <section className="container-page grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
        {heroStats.map((s, i) => (
          <Reveal as="div" key={i} delay={i * 0.06}>
            <StatCounter value={s.value} suffix={s.suffix} className="text-5xl font-extrabold tabular-nums text-fg sm:text-6xl" />
            <p className="mt-2 text-sm text-fg-subtle">{L(s.label)}</p>
          </Reveal>
        ))}
      </section>

      {/* SELECTED WORK — big interactive list */}
      <Section id="work">
        <SectionHead
          eyebrow={t.sections.featuredWork}
          title={L({ en: 'Selected work.', fr: 'Projets choisis.', ar: 'أعمال مختارة.' })}
        />
        <div className="mt-10">
          <WorkList projects={projects} />
        </div>
      </Section>

      {/* WHAT I DO */}
      <Section id="services" alt>
        <SectionHead eyebrow={t.sections.whatIDo} title={L(servicesIntro.title)} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="article" key={i} delay={(i % 3) * 0.06} className="cursor-grow rounded-2xl border border-border bg-bg p-6 transition-colors hover:border-fg-subtle/50">
              <span className="text-2xl text-accent">{s.icon}</span>
              <h3 className="mt-3 text-h3 font-semibold text-fg">{L(s.title)}</h3>
              <p className="prose-block mt-2 text-[0.95rem]">{L(s.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact">
        <SectionHead eyebrow={t.sections.impact} title={L({ en: 'Numbers I’m proud of.', fr: 'Des chiffres dont je suis fier.', ar: 'أرقام أفخر بها.' })} />
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {impactBars.map((b, i) => (
            <Reveal as="div" key={i} delay={(i % 2) * 0.08}>
              <ImpactBar value={b.value} suffix={b.suffix} label={L(b.label)} note={L(b.note)} />
            </Reveal>
          ))}
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

      {/* CONTACT CTA */}
      <section className="container-page py-section text-center">
        <Reveal>
          <p className="eyebrow mb-8">{t.sections.contact}</p>
          <Magnetic strength={0.3}>
            <Link to="/contact" className="cursor-grow display-hero inline-block text-fg transition-colors hover:text-accent">
              {t.contact.lead}
              <span className="flip-rtl align-middle text-accent"> ↗</span>
            </Link>
          </Magnetic>
          <p className="mt-10 text-sm text-fg-subtle">{profile.contact.email}</p>
        </Reveal>
      </section>
    </>
  );
}
