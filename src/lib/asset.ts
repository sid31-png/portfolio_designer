/**
 * Prefix a public-folder path with the Vite base ('/portfolio_designer/' in
 * production, '/' in dev). Store content paths WITHOUT a leading slash
 * (e.g. 'assets/x.jpg') and run them through this before using in src/href.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // ends with '/'
  return base + path.replace(/^\//, '');
}
