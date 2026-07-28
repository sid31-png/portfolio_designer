import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import { ThemeToggle } from '@/components/controls/ThemeToggle';
import { MotionToggle } from '@/components/controls/MotionToggle';
import { LanguageSwitcher } from '@/components/controls/LanguageSwitcher';

interface Tab {
  to: string;
  label: string;
}

export function TabNav() {
  const { t } = useI18n();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs: Tab[] = [
    { to: '/', label: t.nav.home },
    { to: '/work', label: t.nav.work },
    { to: '/about', label: t.nav.about },
    { to: '/resume', label: t.nav.resume },
    { to: '/contact', label: t.nav.contact },
  ];

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40">
      {/* skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        {t.nav.skipToContent}
      </a>

      <div className="border-b border-border/60 bg-bg/70 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
          {/* brand */}
          <NavLink to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-fg text-bg text-sm">A</span>
            <span className="hidden sm:inline">Ahmed Bouamama</span>
          </NavLink>

          {/* desktop segmented tabs */}
          <div className="hidden items-center gap-1 rounded-full border border-border bg-bg-elev/50 p-1 md:flex">
            {tabs.map((tab) => {
              const active = isActive(tab.to);
              return (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  className="relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-fg"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className={['relative z-10', active ? 'text-bg' : 'text-fg-muted hover:text-fg'].join(' ')}>
                    {tab.label}
                  </span>
                </NavLink>
              );
            })}
          </div>

          {/* controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
              <MotionToggle />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? t.actions.closeMenu : t.actions.openMenu}
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-bg-elev/60 text-fg-muted md:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.to}
                  to={tab.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive: a }) =>
                    [
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      a || isActive(tab.to) ? 'bg-fg text-bg' : 'text-fg-muted hover:bg-bg-elev',
                    ].join(' ')
                  }
                >
                  {tab.label}
                </NavLink>
              ))}
              <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
                <LanguageSwitcher />
                <MotionToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
