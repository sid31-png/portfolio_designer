import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface MotionContextValue {
  /** Whether the decorative animated background should run right now. */
  backgroundOn: boolean;
  /** User's explicit toggle (independent of OS reduced-motion). */
  enabled: boolean;
  toggle: () => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    try {
      const saved = window.localStorage.getItem('bg-motion');
      if (saved === 'off') return false;
      if (saved === 'on') return true;
    } catch {
      /* ignore */
    }
    return true;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('bg-motion', enabled ? 'on' : 'off');
    } catch {
      /* ignore */
    }
  }, [enabled]);

  // OS preference always wins: reduced-motion forces the background off.
  const backgroundOn = enabled && !prefersReduced;

  const value = useMemo<MotionContextValue>(
    () => ({ backgroundOn, enabled, toggle: () => setEnabled((e) => !e) }),
    [backgroundOn, enabled],
  );

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMotionPref() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotionPref must be used within MotionProvider');
  return ctx;
}
