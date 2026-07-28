# Ahmed Bouamama — Portfolio

A design-focused, case-study-first portfolio for Ahmed Bouamama (Product Designer ·
UI/UX & Front-End, Doha). Tab-navigated, trilingual (EN / FR / عربي with full RTL),
light/dark, with a subtle animated background — built to carry over everything from
the previous site while foregrounding UX process and AI-in-workflow.

## Stack
- **Vite + React 18 + TypeScript + Tailwind CSS v3.4 + Framer Motion**
- Content is typed data in `src/content/*` (no CMS). Case studies follow a fixed
  research-first structure; text is authored inline in EN/FR/AR (Ahmed's own voice).
- Routing: React Router with clean URLs + a `public/404.html` SPA fallback for GitHub Pages.
- Fonts self-hosted via Fontsource (Inter + IBM Plex Sans Arabic) — no external requests.

## Commands
```bash
npm install      # install deps
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # eslint
```

## Deploy (GitHub Pages)
Deployment is automated by `.github/workflows/deploy.yml` — every push to the working
branch builds and publishes `dist/` to Pages.

**One-time setup (repo owner):** open **Settings → Pages → Build and deployment →
Source** and select **GitHub Actions**. After that, pushes deploy automatically to:

    https://sid31-png.github.io/portfolio_designer/

`vite.config.ts` sets `base: '/portfolio_designer/'`. If you move to a custom domain
or a user/root page, change that base and set `pathSegmentsToKeep = 0` in
`public/404.html`.

## Editing content
| What | Where |
| --- | --- |
| Name, title, hero, about, contact, socials | `src/content/profile.ts` |
| Stats + impact bars | `src/content/stats.ts` |
| Process, skills, "now" | `src/content/about.ts` |
| Experience, education, services | `src/content/resume.ts` |
| Case studies | `src/content/projects/*.ts` (+ `_template.ts` to add one) |
| Figma embeds | `src/content/figma.ts` |
| UI labels / nav (EN·FR·AR) | `src/i18n/{en,fr,ar}.ts` |

## Case-study structure
Each study renders these sections in order, hiding any that are empty:
**metadata → problem → research → flows → wireframes → solution → build → AI in the
workflow → outcome**. Blocks supported: text, image, gallery (with lightbox), video,
Figma embed, before/after, quote, step list, metric row, and a labelled placeholder.

## Figma embeds
Files are configured in `src/content/figma.ts`. **Each Figma file must be set to
"Anyone with the link → can view"** (Share → General access) or the embed renders blank.
The first file (RCH Landing — Ray Directions) is already wired.

---

## ✅ Assets you still need to drop in
Real assets carried over from the old site (headshot, showreel, CV, RCH previews, the
two demo pages) are already in `public/`. Still missing / worth improving:

- [ ] **A mobile-app / consumer case study.** The Qatar Airways role centres on the
      mobile app — this is the biggest gap. Use `src/content/projects/_template.ts`,
      add real UX artifacts (flows, journey map, wireframes → hi-fi, a usability pass),
      then register it in `src/content/projects/index.ts`.
- [ ] **RCH CRM/ERP UX artifacts** — flow diagram, user-journey, and wireframe→hi-fi
      images. The study currently shows clean labelled placeholders for these
      (`src/content/projects/rch-crm.ts`).
- [ ] **A static "before" screenshot of rch.sa.** The before/after currently iframes
      the live rch.sa, which may render blank if the site blocks embedding. A PNG is
      more reliable — drop it in `public/assets/` and set `before.img` instead of
      `before.iframe` in `rch-saudi.ts`.
- [ ] **More Figma links** — paste into `src/content/figma.ts`.
- [ ] **OG image / domain** — `index.html` points OG tags at the Pages URL; update if
      you use a custom domain.

## ✍️ New copy to review (flagged)
Most prose is verbatim from your current site. The following were **drafted** and
should be reviewed / rewritten in your own words before you lean on them:
- `src/content/projects/rch-crm.ts` — the problem, research, build, AI and outcome
  paragraphs (composed from facts in your brief; the RCH Saudi study is verbatim).

## Notes
- Stat counters render the **real** number as static text first and only animate as
  progressive enhancement — they can never show `0` (fixes the old bug).
- All motion respects `prefers-reduced-motion`, plus a manual background-motion toggle.
- Long-form FR/AR case-study prose that wasn't on the old site is a good next pass;
  UI + all carried-over content is fully translated.
