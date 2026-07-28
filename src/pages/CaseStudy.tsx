import { Link, useParams, Navigate } from 'react-router-dom';
import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { getProject, type Block, type Section, type SectionKind } from '@/content/projects';
import { Reveal } from '@/components/Reveal';
import { StatCounter } from '@/components/StatCounter';
import { Showreel } from '@/components/Showreel';
import { FigmaEmbed } from '@/components/FigmaEmbed';
import { HtmlEmbed } from '@/components/HtmlEmbed';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Gallery } from '@/components/Gallery';
import { SEO } from '@/components/SEO';

const SECTION_LABEL: Record<SectionKind, (t: ReturnType<typeof useI18n>['t']) => string> = {
  problem: (t) => t.caseStudy.problem,
  research: (t) => t.caseStudy.research,
  flows: (t) => t.caseStudy.flows,
  wireframes: (t) => t.caseStudy.wireframes,
  solution: (t) => t.caseStudy.solution,
  build: (t) => t.caseStudy.build,
  ai: (t) => t.caseStudy.ai,
  outcome: (t) => t.caseStudy.outcome,
};

function BlockView({ block }: { block: Block }) {
  const L = useLoc();

  switch (block.type) {
    case 'text':
      return <p className="prose-block">{L(block.body)}</p>;

    case 'quote':
      return (
        <blockquote className="border-s-2 border-accent ps-5 text-h3 font-medium text-fg">
          {L(block.body)}
        </blockquote>
      );

    case 'image':
      return (
        <Gallery
          wide={block.wide}
          images={[{ src: block.image.src, alt: L(block.image.alt), caption: block.image.caption ? L(block.image.caption) : undefined }]}
        />
      );

    case 'gallery':
      return (
        <Gallery
          images={block.images.map((im) => ({ src: im.src, alt: L(im.alt), caption: im.caption ? L(im.caption) : undefined }))}
        />
      );

    case 'video':
      return <Showreel src={block.src} />;

    case 'figma':
      return <FigmaEmbed embedUrl={block.embedUrl} title={L(block.title)} />;

    case 'htmlEmbed':
      return <HtmlEmbed src={block.src} title={L(block.title)} url={block.url} />;

    case 'beforeAfter':
      return (
        <BeforeAfter
          meta={block.meta ? L(block.meta) : undefined}
          before={{ badge: L(block.before.badge), caption: L(block.before.caption), iframe: block.before.iframe, img: block.before.img }}
          after={{ badge: L(block.after.badge), caption: L(block.after.caption), iframe: block.after.iframe, img: block.after.img, live: block.after.live }}
        />
      );

    case 'steps':
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.n} className="rounded-2xl border border-border bg-bg-elev/40 p-5">
              <span className="text-sm font-semibold text-accent">{item.n}</span>
              <h4 className="mt-1 font-semibold text-fg">{L(item.title)}</h4>
              <p className="prose-block mt-1 text-[0.95rem]">{L(item.body)}</p>
            </div>
          ))}
        </div>
      );

    case 'metrics':
      return (
        <div className="flex flex-wrap gap-8">
          {block.items.map((m, i) => (
            <div key={i}>
              <StatCounter value={m.value} suffix={m.suffix} className="text-h1 font-semibold tabular-nums text-fg" />
              <p className="mt-1 text-sm text-fg-subtle">{L(m.label)}</p>
            </div>
          ))}
        </div>
      );

    case 'placeholder':
      return (
        <div className="flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-border bg-bg-elev/30 p-8 text-center">
          <span className="text-sm text-fg-subtle">{L(block.label)}</span>
        </div>
      );
  }
}

function SectionView({ section }: { section: Section }) {
  const { t } = useI18n();
  if (section.blocks.length === 0) return null;

  return (
    <Reveal as="section" className="border-t border-border/60 py-10">
      <h2 className="eyebrow mb-6">{SECTION_LABEL[section.kind](t)}</h2>
      <div className="space-y-6">
        {section.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const { t } = useI18n();
  const L = useLoc();
  const project = slug ? getProject(slug) : undefined;

  if (!project) return <Navigate to="/work" replace />;

  const meta = project.meta;

  return (
    <>
      <SEO title={L(project.title)} description={L(project.tagline)} />
      <article className="container-page py-section">
        {/* Back */}
        <Link to="/work" className="link-underline text-sm">
          <span className="flip-rtl inline-block">←</span> {t.actions.backToWork}
        </Link>

        {/* Header */}
        <Reveal className="mt-6 max-w-prose">
          <div className="mb-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-fg-subtle">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <h1 className="text-h1 font-semibold text-fg">{L(project.title)}</h1>
          <p className="prose-block mt-4">{L(project.tagline)}</p>
        </Reveal>

        {/* Metadata strip */}
        <Reveal className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-bg-elev/40 p-6 sm:grid-cols-4">
          <div>
            <p className="eyebrow mb-1">{t.caseStudy.role}</p>
            <p className="text-sm text-fg">{L(meta.role)}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">{t.caseStudy.scope}</p>
            <p className="text-sm text-fg">{L(meta.scope)}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">{t.caseStudy.tools}</p>
            <p className="text-sm text-fg">{meta.tools}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">{t.caseStudy.year}</p>
            <p className="text-sm text-fg">{meta.year}</p>
          </div>
        </Reveal>

        {/* Sections */}
        <div className="mt-10">
          {project.sections.map((section, i) => (
            <SectionView key={i} section={section} />
          ))}
        </div>

        {/* Footer CTA */}
        <Reveal className="mt-12 flex flex-wrap items-center gap-4 border-t border-border/60 pt-8">
          {project.externalUrl && (
            <a
              href={asset(project.externalUrl)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              {t.actions.openLive}
            </a>
          )}
          <Link to="/contact" className="link-underline text-sm">
            {t.contact.lead} →
          </Link>
        </Reveal>
      </article>
    </>
  );
}
