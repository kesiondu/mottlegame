import { languages, localized, origin } from './site.mjs';
import { content, sources } from './content.mjs';

const context = 'https://schema.org';
const website = `${origin}/#website`;
const game = `${origin}/#mottle-hide-and-seek`;

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
        primaryImageOfPage: `${origin}/art/mottle-game-share.jpg`,
        ...(copy.guide.updated ? { dateModified: copy.guide.updated } : {}),
      },
      {
        '@type': 'VideoGame',
        '@id': game,
        name: 'Mottle – Hide & Seek',
        alternateName: ['Mottle Game', '变色龙：躲猫猫'],
        url: sources.original,
        gamePlatform: 'Web browser',
        isAccessibleForFree: true,
        author: { '@type': 'Person', name: 'Star Lord', url: sources.creator },
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
  const images = guide.evidence ?? guide.sections.flatMap((section) => section.figures ?? []);
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
    about: { '@type': 'VideoGame', '@id': game, name: 'Mottle – Hide & Seek', url: sources.original },
    image: (images.length
      ? images.map((e) => new URL(e.path, origin).href)
      : [`${origin}/art/mottle-game-share.jpg`]),
    citation: sources.original,
    ...(guide.updated ? { dateModified: guide.updated } : {}),
  };
}
