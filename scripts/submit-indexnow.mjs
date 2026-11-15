const host = 'mottlegame.cc';
const origin = `https://${host}`;
const key = 'c653865ec2165f59c5939e42cda4649c';
const keyLocation = `${origin}/${key}.txt`;
const sitemapUrl = `${origin}/sitemap.xml`;
const endpoint = 'https://api.indexnow.org/indexnow';

const sitemapResponse = await fetch(sitemapUrl, {
  headers: { 'user-agent': 'mottlegame.cc IndexNow submitter/1.0' },
});

if (!sitemapResponse.ok) {
  throw new Error(`Could not load ${sitemapUrl}: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => url === origin || url.startsWith(`${origin}/`));

if (urlList.length === 0) {
  throw new Error(`No ${origin} page URLs found in ${sitemapUrl}`);
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`IndexNow returned ${response.status}: ${body || response.statusText}`);
}

console.log(`IndexNow accepted ${urlList.length} URLs (${response.status}).`);
