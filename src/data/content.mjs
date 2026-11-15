import { guide } from './guide.mjs';

export const sources = {
  gameUrl: 'https://5qbwd96hq.clide.app/',
  dictionary: 'https://www.ahdictionary.com/word/search.html?q=mottle',
  motelDictionary: 'https://www.ahdictionary.com/word/search.html?q=motel',
};

export const content = {
  en: {
    lang: 'en',
    title: 'Mottle Game — Play Online Free, Meaning, Controls & Tips',
    description: 'Mottle is a free browser hide-and-seek game. Learn what Mottle means, how to play, Firefly and Camo mechanics, controls and the best hiding tips.',
    h1: 'Mottle Game',
    definition: 'Mottle is a free browser hide-and-seek game by Star Lord. Drag to chase glowing Fireflies, release to match the color beneath you, and stay outside the Seekers’ sweeping light. Watch Camo and Alert as each round grows faster and tighter.',
    guide: guide.en,
    sections: [
      {
        id: 'what-is-mottle-game',
        title: 'What Is Mottle Game',
        intro: 'Mottle — Hide & Seek is a real-time browser game by Star Lord. You guide a small chameleon across a floor of shifting color patches. Collect the glowing Fireflies, then stop moving so your body can take on the color of the ground beneath you.',
        paragraphs: [
          'The top of the game screen tracks your score, lives and round. The Camo and Alert bars tell you what is happening between those numbers. Camo shows your blend with the ground. Alert tells you when exposure is becoming dangerous. You can learn the first round by watching those two bars while the Seekers sweep past.',
          'The player above loads the original game from a third-party host.',
        ],
        attribution: 'Original release: Star Lord on 8x.gg. Mottle Game is an independent guide and is not affiliated with the creator or publishing platform.',
      },
      {
        id: 'mottle-meaning',
        title: 'What Does Mottle Mean?',
        intro: 'To mottle something is to mark its surface with irregular spots, streaks or patches of color. A mottled surface can have several shades of one color or distinct colors side by side. As a noun, a mottle can be a patch of color or the uneven pattern those patches form.',
        paragraphs: [
          'Picture a pear with brown flecks on its yellow skin, or a piece of stone with dark patches running through pale gray. You might call either surface mottled. The patches can be tiny or broad, and their edges often look uneven. The word describes how the colors sit together on a surface.',
          'In Mottle — Hide & Seek, the name fits the playfield and the way you hide on it. The floor gives you patches of different colors. While you move, the chameleon stands out. Once you let go, its body takes on the color under its feet. From a player’s point of view, the title captures the moment a moving figure becomes harder to pick out against a patchy floor.',
          'Motel is a separate word. It means a place for motorists to stay, often with parking near the guest rooms. The game title is spelled M-o-t-t-l-e, with two t’s and a final l-e. Motel has one t and ends in e-l.',
        ],
        links: [
          { label: 'American Heritage Dictionary: mottle', href: sources.dictionary },
          { label: 'American Heritage Dictionary: motel', href: sources.motelDictionary },
        ],
      },
      {
        id: 'mottle-board-game',
        title: 'Is Mottle a Board Game?',
        intro: 'It is not a board game. Mottle — Hide & Seek is a real-time game you play in a web browser. One player controls the chameleon with a mouse or touch input. The Seekers move during the round, and their beams can cross your path while you decide where to stop.',
        paragraphs: [
          'The floor can look like a board because you see it from above. During an active search you can let a light pass, make a short run to a Firefly and stop again. The timing of the drag and release is the part to practice.',
        ],
      },
      {
        id: 'how-to-play',
        title: 'How to Play',
        intro: 'Drag with your mouse or finger to move the chameleon. Release to stop and let Camo build. For your first round, try one nearby Firefly and pick where you want to stop before you move. Use the beam nearest your intended path to decide when to go.',
        steps: [
          { label: 'Look during Hide.', text: 'Use the opening countdown to locate your chameleon, the nearest glowing Firefly and a place to stop.' },
          { label: 'Watch the beam sweep.', text: 'Follow the direction of the nearest cone, especially where it cuts across your intended path.' },
          { label: 'Drag through the Firefly.', text: 'Guide your character through the glow to collect it. Check the Score display after contact.' },
          { label: 'Release on the next patch.', text: 'Let go, watch Camo climb, and use Alert to decide how urgently you need to move.' },
          { label: 'Read the next round.', text: 'Use each new Hide countdown to choose a fresh route as later rounds get faster.' },
        ],
      },
      {
        id: 'controls',
        title: 'Controls',
        intro: 'Movement and camouflage use the same input. Hold and drag to steer. Release the mouse button or lift your finger when you reach a hiding spot. Keep the gesture inside the game area on a small screen so you can stop exactly where you mean to.',
        controls: [
          { input: 'Mouse', action: 'Hold and drag in the game area to move.' },
          { input: 'Touch', action: 'Drag one finger inside the game area.' },
          { input: 'Release', action: 'Stop the chameleon and let its color blend.' },
          { input: 'Pause', action: 'Use the game’s pause control. Esc did not pause in our desktop test.' },
          { input: 'Sound', action: 'Use the game’s sound control to mute or unmute.' },
        ],
      },
      {
        id: 'mechanics',
        title: 'Mechanics',
        intro: 'The game gives you a reason to leave cover and a way to judge the risk. Fireflies add points, Camo shows the effect of standing still, and Seekers sweep the floor with light. Keep an eye on Alert when a beam crosses the chameleon’s position.',
        mechanics: [
          {
            title: 'Firefly',
            paragraphs: [
              'A Firefly is a glow you can collect by passing your chameleon through it. One isolated pickup in Round 1 raised Score from 0 to 10. Survival scores separately. In the stationary test, clearing Round 1 took Score from 0 to 100 without a pickup.',
            ],
          },
          {
            title: 'Camo',
            paragraphs: [
              'Camo indicates how far the chameleon has blended into the color directly underneath it. While dragging in Seek, we saw Camo drop to 0%. Release the drag and use the bar to see the change. Leave time for the color to settle before the next sweep.',
            ],
          },
          {
            title: 'Seekers',
            paragraphs: [
              'Seekers sweep the map with visible light cones. When we moved into danger, the Alert meter rose, reached 100% and we lost a life. The round restarted from Hide with fewer hearts. Use the cone’s direction to plan your route and check Alert when the light gets close.',
            ],
          },
        ],
      },
      {
        id: 'tips',
        title: 'Tips',
        intro: 'Plan each pickup around the next place you can stop. Take the easiest Fireflies first, then try crossing open ground when the beams leave you a clear window. These are practice suggestions based on the browser game.',
        tips: [
          { label: 'Start close.', text: 'Take a nearby Firefly before deciding if a second one fits the same opening.' },
          { label: 'Pick the stop first.', text: 'Aim for a patch you can reach before the beam passes back.' },
          { label: 'Use short moves.', text: 'Break a wide crossing into legs if the next sweep is hard to read.' },
          { label: 'Reset your eyes.', text: 'After each pickup, find the nearest cone again before dragging toward the next glow.' },
          { label: 'Read both bars.', text: 'Camo tells you about the blend. Alert tells you how close you are to losing a life.' },
          { label: 'Log the finish.', text: 'Write down your score, round and the move that ended the run. Change one thing on the next attempt.' },
        ],
        links: [{ label: 'High-score routes and practice drills', href: '/play-guide/#high-score' }],
      },
      {
        id: 'download-unblocked',
        title: 'Download & Unblocked',
        intro: 'Mottle — Hide & Seek is available as a free browser game. Open the player above to play. This site supplies no standalone installer, APK or offline edition.',
        paragraphs: [
          'If the embedded view stalls, reload the player. Access on a school, workplace or other managed network depends on the rules set by its administrator. Ask them about access if the host is restricted.',
        ],
      },
      {
        id: 'faq',
        title: 'FAQ',
        items: [
          { question: 'Is Mottle Game free to play?', answer: 'Yes. Mottle — Hide & Seek is free to play in the browser.' },
          { question: 'Who made Mottle — Hide & Seek?', answer: 'Star Lord created the game.' },
          { question: 'Is mottlegame.cc the official site?', answer: 'No. Mottlegame.cc is an independent player guide.' },
          { question: 'Can I play Mottle on a phone?', answer: 'The browser game uses a drag gesture. Start in the browser, drag with one finger and lift it to stop and blend.' },
          { question: 'How do I camouflage in Mottle?', answer: 'Release your drag and stay still. The chameleon starts matching the ground beneath it, and the Camo meter shows the change.' },
          { question: 'What do Fireflies do?', answer: 'Fireflies award points on contact. A single Firefly raised Score from 0 to 10 in our Round 1 test.' },
          { question: 'What happens when Alert fills?', answer: 'Full Alert triggers a catch and costs a life. If you have lives left, the same round restarts. The last catch opens the Caught Out results screen.' },
          { question: 'What is the difference between mottle and motel?', answer: 'Mottle describes marking a surface with uneven color. A motel is a place for motorists to stay.' },
          { question: 'Is there a Mottle Game APK?', answer: 'This site distributes no APK. The route verified for this guide is the original game in a web browser.' },
          { question: 'What if Mottle will not load here?', answer: 'Try reloading the player. Access depends on the game host and your network’s rules.' },
        ],
      },
    ],
  },
  zh: {
    lang: 'zh-CN',
    title: '变色龙：躲猫猫（Mottle Game）｜在线玩、操作与高分攻略',
    description: '在线玩《变色龙：躲猫猫》Mottle — Hide & Seek。拖动捡萤火虫，松手融入地面，躲开搜寻者的灯光。查看中文操作、警戒值说明和图文高分攻略。',
    h1: '变色龙：躲猫猫',
    definition: '《变色龙：躲猫猫》（Mottle — Hide & Seek）是 Star Lord 创作的免费网页游戏。拖动变色龙去捡萤火虫，松手就能停住，逐渐融入脚下的色块。搜寻者的光束扫过来时，留意伪装条 Camo 和警戒条 Alert。',
    guide: guide.zh,
    sections: [
      {
        id: 'what-is-mottle-game',
        title: 'Mottle Game 是什么？',
        intro: '《变色龙：躲猫猫》是一款实时潜行小游戏。你在一片有不同颜色的场地里操控变色龙，捡起萤火虫得分。变色龙跑动时很显眼，停下来后会逐渐变成脚下的颜色。搜寻者一直在用灯光扫视场地。',
        paragraphs: [
          '屏幕上方的 Score、Lives 和 Round 分别显示分数、剩余生命和轮次。刚上手时，可以先盯住伪装和警戒两条进度条。找一块地停下来，看看身体颜色怎么变，再观察灯光扫到近处时警戒条的反应。',
          '上方播放器载入第三方托管的原版游戏。本指南由 mottlegame.cc 独立制作，原作归 Star Lord。',
        ],
        attribution: '原作由 Star Lord 发布于 8x.gg。本站为独立玩家指南，与原作者及发布平台无隶属关系。',
      },
      {
        id: 'mottle-meaning',
        title: 'Mottle 是什么意思？',
        intro: '英语动词 mottle 指“使表面呈斑驳色”，比如让浅色石面出现大小不一的深色斑块。mottle 也可以作名词，指其中一块斑色或整片斑驳花纹。描述外观时常见的是 mottled，例如 mottled skin 就是“有斑驳花纹的皮肤”。',
        paragraphs: [
          '游戏场地本身是色块拼成的。拖动时，变色龙亮得容易辨认。松手后，它的身体颜色会朝脚下那块地的颜色靠拢。斑驳的地面给角色提供了藏身之处，这就是从游戏机制看，Mottle 这个标题贴切的地方。',
          'Motel 是另一个词，意思是“汽车旅馆”。记字母顺序就容易区分：mottle 有两个 t，结尾是 l-e。motel 只有一个 t，结尾是 e-l。本站用《变色龙：躲猫猫》指代 Star Lord 的 Mottle — Hide & Seek。',
        ],
        links: [
          { label: '《美国传统词典》mottle 词条', href: sources.dictionary },
          { label: '《美国传统词典》motel 词条', href: sources.motelDictionary },
        ],
      },
      {
        id: 'mottle-board-game',
        title: '《变色龙：躲猫猫》是桌游吗？',
        intro: '它不是桌游。《变色龙：躲猫猫》在浏览器中实时运行，由一位玩家用鼠标或触屏操纵变色龙。你犹豫要往哪里走时，搜寻者的灯光也在继续扫。',
        paragraphs: ['从俯视角度看，场地里的彩色格块有点像棋盘。玩的时候把它们看成可以停下伪装的位置即可。等一束灯扫过去，再从眼前的位置跑到萤火虫旁边。'],
      },
      {
        id: 'how-to-play',
        title: '怎么玩',
        intro: '按住并拖动就能移动变色龙，松手后角色停住，伪装逐渐生效。第一次玩，先练习捡附近的一只萤火虫。出发前找好能停住的位置，再看最近的光束往哪一边转。',
        steps: [
          { label: '趁 Hide 倒计时看地形。', text: '先认出角色、最近的萤火虫和捡完能落脚的色块。' },
          { label: '看灯扫过来还是扫过去。', text: '重点留意光束什么时候划过你的路线。' },
          { label: '拖着变色龙穿过亮点。', text: '碰到萤火虫后，看一眼分数，确认捡到了。' },
          { label: '到地方就放手。', text: '等伪装条上升，同时用 Alert 判断还有多少暴露余量。' },
          { label: '换一轮就重新选路线。', text: '利用新的 Hide 倒计时看好位置，后续轮次会逐渐加快。' },
        ],
      },
      {
        id: 'controls',
        title: '操作方式',
        intro: '在游戏画面里按住拖动是移动，放开是停下来伪装。手机用一根手指就够，留意手指和画布边缘的距离。',
        controls: [
          { input: '鼠标', action: '在画面里按住并拖动。' },
          { input: '触屏', action: '在画面里用单指拖动。' },
          { input: '松开', action: '让变色龙停下，开始贴近地面颜色。' },
          { input: '暂停', action: '点游戏内的暂停键。桌面实测按 Esc 没有暂停。' },
          { input: '声音', action: '用游戏内的声音按钮静音或恢复。' },
        ],
      },
      {
        id: 'mechanics',
        title: '游戏机制',
        intro: '萤火虫值得你离开藏身点，伪装条告诉你停下来后变色进行到哪一步。搜寻者的灯光决定什么时候有机会跑。光束接近角色时，看一眼 Alert 比只看身体颜色更可靠。',
        mechanics: [
          { title: '萤火虫（Firefly）', paragraphs: ['发光的点是得分道具。第一轮单独捡一只时，分数从 0 涨到 10。存活也会得分，静止测试中没捡萤火虫，第一轮结束时从 0 分涨到 100 分。'] },
          { title: '伪装（Camo）', paragraphs: ['Camo 表示角色融入脚下地面的程度。实玩时在 Seek 阶段拖动，伪装条降到了 0%。松手后还有一段变色过程，出发前要留出这段时间。'] },
          { title: '搜寻者（Seekers）', paragraphs: ['搜寻者用扇形灯光扫过场地。测试时拖动暴露，Alert 到 100% 后掉了一条命，同一轮重新开始 Hide。看灯光朝向来决定路线，灯靠近时再看 Alert 条。'] },
        ],
      },
      {
        id: 'tips',
        title: '高分技巧',
        intro: '想提高分数，先给每次捡萤火虫的路线定好终点。用几只近处的萤火虫把分数攒起来，再尝试横穿开阔地。下面是可以自己拿一局验证的练习方法。',
        tips: [
          { label: '先收近处的。', text: '捡到一只以后再判断能不能顺路拿第二只。' },
          { label: '出发前找落脚点。', text: '选一块能在下一次光束扫回之前到达的地面。' },
          { label: '把长路线分段。', text: '灯光转向看不清时，跑一段、停一次。' },
          { label: '每次停下后重新找灯。', text: '先弄清最近那束光的方向，再盯下一只萤火虫。' },
          { label: '同时看两条进度。', text: '用 Camo 判断颜色融得怎样，用 Alert 判断离掉命还有多远。' },
          { label: '记下最后一次失误。', text: '分数、轮次和掉最后一条命前的走法都值得记。下一局只改最容易改的一处。' },
        ],
        links: [{ label: '查看冲分路线与进阶练习', href: '/zh/play-guide/#high-score' }],
      },
      {
        id: 'download-unblocked',
        title: '下载与访问',
        intro: '《变色龙：躲猫猫》可以在浏览器里免费打开。在本页点“开始游戏”即可。本站不提供单独的 APK、安装包或离线版。',
        paragraphs: ['如果嵌入窗口卡住，可以重新加载播放器。在学校或工作场所，能否连接游戏服务器取决于网络管理规则。有访问限制时，请联系管理员。'],
      },
      {
        id: 'faq',
        title: '常见问题',
        items: [
          { question: '《变色龙：躲猫猫》免费吗？', answer: '免费，可以直接用浏览器玩。' },
          { question: 'Mottle — Hide & Seek 是谁做的？', answer: '原作者是 Star Lord。' },
          { question: 'mottlegame.cc 是官网吗？', answer: '不是。mottlegame.cc 是独立玩家指南。' },
          { question: '手机可以玩吗？', answer: '网页游戏支持拖动操作。用一根手指带动角色，抬起手指后停住并开始伪装。' },
          { question: '变色龙怎么伪装？', answer: '松开手指或鼠标，角色会停下并向脚下的颜色过渡。Camo 条会显示进度。' },
          { question: '捡到萤火虫有什么用？', answer: '拾取萤火虫可以得分。第一轮单独捡一只的测试中，Score 从 0 增加到 10。' },
          { question: '警戒条满了会怎样？', answer: 'Alert 到 100% 会被抓并扣一条命。还有命时重试同一轮，最后一条命用完后进入 Caught Out 结算。' },
          { question: 'mottle 跟 motel 有什么区别？', answer: 'mottle 指使表面呈斑驳色或斑驳花纹，motel 的意思是汽车旅馆。' },
          { question: '有《变色龙：躲猫猫》安卓版 APK 吗？', answer: '本站没有发布 APK。当前确认的原版入口是浏览器游戏。' },
          { question: '游戏在这个页面打不开怎么办？', answer: '可以重试播放器。能否连通还取决于游戏服务器和你所在的网络。' },
        ],
      },
    ],
  },
};
