import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { process, processIntro, skillSets, skillsIntro, now } from '@/content/about';
import { Reveal } from '@/components/Reveal';
import { Section, SectionHead, Chip } from '@/components/ui/primitives';
import { SEO } from '@/components/SEO';

export default function About() {
  const { t } = useI18n();
  const L = useLoc();

  return (
    <>
      <SEO title={t.nav.about} description={L(profile.aboutParagraphs[0])} />

      {/* STORY */}
      <Section id="about">
        <div className="grid items-start gap-10 md:grid-cols-[0.8fr,1.2fr]">
          <Reveal className="md:sticky md:top-24">
            <div className="overflow-hidden rounded-3xl border border-border bg-bg-elev">
              <img src={asset(profile.headshot)} alt={profile.name} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">{t.sections.about}</p>
            <h1 className="text-h1 font-semibold text-fg">{L(profile.aboutTitle)}</h1>
            <div className="mt-6 space-y-4">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i} className="prose-block">
                  {L(p)}
                </p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
              {profile.languages.map((lang, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium text-fg">{L(lang.label)}</span>{' '}
                  <span className="text-fg-subtle">{L(lang.level)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section id="process" alt>
        <SectionHead eyebrow={t.sections.howIWork} title={L(processIntro.title)} sub={L(processIntro.sub)} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {process.map((step, i) => (
            <Reveal as="article" key={step.n} delay={(i % 2) * 0.06} className="rounded-2xl border border-border bg-bg p-6">
              <span className="text-sm font-semibold text-accent">{step.n}</span>
              <h3 className="mt-2 text-h3 font-semibold text-fg">{L(step.title)}</h3>
              <p className="prose-block mt-2 text-[0.95rem]">{L(step.body)}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <SectionHead eyebrow={t.sections.skills} title={L(skillsIntro.title)} sub={L(skillsIntro.sub)} />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {skillSets.map((set, i) => (
            <Reveal as="div" key={i} delay={i * 0.08} className="rounded-2xl border border-border bg-bg-elev/40 p-6">
              <h3 className="text-h3 font-semibold text-fg">{L(set.title)}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {set.chips.map((chip, j) => (
                  <Chip key={j}>{L(chip)}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NOW */}
      <Section id="now" alt>
        <SectionHead eyebrow={t.sections.now} title={L(now.intro.title)} sub={L(now.intro.sub)} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-bg p-6">
            <h3 className="text-h3 font-semibold text-fg">{L(now.learningTitle)}</h3>
            <ul className="mt-4 space-y-2">
              {now.learning.map((item, i) => (
                <li key={i} className="flex gap-2 text-fg-muted">
                  <span className="text-accent">·</span>
                  {L(item)}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl border border-border bg-bg p-6">
            <h3 className="text-h3 font-semibold text-fg">{L(now.toolsTitle)}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {now.tools.map((tool) => (
                <Chip key={tool}>{tool}</Chip>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
