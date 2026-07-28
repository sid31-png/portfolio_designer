import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** HTML element to render as. */
  as?: 'div' | 'section' | 'li' | 'article';
}

/**
 * The signature Tabfolio "appear on scroll" effect. Fades + lifts content into
 * view once, when it enters the viewport. Under prefers-reduced-motion it
 * renders the content immediately with no transform, so nothing is hidden or
 * jumpy for people who opt out of motion.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
