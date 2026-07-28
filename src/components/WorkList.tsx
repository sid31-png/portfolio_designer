import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { usePointerFine } from '@/hooks/usePointerFine';
import type { Project } from '@/content/projects';

/** Pull a preview image path from a project cover, if it has one. */
function coverImage(project: Project): string | null {
  if (project.cover.kind === 'image') return project.cover.src;
  return null;
}

/**
 * The big interactive project list: each project is an oversized row. On a
 * fine pointer, hovering a row floats its preview image next to the cursor
 * (the Magnetto move). On touch, it's just a clean, tappable list of rows.
 */
export function WorkList({ projects }: { projects: Project[] }) {
  const { t } = useI18n();
  const L = useLoc();
  const fine = usePointerFine();
  const [hovered, setHovered] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  const activeProject = projects.find((p) => p.slug === hovered);
  const activeImg = activeProject ? coverImage(activeProject) : null;

  return (
    <div onMouseMove={fine ? onMove : undefined} className="relative">
      <ul className="border-t border-border">
        {projects.map((project) => (
          <li key={project.slug} className="border-b border-border">
            <Link
              to={`/work/${project.slug}`}
              onMouseEnter={() => setHovered(project.slug)}
              onMouseLeave={() => setHovered(null)}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className={[
                    'display-xl transition-colors duration-300',
                    hovered && hovered !== project.slug ? 'text-fg-subtle/40' : 'text-fg',
                    'group-hover:text-accent',
                  ].join(' ')}
                >
                  {L(project.title)}
                </span>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-widest text-fg-subtle sm:justify-end">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
                <span className="flip-rtl text-fg-muted transition-transform group-hover:translate-x-1">↗</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cursor-following preview (fine pointers only). */}
      {fine && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-30 hidden sm:block"
        >
          <div
            className={[
              '-ml-24 -mt-32 h-56 w-80 overflow-hidden rounded-xl border border-border bg-bg-elev shadow-2xl transition-all duration-300 ease-out-expo',
              activeImg ? 'scale-100 opacity-100' : 'scale-90 opacity-0',
            ].join(' ')}
          >
            {activeImg && (
              <img src={asset(activeImg)} alt="" className="h-full w-full object-cover object-top" />
            )}
          </div>
        </div>
      )}

      <p className="mt-8 text-sm text-fg-subtle">{t.actions.viewCaseStudy}</p>
    </div>
  );
}
