# Mottle 原版试玩记录 / Original-game playtest notes

2026-11-15 · Chromium desktop · 1000 × 880 viewport · mouse input

从 [8x.gg 原始作品页](https://www.8x.gg/apps/xPKXL5uurAzb6pAG) 进入 [原版全屏版](https://5qbwd96hq.8x.gg/)。记录取自游戏画面和可见 HUD 文本。局内输入通过浏览器鼠标执行，保留时间、分数、生命、回合、Alert 和 Camo 的原样显示。WebP 图是浏览器截图的缩小版。

The original 8x.gg listing credits Star Lord and describes drag-to-run, release-to-blend, fireflies for points and faster rounds. Numbers below come from the displayed game HUD on the test date.

| 实验 / Trial | 操作 / Input | 画面结果 / Observed outcome |
| --- | --- | --- |
| A · 生存基线 / Survival baseline | 开局后基本静止。首个倒计时中试拖动，截图未见角色离开中心。 | Round 1 起始 0 分、三颗心，HIDE 3。首轮存活进入 Round 2 时 100 分、三颗心。随后截图中 Round 4 已达 600 分、三颗心。未主动收集萤火虫。 |
| B · 移动暴露 / Exposure | 在 SEEK 阶段持续拖动，穿过搜寻扇形光束。 | 角色移动到棋盘边侧并显橙色，Camo 0%。光束和边框转红，搜寻者头顶出现感叹号。Alert 从 0% 到约一半，再达到 100%。 |
| B · 扣命与恢复 / Life lost and recovery | 保持暴露，随后停手。 | 显示 SPOTTED! / YOU LOST A LIFE，三颗心变两颗，Alert 重置。同一 Round 1 重新开始 HIDE，随后 SEEK 显示 Camo 100% 与 Hidden — stay still。 |
| C · 单只萤火虫 / Single Firefly | 第一轮 SEEK 开始时 0 分，短距离拖向一只发光的萤火虫，收集后松手。 | 计分变为 10。松手后的截图记录到 Alert 34%、Camo 42%。随后保持静止，Camo 回到 100%，约 1.3 秒内 Alert 从 38% 降到 9%。 |
| C · 暂停 / Pause | 对照 Escape 和游戏画面内的暂停按钮。 | 这次对焦条件下按 Escape 后计时继续，点画面内的暂停按钮出现 PAUSED、RESUME 和 QUIT。重复查看时 SEEK 保持在 9。 |
| D · 耗尽生命 / Final life | 在 SEEK 中持续拖动，反复让角色暴露。 | 生命减到一颗后仍在 Round 1 进入 HIDE。最后一颗耗尽后出现 CAUGHT OUT，显示 SCORE 0、BEST 0、ROUNDS 1 和 PLAY。 |
| E · 结算与重开 / Result and replay | 结算页按 PLAY。新局静止过第一轮，第二轮持续移动直到耗尽生命。 | PLAY 回到 Round 1、Hide 3、0 分。下一局结算为 SCORE 100、BEST 100、ROUNDS 2、NEW BEST!。画面未给出 BEST 的记录范围。 |
| F · 最高结算 / Highest completed score | 前四轮保持静止。第五轮主动暴露，用完剩余生命以记录结算。 | 进第三轮 300 分。通过第四轮显示 +400、累计 1,000 分、三颗心。结算 SCORE 1000、BEST 1000、ROUNDS 5。实际通过前四轮，第五轮未通过。 |
| A/B · 回合差异 / Round comparison | 比较不同回合的开始和 SEEK 截图。 | Round 1 的开局截图可见一名搜寻者，Round 4 的开局截图可见三名。色块布局和发光点位置也有变化。首轮 SEEK 的采样读数包括 13、12、11 和 10。 |

在 Alert 上升的同一次捕捉中，文本读取为 48%，稍后的截图显示 49%。引用图片时以截图为准。

## 截图索引 / Screenshot index

| 图 | 观察点 |
| --- | --- |
| [01 · Round 1 开局](../assets/r2/images/mottle-game-round-1-hide-countdown.webp) | HIDE 3、0 分、三颗心 |
| [02 · 首轮存活](../assets/r2/images/mottle-game-round-1-survival-score-100.webp) | Round 2、100 分、三颗心 |
| [03 · Round 4](../assets/r2/images/mottle-game-round-4-three-seekers-score-600.webp) | 600 分、三颗心、三名搜寻者 |
| [04 · 警戒上升](../assets/r2/images/mottle-game-alert-meter-49-percent.webp) | 红色警戒反馈、Alert 49% |
| [05 · 扣命](../assets/r2/images/mottle-game-spotted-life-lost.webp) | SPOTTED 文案与两颗心 |
| [06 · 拖动](../assets/r2/images/mottle-game-chameleon-moving-camo-zero.webp) | 角色在右侧显橙色，Camo 0% |
| [07 · 静止](../assets/r2/images/mottle-game-chameleon-hidden-camo-100.webp) | 角色颜色接近脚下色块，Camo 100% |
| [08 · 收集前](../assets/r2/images/mottle-game-firefly-before-pickup.webp) | 同一轮 0 分、画面上方绿色色块的萤火虫 |
| [09 · 收集后](../assets/r2/images/mottle-game-firefly-after-pickup-score-10.webp) | 10 分、角色身旁的收集特效 |
| [10 · 暂停](../assets/r2/images/mottle-game-pause-menu.webp) | PAUSED、RESUME 和 QUIT |
| [11 · 结算](../assets/r2/images/mottle-game-caught-out-score-zero.webp) | 无剩余生命，CAUGHT OUT |
| [12 · 再次暴露](../assets/r2/images/mottle-game-searchlight-alert-86-percent.webp) | 两颗心、Alert 86%、Camo 0% |
| [13 · 同轮重试](../assets/r2/images/mottle-game-round-retry-one-life.webp) | 一颗心、Round 1、Hide 3 |
| [14 · 100 分结算](../assets/r2/images/mottle-game-new-best-score-100.webp) | SCORE 100、BEST 100、ROUNDS 2 和 NEW BEST! |
| [15 · 第三轮开局](../assets/r2/images/mottle-game-round-3-score-300.webp) | 300 分、三颗心、两名可见的搜寻者 |
| [16 · 第四轮通关](../assets/r2/images/mottle-game-round-4-clear-score-1000.webp) | 通关奖励 +400、总分 1,000、三颗心 |
| [17 · 1,000 分结算](../assets/r2/images/mottle-game-final-score-1000-round-5.webp) | 本次最高结算，ROUNDS 5 |

## 玩法分析 / Design interpretation

静止基线说明至少在本次的早期回合，守住生命同样积累分数。主动冲分时先看光束走向，再估计来回路线。身边的萤火虫有干净路线才值得拿，松手让 Camo 回升，并为下一次移动保留空间。警戒在本次测试中是逐步累积的。灯光变红和感叹号给了玩家一次重新判断的机会。

游戏只要求一个主要手势，决策集中在起步方向和松手时机。可见光锥让风险来自画面上能读到的运动，Camo 和 Alert 则分别显示隐蔽和暴露的反馈。搜寻者变多会减少可安全移动的时间，这一解释是对画面行为的分析。截图无法确定敌人寻路代码、检测距离公式、警戒衰减速率或全球最高分。

Start with a stationary run and record your round, hearts and score. In the next run, take a nearby firefly when its approach and stopping point are clear. Compare the scores at the same round. Our best completed test scored 1,000. The game did not display a global ranking.

截图中游戏画面归 Star Lord 及相应权利人。本站原创代码许可见 [LICENSE](../LICENSE)。
