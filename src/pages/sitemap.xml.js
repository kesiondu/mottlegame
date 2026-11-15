import { guide } from '../data/guide.mjs';
import { asset, localized, origin, pages } from '../data/site.mjs';

const homeImages = [
  'mottle-game-favicon.svg',
  'mottle-game-camouflage-tiles-small.webp',
  'mottle-game-camouflage-tiles.webp',
  'mottle-game-hide-and-seek-social-share.jpg',
  'mottle-game-mineral-paper-background.webp',
  'mottle-game-paint-swatch-background-small.webp',
  'mottle-game-paint-swatch-background.webp',
].map((name) => asset(`/images/${name}`));

const guideImages = [...guide.en.evidence, ...guide.en.sections.flatMap((section) => section.figures ?? [])]
  .map(({ path }) => path);

const imagesForPage = (page) => page === '' ? homeImages : page === 'play-guide' ? guideImages : [];
const xml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function GET() {
  const urls = pages.flatMap((page) => ['en', 'zh'].map((lang) => ({
    loc: new URL(localized(lang, page), origin).href,
    images: imagesForPage(page),
  })));
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.map(({ loc, images }) => `  <url>\n    <loc>${xml(loc)}</loc>${images.map((imageUrl) => `\n    <image:image><image:loc>${xml(imageUrl)}</image:loc></image:image>`).join('')}\n  </url>`).join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
