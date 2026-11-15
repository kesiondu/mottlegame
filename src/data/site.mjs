export const origin = 'https://mottlegame.cc';
export const assetOrigin = 'https://assets.mottlegame.cc';
export const asset = (path) => new URL(path, `${assetOrigin}/`).href;
export const languages = { en: 'en', zh: 'zh-Hans' };
export const localized = (lang, page = '') =>
  `/${lang === 'zh' ? 'zh/' : ''}${page ? `${page}/` : ''}`;
export const legalPages = ['about', 'privacy', 'terms', 'contact'];
export const pages = ['', 'play-guide', ...legalPages];

export const ui = {
  en: {
    brand: 'Mottle Game',
    skip: 'Skip to the guide',
    nav: 'Main navigation',
    how: 'How to Play',
    controls: 'Controls',
    tips: 'Tips',
    faq: 'FAQ',
    guide: 'Play Guide',
    about: 'About',
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
    independent: 'Independent game guide',
    creatorCredit: 'Game created by Star Lord',
    footer: 'A player guide for Mottle – Hide & Seek, created by Star Lord.',
    play: 'Play Mottle',
    player: 'Mottle game player',
    frame: 'Mottle – Hide & Seek by Star Lord',
    restart: 'Restart',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit fullscreen',
    original: 'Open original',
    retry: 'Try again',
    loading: 'Loading the original game…',
    timeout: 'The game is taking longer than expected.',
    playNote: 'A browser hide-and-seek game about blending into the ground.',
    frameNote: 'The original game loads when you choose to play.',
    evidence: 'Playtest screenshots',
    readGuide: 'Read the illustrated play guide',
    back: 'Back to Mottle Game',
    missing: 'Page not found',
    missingText: 'That address does not have a page. You can return to the game or open the play guide.',
  },
  zh: {
    brand: '变色龙：躲猫猫',
    skip: '跳到正文',
    nav: '主导航',
    how: '玩法',
    controls: '操作',
    tips: '技巧',
    faq: '常见问题',
    guide: '实测攻略',
    about: '关于本站',
    privacy: '隐私',
    terms: '使用条款',
    contact: '联系',
    independent: '独立游戏指南',
    creatorCredit: '游戏由 Star Lord 创作',
    footer: '《变色龙：躲猫猫》由 Star Lord 创作。本站提供玩家指南。',
    play: '开始游戏',
    player: '变色龙：躲猫猫游戏播放器',
    frame: 'Star Lord 创作的《变色龙：躲猫猫》原版游戏',
    restart: '重新开始',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    original: '打开原版',
    retry: '再试一次',
    loading: '正在加载原版游戏…',
    timeout: '游戏加载比预期慢。',
    playNote: '贴着地面变色，躲开搜索光。这是一款浏览器躲猫猫游戏。',
    frameNote: '点击开始后加载原版游戏，游戏内界面可能仍为英文。',
    evidence: '实玩截图',
    readGuide: '查看带截图的实测攻略',
    back: '返回《变色龙：躲猫猫》',
    missing: '页面未找到',
    missingText: '这个地址没有对应的页面。你可以回到游戏，或继续查看玩法攻略。',
  },
};

export const policies = {
  en: {
    about: {
      heading: 'About Mottle Game',
      description: 'About this independent player guide for Mottle – Hide & Seek by Star Lord.',
      paragraphs: [
        'Mottle Game is an independent player guide for Mottle – Hide & Seek. This is not the official game site.',
        'The guide explains the controls, camouflage system and scoring through first-hand play sessions. It also gives players a focused browser entry point.',
        'The game, its name, artwork and gameplay assets belong to their respective rights holders. Use the contact page to report a correction about the guide.',
      ],
      attribution: 'Mottle – Hide & Seek was created by Star Lord and originally published on 8x.gg. This guide is not affiliated with the creator or publishing platform.',
    },
    privacy: {
      heading: 'Privacy',
      description: 'How Mottle Game handles visits and the embedded game.',
      paragraphs: [
        'This independent guide provides public pages without a sign-in form. The deployed website uses Cloudflare to serve pages, process web requests and protect the service.',
        'The guide uses Google Analytics to understand page visits and use of the guide. Google may use analytics cookies to measure visits. This site sets advertising consent to denied.',
        'Choosing Play loads the original game from a third-party domain. The game host may receive browser and network information and use browser storage under its own practices.',
        'The guide cannot read your controls, score or other private state inside the embedded game. Use the contact page to report a privacy concern about this guide.',
      ],
    },
    terms: {
      heading: 'Terms',
      description: 'Terms for using the independent Mottle Game guide.',
      paragraphs: [
        'This is an independent player guide. Mottle – Hide & Seek is created by Star Lord. The original game and any third-party materials belong to their respective rights holders.',
        'Gameplay runs on the original host. Availability may change, and the guide cannot guarantee access from a particular device or network.',
        'Advice on this site comes from play sessions and editorial analysis. Individual scores can vary with timing, route choice and in-game conditions.',
      ],
    },
    contact: {
      heading: 'Contact',
      description: 'How to report a guide correction or find the original Mottle game.',
      paragraphs: [
        'For a correction to the guide, include the page URL, the sentence or section in question, and what you observed. This independent guide cannot resolve issues inside the game itself.',
      ],
    },
  },
  zh: {
    about: {
      heading: '关于 Mottle Game',
      description: '了解这个为 Star Lord《变色龙：躲猫猫》制作的独立玩家指南。',
      paragraphs: [
        'Mottle Game 是《变色龙：躲猫猫》（Mottle – Hide & Seek）的独立玩家指南，本站不是游戏官网。',
        '本站根据实际游玩记录整理操作方法、伪装机制和得分观察，并提供一个更专注的浏览器入口。',
        '游戏名称、美术、游戏素材及相关权利归各自权利人所有。本指南只对自己编写的页面内容负责。如需报告攻略错误，请使用联系页面。',
      ],
      attribution: '《变色龙：躲猫猫》由 Star Lord 创作，原发布平台为 8x.gg。本站与原作者及发布平台无隶属关系。',
    },
    privacy: {
      heading: '隐私',
      description: '了解本站与嵌入游戏如何处理网站访问。',
      paragraphs: [
        '本站是独立玩法指南，公开页面无需登录。部署后会使用 Cloudflare 提供网页、处理访问请求及保护服务。',
        '本站使用 Google Analytics 了解页面访问和攻略的使用情况。Google 可能使用分析 Cookie 衡量访问量。本站将广告相关的数据权限设为拒绝。',
        '点击「开始游戏」后，浏览器会连接第三方域名以加载原版。游戏服务可能接收浏览器及网络信息，也可能使用浏览器存储，具体做法以其自身政策为准。',
        '本站无法读取嵌入游戏里的操作、分数或其他内部状态。如需报告与本站有关的隐私问题，请使用联系页面。',
      ],
    },
    terms: {
      heading: '使用条款',
      description: '《变色龙：躲猫猫》独立玩家指南的使用条款。',
      paragraphs: [
        '本站提供独立玩家指南。《变色龙：躲猫猫》由 Star Lord 创作。原版游戏及第三方素材的权利归各自权利人所有。',
        '游戏由原服务提供，能否访问取决于服务状态、设备和网络条件。',
        '攻略参考实际游玩与编辑分析。操作时机、路线和局内情况都可能影响你的分数。',
      ],
    },
    contact: {
      heading: '联系',
      description: '了解如何报告攻略错误或联系原作相关渠道。',
      paragraphs: [
        '报告攻略错误时，请附上页面链接、原句或所在章节，以及你实际观察到的现象。本站是独立指南，无法处理游戏本身的问题。',
      ],
    },
  },
};
