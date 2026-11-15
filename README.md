# Mottle Game · 变色龙：躲猫猫

An independent bilingual player guide and browser entry point for **Mottle — Hide & Seek**, the game by Star Lord on 8x.gg. The site starts with a play button, followed by rules, controls, the meaning of *mottle*, and a guide based on hands-on play.

本站是 Star Lord 在 8x.gg 发布的 **Mottle — Hide & Seek（变色龙：躲猫猫）** 的独立中英文攻略站。首页可打开原版游戏，正文解释词义、操作、伪装机制和提高得分的方法。

- [English homepage](https://mottlegame.cc/) · [中文首页](https://mottlegame.cc/zh/)
- [English walkthrough](https://mottlegame.cc/play-guide/) · [中文实玩攻略](https://mottlegame.cc/zh/play-guide/)
- [Original game on 8x.gg · 8x.gg 原作](https://www.8x.gg/apps/xPKXL5uurAzb6pAG)

## Play · 玩法速览

1. **Move with a held drag.** Use the mouse on desktop or a finger on a touch screen. Look at the Seekers' lights before committing to a route.
2. **Collect a Firefly, then release.** Stop on the colored ground so your character can blend in. Watch Camo and Alert after each move.
3. **Plan the exit before chasing another Firefly.** A short detour with a place to stop is an easier route to repeat under pressure. See the walkthrough for observed runs and the limits of those observations.

1. **按住拖动。** 电脑用鼠标，手机用单指。先看搜索光扫向哪里，再选移动路线。
2. **收集萤火虫后松手。** 在有颜色的地面上停下，让角色贴近地面色。移动前后都可以看 Camo（伪装）和 Alert（警戒）的变化。
3. **追下一只之前先想好停在哪里。** 优先选一段短路线和一个可以停下的位置。各局成绩、截图和证据边界见完整攻略。

## Local development · 本地运行

Use a current Node.js LTS release. The minimum supported version is recorded in `package.json`. 使用当前 Node.js LTS，最低版本见 `package.json`。

```sh
npm ci
npm run dev
```

```sh
npm run build
node scripts/verify-build.mjs
npm run preview
```

Astro writes the static site to `dist/`. The homepage and walkthrough are available as complete HTML. The original game opens in a cross-origin iframe after the play button is pressed. Astro 将页面构建到 `dist/`。首页和攻略提供完整的静态 HTML，点击游玩后才加载原版游戏 iframe。

See the [playtest notes](docs/playtest-notes.md) for the capture method and evidence, and the [release runbook](docs/release.md) for deployment. 取证方法见[试玩记录](docs/playtest-notes.md)，部署步骤见[发布说明](docs/release.md)。

## Credits and license · 署名和许可

- The site's source code is available under the [MIT License](LICENSE). 站点源代码采用 [MIT 许可证](LICENSE)。
- Star Lord created the original game. The game, its assets, and the gameplay shown in editorial screenshots belong to their respective rights holders. The MIT license covers this site's code. 原版游戏由 Star Lord 创作，游戏素材和攻略截图中的游戏画面属于各自权利人。游戏本身另由原发布方托管。
- Typeface packages carry their own licenses. 字体遵循各包的许可证。[Kanit](https://fontsource.org/fonts/kanit) · [Source Sans 3](https://fontsource.org/fonts/source-sans-3)
- Site illustrations are labeled separately from gameplay evidence. 站点插画和实玩截图在各自用途处标注。
