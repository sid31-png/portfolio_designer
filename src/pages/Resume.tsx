import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { experience, education } from '@/content/resume';
import { skillSets } from '@/content/about';
import { Reveal } from '@/components/Reveal';
import { AnchorButton } from '@/components/ui/primitives';
import { SEO } from '@/components/SEO';
import type { Role } from '@/content/resume';

function RoleRow({ role }: { role: Role }) {
  const L = useLoc();
  return (
    <div className="grid gap-1 border-t border-border py-6 sm:grid-cols-[0.4fr,1fr]">
      <p className="text-sm text-fg-subtle">{L(role.date)}</p>
      <div>
        <h3 className="text-h3 font-semibold text-fg">{L(role.title)}</h3>
        <p className="text-sm font-medium text-accent">{role.org}</p>
        <p className="prose-block mt-2 text-[0.95rem]">{L(role.body)}</p>
      </div>
    </div>
  );
}

export default function Resume() {
  const { t } = useI18n();
  const L = useLoc();

  return (
    <>
      <SEO title={t.nav.resume} description={L(profile.heroLead)} />
      <section className="container-page py-section">
        {/* Header */}
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">{t.nav.resume}</p>
            <h1 className="text-h1 font-semibold text-fg">{profile.name}</h1>
            <p className="mt-2 text-h3 font-medium text-fg-muted">{L(profile.title)}</p>
            <p className="mt-1 text-sm text-fg-subtle">
              {L(profile.location)} · {profile.contact.email}
            </p>
          </div>
          <AnchorButton href={asset(profile.cv)} download>
            {t.actions.downloadCv} ↓
          </AnchorButton>
        </Reveal>

        {/* Experience */}
        <div className="mt-14">
          <h2 className="eyebrow mb-2">{t.sections.experience}</h2>
          <Reveal>
            {experience.map((role, i) => (
              <RoleRow key={i} role={role} />
            ))}
          </Reveal>
        </div>

        {/* Education */}
        <div className="mt-14">
          <h2 className="eyebrow mb-2">{t.sections.education}</h2>
          <Reveal>
            <RoleRow role={education} />
          </Reveal>
        </div>

        {/* Skills */}
        <div className="mt-14">
          <h2 className="eyebrow mb-4">{t.sections.skills}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skillSets.map((set, i) => (
              <Reveal as="div" key={i} delay={i * 0.06}>
                <h3 className="text-h3 font-semibold text-fg">{L(set.title)}</h3>
                <p className="prose-block mt-2 text-[0.95rem]">{set.chips.map((c) => L(c)).join(' · ')}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-14">
          <h2 className="eyebrow mb-4">{t.sections.languages}</h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {profile.languages.map((lang, i) => (
              <li key={i} className="text-sm">
                <span className="font-medium text-fg">{L(lang.label)}</span>{' '}
                <span className="text-fg-subtle">{L(lang.level)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
