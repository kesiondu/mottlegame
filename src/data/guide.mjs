import { asset } from './site.mjs';

export const guide = {
  en: {
    title: 'How to Play Mottle — Camo, Alert & High-Score Routes',
    description: 'A pictured walkthrough of Mottle — Hide & Seek. Learn how to move, read the Seekers’ lights, collect Fireflies and practice for a higher score.',
    h1: 'How to Play Mottle',
    intro: 'Look at the light before you look at the Firefly. In Mottle — Hide & Seek, a short drag can earn points, but letting go in time is what gives the chameleon a chance to blend. This guide follows a run from the opening countdown to the last life and explains what to practice for a higher score.',
    updated: '2026-11-15',
    evidence: [
      { path: asset('/images/mottle-game-chameleon-moving-camo-zero.webp'), alt: 'The chameleon moved to a different patch while the Camo meter reads 0%', caption: 'During Seek, holding the drag moves the chameleon and Camo reads 0%.', width: 900, height: 792 },
      { path: asset('/images/mottle-game-chameleon-hidden-camo-100.webp'), alt: 'The chameleon is still on the board while the Camo meter reads 100%', caption: 'After releasing, Camo builds back to 100% as the character blends.', width: 900, height: 792 },
    ],
    runTable: {
      columns: ['Trial', 'What we did', 'What the screen showed'],
      rows: [
        ['A · Survival baseline', 'Stayed still after starting. No deliberate Firefly pickup.', 'Round 1 started at 0. Round 2 opened at 100, and Round 4 opened at 600. All three lives remained at each checkpoint.'],
        ['B · Exposure and recovery', 'Dragged across the active board during Seek.', 'Camo fell to 0%. Alert climbed to 100% and the game deducted a life. Hide restarted in Round 1 with two lives.'],
        ['C · Single pickup and release', 'Touched one glow during Round 1 Seek, then stopped.', 'Score 0 to 10. In two stationary samples 1.3 seconds apart, Alert fell from 38% to 9% and Camo climbed from 60% to 100%.'],
        ['C · Pause', 'Pressed Esc with game focus, then used the in-game Pause button.', 'The game timer kept running after Esc. The Pause button showed the PAUSED menu and held the timer at 9 seconds.'],
        ['D · All lives lost', 'Kept moving through search beams across several attempts in the same round.', 'Each catch cost a life. After the last heart, CAUGHT OUT showed SCORE 0, BEST 0 and ROUNDS 1.'],
        ['E · Finished scoring run', 'Stayed still to clear Round 1, then kept moving through search beams in Round 2.', 'The results showed SCORE 100, BEST 100, ROUNDS 2 and NEW BEST!'],
        ['F · Highest completed score', 'Stayed still for the first four rounds, then deliberately exposed the chameleon in Round 5 to get a results screen.', 'Round 4 showed a +400 survival bonus. The run ended at 1,000 points with BEST 1,000 and ROUNDS 5.'],
      ],
    },
    sections: [
      {
        id: 'walkthrough',
        title: 'Your first round, step by step',
        paragraphs: [
          'Select Play on the homepage and start a run in the game. When HIDE! appears, look for the chameleon, a nearby Firefly and the closest Seeker. Score, Lives and Round are on the left in the desktop layout. The Hide countdown, Alert and Camo are on the right. In our opening test, an attempted drag during Hide did not shift the character. Use this time to read the board.',
        ],
        steps: [
          { label: 'Locate the character.', text: 'Look for the small chameleon on the color field. Before dragging, choose one nearby glow and a patch where you can stop after you collect it.' },
          { label: 'Try the controls in a short burst.', text: 'Hold the mouse button and drag inside the field. Let go after moving a little. Watch the body color settle and check whether Camo climbs. On a phone, use the same drag-and-release gesture with one finger.' },
          { label: 'Cross after a sweep.', text: 'Watch the edge of the nearest cone move past your path. If you have room to cross, drag through the Firefly, finish on the planned patch and let go.' },
          { label: 'Confirm the pickup.', text: 'Look at Score just after you pass through the glow. If the light is coming back, stay with the move you planned instead of turning toward a second pickup.' },
          { label: 'Check Alert after you stop.', text: 'Read both meters. A growing Camo bar tells you the blend is improving. A rising Alert bar tells you exposure still matters at this spot.' },
          { label: 'Reassess at the next countdown.', text: 'Scan the new placement and the current beam directions. Choose another short route before committing to a longer one.' },
        ],
        figures: [
          { path: asset('/images/mottle-game-round-1-hide-countdown.webp'), alt: 'Mottle opening Hide screen with three seconds on the timer, three lives, Camo 100% and Alert 0%', caption: 'Round 1 during the Hide countdown. The score starts at 0 and all three hearts are visible.' },
        ],
      },
      {
        id: 'field-notes',
        title: 'What we saw in the browser',
        paragraphs: [
          'We tested Star Lord’s original game on November 15, 2026 in desktop Chromium with a mouse. We ran separate movement and survival attempts and recorded the visible scores, hearts, round labels and meters. The screenshots are from the game, with file sizes reduced for the guide.',
          'For our baseline run, we let the chameleon stand still. The first Hide screen showed three lives, Score 0, Camo 100% and Alert 0%. The game advanced to Round 2 with all three hearts and Score 100, without an intentional Firefly pickup. By the Round 4 opening, the score was 600 and all three hearts remained. Surviving those rounds earned points in this run.',
          'In a separate exposure test, moving during Seek brought Camo to 0%. We saw Alert about halfway up the bar, then at 100% with “SPOTTED — hide!” The catch removed a heart. The game restarted the Hide phase in the same round, with Alert 0% and Camo 100%. The first active Seek countdown showed 13 seconds on one captured frame.',
          'Later-round pressure was visible on screen. The captured Round 1 start shows one visible Seeker, and the Round 4 start shows three. The board colors and Firefly placement also changed as the rounds grew faster. The game shows a red warning and an exclamation mark during detection. These signals help you react, while patrol timing and target selection would take separate tests to establish.',
          'A separate Round 1 test isolated one Firefly before the end-of-round bonus. The score changed from 0 to 10 on a short drag through the glow. After release, the character started to blend. In two stationary samples about 1.3 seconds apart, Camo climbed from 60% to 100% and Alert fell from 38% to 9%. Those values describe this route under the moving beams. They are insufficient to establish a fixed recovery rate.',
          'Use the on-screen Pause control if you want to stop the clock. Pressing Esc left the countdown running in our desktop test. The button opened a menu with Resume and Quit, and the visible timer stayed at 9 seconds during the pause sample.',
        ],
        figures: [
          { path: asset('/images/mottle-game-round-1-survival-score-100.webp'), alt: 'Round 2 Hide screen with Score 100 and all three lives', caption: 'Surviving Round 1 raised Score to 100 in the stationary run. The player kept all three hearts.' },
          { path: asset('/images/mottle-game-round-4-three-seekers-score-600.webp'), alt: 'Round 4 Hide screen showing three Seekers, three hearts and Score 600', caption: 'At the start of Round 4 in the same run, there were three Seekers on screen and Score was 600.' },
          { path: asset('/images/mottle-game-alert-meter-49-percent.webp'), alt: 'The warning meter is at 49% during the exposure test', caption: 'Alert reached 49% in this frame, before the meter filled later in the same test.' },
          { path: asset('/images/mottle-game-spotted-life-lost.webp'), alt: 'Spotted screen with a lost-life message and fewer hearts in the HUD', caption: 'The game confirms the catch and takes a life. The player retries the same round.' },
          { path: asset('/images/mottle-game-firefly-before-pickup.webp'), alt: 'Round 1 before a single Firefly pickup, with a score of zero', caption: 'Before the short drag, Score was 0 in the active search.' },
          { path: asset('/images/mottle-game-firefly-after-pickup-score-10.webp'), alt: 'Round 1 after a single Firefly pickup, with a score of ten', caption: 'The same Round 1 pickup raised Score to 10.' },
          { path: asset('/images/mottle-game-pause-menu.webp'), alt: 'The original game pause menu offers Resume and Quit', caption: 'The game’s own Pause button held the Seek clock at 9 seconds.' },
        ],
      },
      {
        id: 'design-principles',
        title: 'How the game creates tension',
        paragraphs: [
          'This section is our reading of the design. A Firefly puts a reward where you have to move to collect it. Moving makes the chameleon easy to see. Releasing the same input stops movement and starts the blend. The resulting choice is simple to make and easy to get wrong when a light is turning your way.',
          'Color, light and the meters carry different information. Color helps you read the change in the chameleon. A cone tells you where the beam points now. Alert carries the consequence of exposure long enough for you to see the danger build. That makes the game readable at a glance while still rewarding attention to timing.',
          'The opening countdown gives you time to plan without additional controls. The escalating pace described by the creator squeezes the gap between observing and acting. A route that worked earlier may demand a shorter leg or a different place to stop later on.',
        ],
      },
      {
        id: 'high-score',
        title: 'High-score strategy',
        paragraphs: [
          'Build your score with pickups that leave you somewhere good to stop. You can also score by surviving a round. If a distant Firefly would keep you in the open too long, let the current search pass. Early in a run, favor the Firefly that takes a short drag and leaves you with a clear view of the next beam.',
          'Try the sequence “look, drag, release, recheck.” Decide where to stop before you move. If the first pickup goes to plan, read the current beam again. To see whether a route improved your score, compare it with a survival run at the same round. A survival checkpoint and a final score are different measurements.',
          'Our highest completed test score was 1,000. We stayed still through the first four rounds, and the fourth clear showed a +400 bonus with all three hearts intact. We then deliberately moved in the search lights to reach the results screen. It showed ROUNDS 5 because we reached the fifth round. The in-game BEST label records the result shown in our session. The global record and scoring ceiling remain unverified.',
        ],
        tips: [
          { label: 'Practice a short scoring route.', text: 'Try one nearby Firefly followed by a deliberate stop. Judge each attempt by whether you got the pickup and had time to start blending.' },
          { label: 'Leave a margin at the cone edge.', text: 'A path that barely clears the light on a still frame may close while you drag. Cross after you see the direction of the sweep.' },
          { label: 'Watch the second light.', text: 'When two beams are near your route, track both before crossing. A gap in the first beam can line up with the second.' },
          { label: 'Shorten the next run as pressure builds.', text: 'If you keep losing a life after a pickup, try a closer stopping point in the next attempt and compare how much Alert you carry.' },
          { label: 'Record score, round and lives.', text: 'Keep the final screen. Compare similar routes across more than one run before deciding a change helped.' },
        ],
        figures: [
          { path: asset('/images/mottle-game-round-3-score-300.webp'), alt: 'Round 3 opening at 300 points with three hearts', caption: 'The stationary replay entered Round 3 with Score 300 and all three hearts.' },
          { path: asset('/images/mottle-game-round-4-clear-score-1000.webp'), alt: 'Round 4 clear shows +400, Score 1000 and three hearts', caption: 'Clearing Round 4 while staying still raised the score to 1,000. All three hearts remained.' },
          { path: asset('/images/mottle-game-final-score-1000-round-5.webp'), alt: 'Original results screen showing SCORE 1000, BEST 1000, and ROUNDS 5', caption: 'The completed 1,000-point test. We reached Round 5 after four clears.' },
        ],
      },
      {
        id: 'caught',
        title: 'Getting caught and ending a run',
        paragraphs: [
          'Full Alert triggers a catch and costs one life. In our failure test, the same round started again while hearts remained. The last catch opened CAUGHT OUT with a score of 0. We pressed Play from that screen and confirmed a fresh Round 1 with the Hide timer at 3 and Score 0. For your own comparisons, record the final score and the last round shown on the results screen.',
          'For your next run, pick one change you can observe. Start the crossing later, find a closer stop, or leave a distant Firefly alone. Keep the change small enough to trace it back to the screen.',
        ],
        figures: [
          { path: asset('/images/mottle-game-searchlight-alert-86-percent.webp'), alt: 'Red search cone with Alert 86%, Camo 0% and two hearts remaining', caption: 'During sustained exposure, the alert rises while the character is moving through the red cone.' },
          { path: asset('/images/mottle-game-round-retry-one-life.webp'), alt: 'Round 1 Hide restarts with one heart, Alert 0% and Camo 100%', caption: 'With one heart left, the next attempt starts in the same round. The alert meter resets.' },
          { path: asset('/images/mottle-game-caught-out-score-zero.webp'), alt: 'CAUGHT OUT results screen with SCORE 0, BEST 0 and ROUNDS 1', caption: 'After the final heart, the original game shows the results and a Play button for a new run.' },
          { path: asset('/images/mottle-game-new-best-score-100.webp'), alt: 'CAUGHT OUT with SCORE 100, BEST 100, ROUNDS 2 and the NEW BEST label', caption: 'A separate run ended in Round 2 with 100 points. The game marked these results as NEW BEST!' },
        ],
      },
    ],
  },
  zh: {
    title: '怎么玩《变色龙：躲猫猫》｜伪装、警戒值与高分路线',
    description: '《变色龙：躲猫猫》中文图文攻略。看懂搜寻者的扇形灯光、萤火虫得分、Camo 伪装条和 Alert 警戒值，从第一轮练到稳定冲分。',
    h1: '怎么玩《变色龙：躲猫猫》',
    intro: '先看灯，再看萤火虫。《变色龙：躲猫猫》里，拖一下可以得分，及时放手才有时间变色。这篇攻略从开局倒计时讲到最后一条命，说明画面上看到了什么，以及怎样练出更稳定的拿分路线。',
    updated: '2026-11-15',
    evidence: [
      { path: asset('/images/mottle-game-chameleon-moving-camo-zero.webp'), alt: '变色龙拖动到另一块地面，Camo 为 0%', caption: 'Seek 阶段拖动角色，伪装条降到 0%。', width: 900, height: 792 },
      { path: asset('/images/mottle-game-chameleon-hidden-camo-100.webp'), alt: '变色龙在地面停止移动，Camo 为 100%', caption: '松手停住后，角色融入地面，伪装条回到 100%。', width: 900, height: 792 },
    ],
    runTable: {
      columns: ['测试局', '怎么操作', '屏幕上看到了什么'],
      rows: [
        ['A · 静止对照', '开局后保持静止，没有主动捡萤火虫。', '第一轮 0 分，第二轮开局 100 分，第四轮开局 600 分。三个记录点都有三条命。'],
        ['B · 暴露和恢复', '在 Seek 阶段持续拖动，经过搜寻灯扫过的区域。', 'Camo 降到 0%，Alert 升到 100% 后掉命。第一轮重新开始 Hide，还剩两条命。'],
        ['C · 单次拾取和松手', '在第一轮 Seek 阶段只经过一个亮点，随后松手。', '分数从 0 到 10。松手后的两个取样点间隔约 1.3 秒，Alert 从 38% 降到 9%，Camo 从 60% 升到 100%。'],
        ['C · 暂停', '窗口有焦点时按 Esc，再点游戏内的暂停按钮。', '按 Esc 后倒计时继续走。点暂停显示 PAUSED，倒计时停在 9 秒。'],
        ['D · 扣完三条命', '在同一轮的多次尝试中持续拖动，保持暴露在扫过的光束中。', '每次被抓扣一条命。最后进 CAUGHT OUT 结算，显示 SCORE 0、BEST 0 和 ROUNDS 1。'],
        ['E · 完整计分局', '保持静止通过第一轮，在第二轮持续拖动。', '结算显示 SCORE 100、BEST 100、ROUNDS 2 和“NEW BEST!”标签。'],
        ['F · 最高结算分', '前四轮保持静止，第五轮主动暴露以取得结算画面。', '第四轮通关奖励 +400，结算显示 SCORE 1000、BEST 1000、ROUNDS 5。'],
      ],
    },
    sections: [
      {
        id: 'walkthrough',
        title: '第一轮怎么打',
        paragraphs: ['在首页点“开始游戏”，进入原版后开一局。出现 HIDE! 时，先找变色龙、附近的萤火虫和最近的搜寻者。桌面版分数、生命和轮次在左边，倒计时、警戒条和伪装条在右边。一次开局测试中，Hide 期间尝试拖动没有让角色移位，可以先用这段时间看场地。'],
        steps: [
          { label: '找到自己。', text: '认出色块上的小变色龙，选一只近处的萤火虫，顺便选好捡到以后停在哪儿。' },
          { label: '试一次短拖。', text: '在游戏区按住鼠标，拖一小段就松手。观察身体颜色和 Camo 条。手机上换成一根手指，抬起来就是停住。' },
          { label: '等光扫过去。', text: '看最近那束灯的边缘离开你的路线。有空当时，拖动变色龙经过亮点，在预先选的位置松手。' },
          { label: '捡完看一眼分数。', text: '刚经过亮点时瞄一眼 Score。如果灯正在转回来，就按计划停下。' },
          { label: '对照两条进度。', text: 'Camo 在涨，说明角色正融入地面。Alert 在涨，说明它仍有被抓到的风险。' },
          { label: '每轮开局重新认路。', text: '看清新位置和灯光方向，先找一段好跑的短路线。' },
        ],
        figures: [
          { path: asset('/images/mottle-game-round-1-hide-countdown.webp'), alt: '第一轮 Hide 画面显示 3 秒倒计时、三条命、伪装 100% 和警戒 0%', caption: '第一轮的 Hide 倒计时。左侧分数为 0，三颗爱心都在。' },
        ],
      },
      {
        id: 'field-notes',
        title: '浏览器实玩记录',
        paragraphs: [
          '2026 年 11 月 15 日，我们在桌面 Chromium 里用鼠标操作 Star Lord 的原版游戏，分别测试静止存活和主动移动。分数、爱心、轮次和进度条均取自游戏画面。配图是实际浏览器截屏的压缩版。',
          '静止对照局里，第一轮 Hide 显示三条命、0 分、Camo 100%、Alert 0%。没有主动捡萤火虫，进入第二轮时仍有三条命，分数升到 100。到第四轮开局，分数是 600，三颗爱心都在。这一局确认了靠存活过轮也能得分。',
          '另开一局专门测试暴露。在 Seek 阶段拖动，Camo 降到 0%。警戒条先到约一半，后来升到 100%，画面出现“SPOTTED — hide!”。被抓后少了一颗爱心，同一轮重新进入 Hide，Alert 回到 0%，Camo 回到 100%。第一轮 Seek 有一帧显示还剩 13 秒。',
          '后续轮次的画面也有变化。第一轮开局截图可见一个搜寻者，第四轮开局截图可见三个，色块和萤火虫也换了位置。原版简介称轮次会加速。实测看到检测时有红色提示和感叹号。它们可以用来判断眼前的危险，巡逻周期和搜寻者怎么选目标需要另做测试。',
          '第一轮另做了单次萤火虫拾取，赶在过轮给分前对照。短拖经过一个亮点，Score 从 0 涨到 10。松手后隔约 1.3 秒取样，Camo 从 60% 升到 100%，Alert 从 38% 降到 9%。这组读数只对应当时的走位和灯光，还不足以算出固定恢复速度。',
          '临时离开时，请点游戏内的暂停键。桌面实测按 Esc 后计时仍在走。点暂停才打开带 Resume 和 Quit 的菜单，取样期间屏幕时钟保持在 9 秒。',
        ],
        figures: [
          { path: asset('/images/mottle-game-round-1-survival-score-100.webp'), alt: '第二轮 Hide 画面显示 100 分，三条命都在', caption: '静止测试撑过第一轮后得到 100 分，三颗爱心都在。' },
          { path: asset('/images/mottle-game-round-4-three-seekers-score-600.webp'), alt: '第四轮开局有三个搜寻者、三颗爱心，分数为 600', caption: '同一局走到第四轮开局时，画面里有三个搜寻者，累计 600 分。' },
          { path: asset('/images/mottle-game-alert-meter-49-percent.webp'), alt: '暴露测试中警戒条达到 49%', caption: '这一帧的 Alert 是 49%。同一次暴露测试中，警戒条后来升到了 100%。' },
          { path: asset('/images/mottle-game-spotted-life-lost.webp'), alt: '原版游戏显示被发现并失去一条生命的提示', caption: '被抓后少了一条命，随后重试同一轮。' },
          { path: asset('/images/mottle-game-firefly-before-pickup.webp'), alt: '第一轮捡萤火虫之前，分数为 0', caption: '第一次短拖前，第一轮还在搜寻阶段，Score 为 0。' },
          { path: asset('/images/mottle-game-firefly-after-pickup-score-10.webp'), alt: '第一轮单次拾取后，分数为 10', caption: '同一轮中拾取一只萤火虫后，Score 升到 10。' },
          { path: asset('/images/mottle-game-pause-menu.webp'), alt: '原版暂停菜单有 Resume 和 Quit 两项', caption: '点游戏内暂停后，Seek 倒计时停在 9 秒。' },
        ],
      },
      {
        id: 'design-principles',
        title: '游戏设计原理',
        paragraphs: [
          '以下是我们对机制的解读。游戏用萤火虫把你引到藏身点之外，又让移动中的变色龙变得显眼。松开同一个操作就能停住、开始变色。于是每一次拖动，都要同时考虑前面的分和身后的光。',
          '角色颜色、灯光和警戒条分别解决不同的问题。颜色告诉你角色融进地面没有。扇形光给出搜寻者此刻的朝向。Alert 把暴露的后果显示成一条进度，让你还有机会在掉命前发现情况不对。',
          '开局倒计时不用加新的操作键，就能给玩家留出看场地的时间。后续轮次节奏会紧起来，早先能一次跑完的距离，后面可能需要切成两段。',
        ],
      },
      {
        id: 'high-score',
        title: '怎么冲高分',
        paragraphs: [
          '先挑捡完就能停的萤火虫。撑过一轮也能得分。屏幕另一头的亮点如果需要长时间暴露，可以等当前搜寻结束。前几轮优先选拖动距离短、停下来还能看到下一束灯的路线。',
          '练习“看灯、短拖、松手、再看灯”。走之前决定好在哪儿停。第一只顺利到手以后，重新看一眼搜寻者的朝向，再决定下一步。要判断路线有没有增加分数，就和到达同一轮时的静止局相比。中途截图中的分数需要和结算分分开记。',
          '本次最高结算成绩是 1,000 分。前四轮保持静止，第四轮通关时还剩三颗爱心，画面显示奖励 +400。之后我们在第五轮主动走进灯光，拿到完整的结算截图。ROUNDS 5 表示到达第五轮，实际通过了前四轮。BEST 是本次游戏画面显示的成绩，全球纪录和理论上限尚未核实。',
        ],
        tips: [
          { label: '先练一条短路线。', text: '从近处捡一只，然后在选好的位置停住。每次看自己有没有得分、停下来后有没有时间进入伪装。' },
          { label: '给光束边缘留一点余地。', text: '静止画面里还有缝，拖过去时灯可能已经扫回来了。先看清光往哪边走。' },
          { label: '顺便看第二束灯。', text: '附近有两束光时，两束都要看。第一束刚扫开，第二束可能正扫进来。' },
          { label: '掉命后试试更近的落脚点。', text: '如果总在捡到萤火虫后掉命，下一局就把停靠位置提前，看警戒条有没有改善。' },
          { label: '留一张结算图。', text: '记下分数、结束轮次和剩余生命。想判断走法有没有用，可以用相近路线再打几局。' },
        ],
        figures: [
          { path: asset('/images/mottle-game-round-3-score-300.webp'), alt: '第三轮开局，分数 300，三颗爱心', caption: '复测时保持静止进入第三轮，分数为 300，三颗爱心都在。' },
          { path: asset('/images/mottle-game-round-4-clear-score-1000.webp'), alt: '第四轮通关显示奖励 +400、总分 1000 和三颗爱心', caption: '静止通过第四轮后累计 1,000 分，三颗爱心都在。' },
          { path: asset('/images/mottle-game-final-score-1000-round-5.webp'), alt: '原版结算显示 SCORE 1000、BEST 1000 和 ROUNDS 5', caption: '本次最高结算为 1,000 分。通过前四轮，在第五轮结束。' },
        ],
      },
      {
        id: 'caught',
        title: '被抓与结束条件',
        paragraphs: [
          '警戒条到 100% 会被抓，扣掉一条命。失败测试中，只要还有爱心，就回到同一轮重试。扣完最后一条命后，游戏显示 CAUGHT OUT，分数为 0。我们点 Play 验证了重开，轮次回到第一轮，Hide 显示 3 秒，分数为 0。比较自己的成绩时，记下结算分和最后轮次。',
          '下一局只试一项改动。晚一点横穿、换个近处停下的位置，或者放弃那只太远的萤火虫。这样比较容易看出哪里有改善。',
        ],
        figures: [
          { path: asset('/images/mottle-game-searchlight-alert-86-percent.webp'), alt: '灯光变红，警戒值 86%，伪装 0%，还剩两条命', caption: '角色持续移动并暴露在红色光束中时，警戒值继续上涨。' },
          { path: asset('/images/mottle-game-round-retry-one-life.webp'), alt: '第一轮从 Hide 重来，还剩一条命，Alert 为 0%、Camo 为 100%', caption: '还剩一颗爱心时，留在同一轮重试，警戒值重置。' },
          { path: asset('/images/mottle-game-caught-out-score-zero.webp'), alt: 'CAUGHT OUT 结算画面显示 SCORE 0、BEST 0 和 ROUNDS 1', caption: '最后一条命用完后进入结算，可以点 Play 重新开局。' },
          { path: asset('/images/mottle-game-new-best-score-100.webp'), alt: 'CAUGHT OUT 结算画面显示 SCORE 100、BEST 100、ROUNDS 2 和 NEW BEST', caption: '另一局在第二轮结束，结算 100 分，游戏显示了 NEW BEST! 标签。' },
        ],
      },
    ],
  },
};
