import type { Config } from 'tailwindcss';

/**
 * Design tokens live as CSS variables in src/styles/index.css so the same
 * class (e.g. bg-bg, text-fg) resolves correctly in light + dark. Colours are
 * stored as space-separated RGB channels so Tailwind's <alpha-value> works
 * (e.g. bg-fg/10). Base stays neutral (near-white / true dark); navy + magenta
 * are the RCH-derived accents used sparingly.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: withVar('--bg'),
        'bg-elev': withVar('--bg-elev'),
        fg: withVar('--fg'),
        'fg-muted': withVar('--fg-muted'),
        'fg-subtle': withVar('--fg-subtle'),
        border: withVar('--border'),
        accent: withVar('--accent'),
        'accent-fg': withVar('--accent-fg'),
        navy: withVar('--navy'),
      },
      fontFamily: {
        // The Arabic face is listed after Inter so Latin renders Inter and
        // Arabic falls through to Plex Arabic; on RTL pages we also set the
        // font explicitly via the `font-arabic` utility on <html>.
        sans: ['Inter', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // A calm, restrained type scale.
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['1.35rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(8%, 6%) scale(1.08)' },
          '66%': { transform: 'translate(-6%, 10%) scale(0.96)' },
        },
        'blob-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-8%, -6%) scale(1.06)' },
          '66%': { transform: 'translate(6%, -10%) scale(0.94)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'blob-1': 'blob-1 22s ease-in-out infinite',
        'blob-2': 'blob-2 28s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
