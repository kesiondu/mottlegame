import { asset, languages, localized, origin } from './site.mjs';
import { content } from './content.mjs';

const context = 'https://schema.org';
const website = `${origin}/#website`;
const game = `${origin}/#mottle-hide-and-seek`;
const shareImage = asset('/images/mottle-game-hide-and-seek-social-share.jpg');

export function homeSchema(lang) {
  const copy = content[lang];
  const url = new URL(localized(lang), origin).href;
  const faq = copy.sections.find((s) => s.id === 'faq');

  return {
    '@context': context,
    '@graph': [
      { '@type': 'WebSite', '@id': website, name: 'Mottle Game', url: `${origin}/`, inLanguage: Object.values(languages) },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: copy.title,
        description: copy.description,
        inLanguage: languages[lang],
        isPartOf: { '@id': website },
        about: { '@id': game },
        hasPart: { '@id': `${url}#faq` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          '@id': `${shareImage}#primaryimage`,
          url: shareImage,
          contentUrl: shareImage,
          width: 1200,
          height: 630,
          representativeOfPage: true,
        },
        ...(copy.guide.updated ? { dateModified: copy.guide.updated } : {}),
      },
      {
        '@type': 'VideoGame',
        '@id': game,
        name: 'Mottle – Hide & Seek',
        alternateName: ['Mottle Game', '变色龙：躲猫猫'],
        url,
        gamePlatform: 'Web browser',
        isAccessibleForFree: true,
        author: { '@type': 'Person', name: 'Star Lord' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: languages[lang],
        mainEntity: faq.items.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
}

export function guideSchema(lang, guide) {
  const url = new URL(localized(lang, 'play-guide'), origin).href;
  const sectionImages = guide.sections.flatMap((section) => section.figures ?? []);
  const images = guide.evidence ? [...guide.evidence] : [...sectionImages];
  const scoreImage = sectionImages.find(({ path }) => path.endsWith('/mottle-game-final-score-1000-round-5.webp'));
  if (scoreImage && !images.some(({ path }) => path === scoreImage.path)) images.push(scoreImage);
  return {
    '@context': context,
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: guide.h1,
    description: guide.description,
    inLanguage: languages[lang],
    url,
    mainEntityOfPage: url,
    isPartOf: { '@id': website },
    about: { '@type': 'VideoGame', '@id': game, name: 'Mottle – Hide & Seek', url: new URL(localized(lang), origin).href },
    image: (images.length
      ? images.map((e) => new URL(e.path, origin).href)
      : [shareImage]),
    ...(guide.updated ? { dateModified: guide.updated } : {}),
  };
}
