import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const origin = 'https://mottlegame.cc';
const assetOrigin = 'https://assets.mottlegame.cc';
const pages = ['', 'play-guide/', 'about/', 'privacy/', 'terms/', 'contact/'];
const getFile = (file) => readFile(new URL(file, root), 'utf8');
const title = 'Mottle Game — Play Online Free, Meaning, Controls & Tips';
const description = 'Mottle is a free browser hide-and-seek game. Learn what Mottle means, how to play, Firefly and Camo mechanics, controls and the best hiding tips.';
const englishHeadings = [
  'What Is Mottle Game', 'What Does Mottle Mean?', 'Is Mottle a Board Game?',
  'How to Play', 'Controls', 'Mechanics', 'Tips', 'Download & Unblocked', 'FAQ',
];
const builtTitles = [];

function decode(text) {
  return text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}

function plain(html) {
  return decode(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function countWords(text) {
  return [...text.matchAll(/[\p{L}\p{N}]+(?:['’\u2010\u2011-][\p{L}\p{N}]+)*/gu)].length;
}

function schema(html) {
  const match = html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  assert(match, 'Missing JSON-LD');
  return JSON.parse(match[1]);
}

function verifyGoogleTag(html, route, scriptPolicy) {
  const tags = [...html.matchAll(/<script data-gtm-bootstrap[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(tags.length, 1, `${route} should have one GTM bootstrap`);
  assert.equal(html.split('GTM-WWBBCJQM').length - 1, 1, `${route} should load one GTM container`);
  const js = tags[0][1].replace(/\r\n?/g, '\n');
  const hash = createHash('sha256').update(js).digest('base64');
  assert(scriptPolicy.includes(`'sha256-${hash}'`), `${route} GTM bootstrap hash must match the CSP`);
  assert(scriptPolicy.includes('https://www.googletagmanager.com'), `${route} GTM host must be allowed`);
}

const sitemap = await getFile('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const sitemapImages = [...sitemap.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map((match) => match[1]);
const expectedUrls = pages.flatMap((page) => [origin + '/' + page, origin + '/zh/' + page]);
assert.deepEqual(new Set(sitemapUrls), new Set(expectedUrls), 'Sitemap paths');
assert.equal(sitemapUrls.length, expectedUrls.length);
assert.match(sitemap, /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/, 'Image sitemap namespace');
assert.equal(new Set(sitemapImages).size, 24, 'All 24 unique R2 images should appear in the sitemap');
assert(sitemapImages.every((url) => url.startsWith(`${assetOrigin}/images/mottle-game-`)), 'Image sitemap URLs should use SEO filenames on the R2 domain');
assert.match(await getFile('robots.txt'), /^Sitemap: https:\/\/mottlegame\.cc\/sitemap\.xml\s*$/m);
assert.equal(
  (await getFile('c653865ec2165f59c5939e42cda4649c.txt')).trim(),
  'c653865ec2165f59c5939e42cda4649c',
  'IndexNow key file',
);
assert.match(await getFile('llms.txt'), /play-guide\//);
const scriptPolicy = (await getFile('_headers')).match(/\bscript-src\s+([^;]+)/)?.[1] ?? '';
const notFound = await getFile('404.html');
assert.match(notFound, /noindex/);
verifyGoogleTag(notFound, '/404.html', scriptPolicy);

for (const [prefix, lang] of [['', 'en'], ['zh/', 'zh-Hans']]) {
  for (const page of pages) {
    const route = '/' + prefix + page;
    const html = await getFile(prefix + page + 'index.html');
    verifyGoogleTag(html, route, scriptPolicy);
    const pageTitle = plain(html.match(/<title>(.*?)<\/title>/)?.[1] ?? '');
    builtTitles.push(pageTitle);
    assert(html.includes(`<html lang="${lang}"`), `${route} html lang`);
    assert(html.includes(`rel="canonical" href="${origin}${route}"`), `${route} self canonical`);
    assert(html.includes(`hreflang="en" href="${origin}/${page}"`), `${route} English alternate`);
    assert(html.includes(`hreflang="zh-Hans" href="${origin}/zh/${page}"`), `${route} Chinese alternate`);
    assert(html.includes(`hreflang="x-default" href="${origin}/${page}"`), `${route} default alternate`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${route} H1 count`);
    assert.doesNotMatch(html, /<iframe\b/, `${route} should have no eager iframe`);
    for (const asset of html.matchAll(/<img[^>]+src="(\/[^"]+)"/g)) {
      await access(new URL(asset[1].slice(1), root));
    }
    for (const image of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      assert(image[1].startsWith(assetOrigin), `${route} image should use R2 asset domain: ${image[1]}`);
    }
    if (page === 'play-guide/') {
      assert.equal(schema(html)['@type'], 'Article');
      assert(!pageTitle.startsWith('Mottle Game'), `${route} title should not start with Mottle Game`);
      assert.equal(
        plain(html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]),
        lang === 'en' ? 'How to Play Mottle' : '怎么玩《变色龙：躲猫猫》',
        `${route} guide H1`,
      );
      assert.match(html, /<figure class="evidence-item">/, `${route} first-hand screenshots`);
      assert.match(html, /id="run-log"/, `${route} observed trial data`);
    }
    if (page) continue;

    for (const policy of ['about/', 'privacy/', 'terms/', 'contact/']) {
      assert(html.includes(`href="/${prefix}${policy}"`), `${route} footer link ${policy}`);
    }
    assert(html.indexOf('id="play"') < html.indexOf('<h1'), `${route} game first`);
    const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0];
    assert(article, `${route} semantic article`);
    const nodes = schema(html)['@graph'];
    assert.deepEqual(nodes.map((node) => node['@type']), ['WebSite', 'WebPage', 'VideoGame', 'FAQPage']);
    const questions = [...article.matchAll(/<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>/g)]
      .map((match) => [plain(match[1]), plain(match[2])]);
    assert(questions.length >= 8 && questions.length <= 12, `${route} FAQ count`);
    assert.deepEqual(questions, nodes[3].mainEntity.map((q) => [q.name, q.acceptedAnswer.text]), `${route} FAQ parity`);
    if (lang === 'en') {
      assert.equal(plain(html.match(/<title>(.*?)<\/title>/)?.[1]), title);
      assert.equal(decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1]), description);
      assert.equal(plain(html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]), 'Mottle Game');
      assert.deepEqual([...article.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map((match) => plain(match[1])), englishHeadings);
      assert.deepEqual([...article.matchAll(/<h3[^>]*>(.*?)<\/h3>/g)].map((match) => plain(match[1])), ['Firefly', 'Camo', 'Seekers']);
      assert(plain(article).includes('It is not a board game.'));
      const intro = plain(article.match(/<p class="intro">(.*?)<\/p>/)?.[1]);
      const meaning = plain(article.match(/<section id="mottle-meaning"[^>]*>([\s\S]*?)<\/section>/)?.[1]);
      const words = countWords(plain(article));
      assert.equal(countWords(intro), 40, 'English definition words');
      assert(countWords(meaning) >= 200 && /\bmotel\b/i.test(meaning), 'English meaning section');
      assert(words >= 1200 && words <= 1500, `English article word count: ${words}`);
      console.log(`English homepage: ${words} words, ${countWords(meaning)} in the meaning section, ${questions.length} FAQs.`);
    } else {
      assert.match(article, /变色龙：躲猫猫/);
    }
  }
}

assert.equal(new Set(builtTitles).size, builtTitles.length, 'Every page title should be unique');

console.log(`${expectedUrls.length} canonical routes, hreflang, FAQ parity, assets, sitemap, robots and 404 verified.`);
