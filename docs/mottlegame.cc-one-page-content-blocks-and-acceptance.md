# mottlegame.cc 单页站（one page）内容分块与验收

日期：2026-11-15

## 固定元数据

- Title: `Mottle Game — Play Online Free, Meaning, Controls & Tips`
- Description: `Mottle is a free browser hide-and-seek game. Learn what Mottle means, how to play, Firefly and Camo mechanics, controls and the best hiding tips.`
- H1: `Mottle Game`
- Canonical URL: `https://mottlegame.cc/`
- 正文总量：1,200–1,500 个英文单词。
- 标题约束：全页一个 H1；H2/H3 只使用本表规定的英文字面标题。

## 11 个分块

| # | 分块与固定标题 | 主要承接词 | 内容要点 | 建议词数 | 验收标准 |
| --- | --- | --- | --- | ---: | --- |
| 1 | 首屏可玩 | mottle game, play mottle game online free | 首屏直接展示原创海报与 Play Mottle；点击后才加载原始游戏；提供 restart、fullscreen、open original、loading、timeout、retry | UI 微文案，不计入正文目标 | 首屏可见主行动；点击前无 iframe 请求；成功进入游戏；失败有重试与原站链接；桌面和触控可用 |
| 2 | H1 `Mottle Game` + 40 词定义 | mottle game | 用约 40 词定义它是 Star Lord 创作、运行于 8x.gg 的免费浏览器伪装躲猫猫游戏；包含 move、release、blend、Fireflies、Seekers | 35–45 | H1 全页唯一；首段在 100 个首屏词内出现主词；不声称官方或拥有游戏 |
| 3 | H2 `What Is Mottle Game` | what is mottle game, is mottle a game | 解释类型、目标、实时操作、得分与生存循环；说明它是数字浏览器游戏 | 110–140 | 第一段直接回答；事实与原始作品页一致；包含作者与平台来源链接 |
| 4 | H2 `What Does Mottle Mean?` | mottle meaning, what does mottle mean | 至少 200 词；解释英语动词/名词含义“使表面出现不规则斑点或色块”；连接到游戏中按脚下颜色伪装；明确区分 `mottle` 和 `motel` | 210–240 | ≥200 词；首句给出字典式直答；出现清楚的 `mottle` vs `motel` 对比；不把游戏描述成汽车旅馆模拟器 |
| 5 | H2 `Is Mottle a Board Game?` | mottle board game, is mottle a game | 首句明确否定：`It is not a board game.`；随后说明它是实时浏览器 hide-and-seek / stealth / survival 游戏，使用鼠标或触控 | 90–120 | 必须原样出现否定句；同时回答 “is mottle a game”；不使用含糊表述 |
| 6 | H2 `How to Play` | how to play mottle game | 以短步骤说明观察光锥、拖动、收集、松开、等待 Camo、控制 Alert、进入下一轮 | 140–170 | 使用有序列表；步骤符合实际试玩；桌面和手机输入都覆盖；不承诺不存在的键位 |
| 7 | H2 `Controls` | mottle game controls | 鼠标拖动、单指拖动、松开伪装、Esc 暂停、声音/暂停按钮；提示保持指针在游戏区域 | 90–110 | 表格或定义列表可扫描；键盘/鼠标/触控表述准确；控制项与游戏可见 UI 一致 |
| 8 | H2 机制总区；H3 `Firefly` / `Camo` / `Seekers` | mottle firefly, mottle camo, mottle seekers, alert meter | Firefly 是得分诱因；Camo 是静止与匹配地面颜色的反馈；Seekers 的搜索光制造风险；补充 Alert 与三者关系 | 210–240 | 三个 H3 固定字面；每项先给 40–60 词可独立提取的直答；不把 Firefly 写成隐身道具 |
| 9 | H2 `Tips` | mottle game tips, hiding tips | 短距离移动、提前停下、读光锥节奏、选择安全色块、不要贪远处萤火虫、同时看 Camo 与 Alert | 140–170 | 5–7 条具体建议；明确是编辑策略而非开发者保证；避免泛泛而谈 |
| 10 | H2 `Download & Unblocked` | mottle game download, mottle game unblocked, mottle apk | 说明浏览器即可玩；不提供未验证 APK、mod 或离线副本；解释学校/公司网络限制由网络管理者控制；提供原始入口 | 110–140 | 不承诺“永久 unblocked”；不提供规避网络政策的方法；区分 8x 平台 App 与独立 Mottle APK |
| 11 | H2 `FAQ` | 全部高意图长尾词 | 8–12 条：免费、官方性、作者、手机、下载、APK、board game、mottle/motel、加载失败、controls、Firefly/Camo、unblocked | 200–260 | 8–12 个可见问答；回答不重复堆词；FAQPage 仅作语义 Schema，不宣称 Google FAQ 富结果 |

建议正文合计约 1,360–1,500 词；最终以渲染后可见英文正文统计为准，导航、页脚和按钮文案不用于填充正文目标。

## 页面与发布验收

- 首页页脚用普通文字链接指向 `/privacy/`、`/terms/`、`/contact/`。
- 首页自 canonical 到 `https://mottlegame.cc/`；HTTP、www、大小写和尾斜杠策略统一重定向。
- `robots.txt` 指向 `https://mottlegame.cc/sitemap.xml`。
- Sitemap 只收录 canonical、200、可索引页面。
- 首页使用 `WebSite`、`WebPage`、`VideoGame` 和 `Organization`/`Person` 的准确 JSON-LD；问答可使用语义 `FAQPage`，但不以已退役的 Google FAQ 富结果为目标。
- 页面主体服务端/静态输出，不依赖客户端 JavaScript才能被索引。
- 发布当天验证 200、canonical、robots、sitemap、结构化数据、移动端、Core Web Vitals，然后在 GSC 提交 sitemap 与首页 URL。
- 外链只做 3–5 个自然、相关、公开的社区提及；不购买链接，不伪造讨论，不群发 Reddit/Discord。

