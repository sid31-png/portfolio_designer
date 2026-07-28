import { Link } from 'react-router-dom';
import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import type { Project } from '@/content/projects';

/** Renders the card cover — a real image, the "browser" motif, or a video. */
function Cover({ project }: { project: Project }) {
  const L = useLoc();
  const { cover } = project;

  if (cover.kind === 'image') {
    return (
      <img
        src={asset(cover.src)}
        alt={L(cover.alt)}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
      />
    );
  }
  if (cover.kind === 'video') {
    return <video src={asset(cover.src)} autoPlay muted loop playsInline className="h-full w-full object-cover" />;
  }
  // browser motif
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-br from-navy/15 to-accent/15 p-4">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-fg/20" />
      </div>
      <div className="mt-auto">
        <p className="text-2xl font-semibold tracking-tight text-fg">{cover.brand}</p>
        <p className="text-sm text-fg-muted">{L(cover.tag)}</p>
      </div>
    </div>
  );
}

export function ProjectCard({ project, feature = false }: { project: Project; feature?: boolean }) {
  const { t } = useI18n();
  const L = useLoc();

  return (
    <Link
      to={`/work/${project.slug}`}
      className={[
        'group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev/50 transition-colors hover:border-fg-subtle/50',
        feature ? 'sm:col-span-2' : '',
      ].join(' ')}
    >
      <div className={['relative overflow-hidden', feature ? 'aspect-[16/9]' : 'aspect-[4/3]'].join(' ')}>
        <Cover project={project} />
        {project.confidential && (
          <span className="absolute end-3 top-3 rounded-full bg-fg/75 px-2.5 py-1 text-xs font-medium text-bg">
            {t.caseStudy.confidential}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-fg-subtle">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3 className="text-h3 font-semibold text-fg">{L(project.title)}</h3>
        <p className="prose-block mt-2 text-[0.95rem]">{L(project.cardText)}</p>
        <span className="mt-4 text-sm font-medium text-accent">
          {project.cardLink ? L(project.cardLink) : t.actions.viewCaseStudy + ' →'}
        </span>
      </div>
    </Link>
  );
}
