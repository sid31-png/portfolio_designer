import { useEffect, useState } from 'react';

/**
 * True only on devices with a precise pointer (mouse/trackpad) and a hover
 * capability. Used to gate desktop-only flourishes (custom cursor, magnetic
 * hover) so touch users get plain, reliable interactions.
 */
export function usePointerFine(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine) and (hover: hover)');
    const onChange = () => setFine(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return fine;
}
