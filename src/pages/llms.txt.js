import { origin } from '../data/site.mjs';
import { sources } from '../data/content.mjs';

export function GET() {
  return new Response(`# Mottle Game

> Independent bilingual player guide and browser entry for Mottle – Hide & Seek by Star Lord, titled 变色龙：躲猫猫 in Chinese.

## Play and rules
- [Mottle Game](${origin}/): Browser game entry, meaning, controls, camouflage mechanics and FAQ.
- [变色龙：躲猫猫](${origin}/zh/): 简体中文版游戏入口、操作、伪装机制与常见问题。

## Playtest guides
- [Mottle Play Guide](${origin}/play-guide/): Illustrated gameplay notes, observed runs and strategy.
- [实测攻略](${origin}/zh/play-guide/): 带实玩截图的玩法、测试记录和冲分技巧。

## About this guide
- [About Mottle Game](${origin}/about/): Ownership, editorial method and independent-site disclosure.
- [关于本站](${origin}/zh/about/): 本站定位、内容方法与非官方说明。

## Original work
- [8x.gg game listing](${sources.original})
- [Star Lord](${sources.creator})
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
