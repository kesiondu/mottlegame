import { localized, origin, pages } from '../data/site.mjs';

export function GET() {
  const urls = pages.flatMap((page) =>
    ['en', 'zh'].map((lang) => new URL(localized(lang, page), origin).href)
  );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
