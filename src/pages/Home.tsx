import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Reveal } from '@/components/Reveal';

// Scaffold hero — real hero (headshot, positioning, CTAs, stats, showreel,
// featured work) is built in step 4. This proves the shell + motion + i18n.
export default function Home() {
  const { t } = useI18n();

  return (
    <div className="container-page py-section">
      <Reveal className="max-w-prose">
        <p className="eyebrow mb-4">{t.sections.about}</p>
        <h1 className="text-display font-semibold text-fg">
          I turn marketing and operations problems into real digital products.
        </h1>
        <p className="prose-block mt-6">
          Product Designer · UI/UX &amp; Front-End — Doha, Qatar. I design and ship products
          end-to-end, grounded in human-centred design (ISO&nbsp;9241-210).
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/work"
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            {t.actions.seeWork}
          </Link>
          <a
            href="/portfolio_designer/cv/ahmed-bouamama-cv.pdf"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg-subtle"
          >
            {t.actions.downloadCv}
          </a>
        </div>
      </Reveal>

      <p className="mt-16 text-sm text-fg-subtle">
        Scaffold view — full home page (impact numbers, showreel, selected work) comes next.
      </p>
    </div>
  );
}
