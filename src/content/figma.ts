/**
 * Figma embed config. Paste more files here as { key, slug, node } and they can
 * be referenced from any case study.
 *
 * IMPORTANT: each Figma file MUST be set to "Anyone with the link → can view"
 * in Figma (Share → General access), otherwise the embed renders blank.
 *
 * Embed URL pattern:
 *   https://embed.figma.com/design/<FILE_KEY>/<slug>?node-id=<NODE>&embed-host=share
 */

export interface FigmaFile {
  id: string;
  key: string;
  slug: string;
  /** node-id in the "7-43" form (hyphen, not colon). */
  node?: string;
}

export const figmaFiles: Record<string, FigmaFile> = {
  // RCH Landing Page — Ray Directions.
  // Source: https://www.figma.com/design/N3ObcCHLgopKMIVwMG8KJw/RCH-Landing-Page---Ray-Directions--Copy-?node-id=7-43
  rchLanding: {
    id: 'rchLanding',
    key: 'N3ObcCHLgopKMIVwMG8KJw',
    slug: 'RCH-Landing-Page---Ray-Directions--Copy-',
    node: '7-43',
  },
};

export function figmaEmbedUrl(file: FigmaFile): string {
  const params = new URLSearchParams({ 'embed-host': 'share' });
  if (file.node) params.set('node-id', file.node);
  return `https://embed.figma.com/design/${file.key}/${file.slug}?${params.toString()}`;
}
