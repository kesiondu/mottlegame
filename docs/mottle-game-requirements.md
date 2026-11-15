# Mottle Game 站点需求分析（mottlegame.cc）

日期：2026-11-15

## 1. 项目结论

`mottlegame.cc` 应定位为 **Mottle - Hide & Seek 的独立玩家指南与在线游玩入口**，而不是伪装成官方站点，也不应复制 `mottlegame.pro` 的文案、插画或品牌资产。

推荐产品结构是：

1. 首屏尽快说明游戏是什么，并提供显眼的「Play Mottle」入口。
2. 用户点击后才加载第三方游戏 iframe，降低首屏性能与隐私负担。
3. 游戏区下方提供极短的操作说明：拖动移动、松开伪装、收集萤火虫、躲避搜索光。
4. 通过玩法、规则、攻略、在线游玩、移动端和 FAQ 页面承接搜索流量。
5. 明确标注原作者 Star Lord、原始 8x.gg 页面以及本站的非官方性质。

首版不要做账号、排行榜、付费、评论、游戏下载或游戏文件镜像。站点的价值应来自更快的进入游戏、更清楚的教程、移动端体验和可信的内容，而不是功能堆叠。

## 2. 已分析的参考对象

### 2.1 原始游戏

- 作品页：https://www.8x.gg/apps/xPKXL5uurAzb6pAG
- 原始独立打开页：https://5qbwd96hq.8x.gg/
- 可嵌入游戏源：https://5qbwd96hq.clide.app/
- 创作者：Star Lord
- 类型：camouflage、hide-and-seek、stealth、arcade、survival、one-thumb

### 2.2 竞品站点

- https://mottlegame.pro/
- 站点是静态内容站，托管在 Cloudflare。
- 首页按需加载第三方游戏 iframe。
- 已覆盖英文、德文、波兰文、瑞典文、法文、罗马尼亚文和墨西哥西班牙文首页。
- 英文内容集群覆盖：游戏介绍、规则、在线游玩、玩法教程、技巧攻略、下载/移动端、FAQ、来源说明和隐私。

### 2.3 当前域名状态

本次检查中，`https://mottlegame.cc/` 没有在 20 秒内返回 HTTPS 响应。实现前应确认 DNS、Cloudflare Zone、证书和部署目标是否已经配置；当前结果只表示本次检查未连通，不等同于域名一定未注册或未配置。

## 3. 游戏机制拆解

### 3.1 核心循环

1. 玩家观察地图色块、萤火虫位置和 Seeker 的光锥轨迹。
2. 拖动角色移动；移动时角色颜色鲜艳、暴露度更高。
3. 松开输入后停止；角色逐渐匹配脚下色块，Camo 提升。
4. 玩家在风险窗口内收集萤火虫获得分数。
5. 被搜索光持续发现会提高 Alert；危险累积后损失生命。
6. 存活后进入更快、更难的下一轮。

### 3.2 HUD 与状态

- Score：总分。
- Lives：生命数。
- Round：当前轮次。
- Hide 倒计时：回合开始时给玩家寻找藏身点的时间。
- Alert：被发现风险。
- Camo：当前伪装完成度。
- Mute / Pause：声音与暂停。

### 3.3 体验价值

游戏的独特性不在复杂操作，而在一个非常清晰的风险交换：**移动才能得分，静止才能安全**。站点的所有文案、视觉和教程都应围绕这一句话展开。

## 4. 目标用户与用户任务

### 4.1 主要用户

- 从 Google/Bing 搜索 “mottle game”“play mottle game”“how to play mottle” 的玩家。
- 在手机上希望直接试玩、不想下载安装的用户。
- 已玩过但不理解 Alert、Camo、计分或躲避逻辑的用户。
- 搜索 APK、下载或类似名称游戏，需要辨别真伪的用户。

### 4.2 核心用户任务

- 10 秒内确认这是自己寻找的 Mottle 游戏。
- 一次点击开始加载游戏。
- 在桌面和手机上完成拖动与松开操作。
- 游戏无法加载时能打开原始站点继续玩。
- 在 1 分钟内理解基础玩法。
- 找到更深入的规则、技巧和常见问题。

## 5. 信息架构

### 5.1 MVP 必须页面

| 路径 | 页面目标 | 主要关键词/意图 |
| --- | --- | --- |
| `/` | 品牌首页、试玩入口、玩法概览 | mottle game, play mottle game |
| `/how-to-play/` | 控制、HUD、首局教程 | how to play mottle game |
| `/rules/` | 规则、得分、Camo、Alert、生命、轮次 | mottle game rules |
| `/tips/` | 路线、时机、伪装与生存策略 | mottle game tips |
| `/online/` | 在线游玩入口与加载故障处理 | mottle game online |
| `/faq/` | 高意图问题集合 | is mottle a game, mobile, download |
| `/about/` | 作者、来源、编辑原则、非官方声明 | source / attribution |
| `/privacy/` | 分析工具、第三方 iframe、外链说明 | privacy |

### 5.2 第二阶段页面

- `/mobile/`：手机/平板的触控与全屏指南。
- `/download/`：澄清浏览器游戏、8x 平台 App 与独立 APK 的区别。
- 多语言首页：优先根据 Search Console 数据，而不是一次性照搬竞品的全部语言。
- 更新日志或新闻：只有游戏确实持续更新时再做。

### 5.3 不建议首版建设

- 用户登录与个人中心。
- 自建排行榜或云存档。
- 论坛、评论系统或聊天室。
- APK、安装包或游戏源文件下载。
- 未经授权复制游戏素材、竞品插画或完整游戏文件。

## 6. 首页需求

### 6.1 顶部导航

- 左侧：`Mottle Game` 文字标识，可附小字 `Hide & Seek`。
- 导航：Play、How to Play、Rules、Tips、FAQ。
- 右侧：语言选择（MVP 可仅 English；中文可作为编辑/后台辅助，不建议把中文设为英文关键词站默认语言）。
- 移动端收纳为可访问的菜单按钮。

### 6.2 Hero

- H1 建议：`Mottle Game — Hide in Plain Sight`
- 一句话价值：`Move for the fireflies. Stop to blend. Stay out of the light.`
- 主 CTA：`Play Mottle`
- 次 CTA：`How to Play`
- 显示非官方性质或来源提示，但不要压过主要行动。

### 6.3 游戏播放器

初始状态：

- 展示原创站点自己的海报或轻量预览图，不能直接复制竞品插画。
- 有清晰的 `Play Mottle` 按钮。
- 显示 `Loads the original game from a third-party host` 提示。
- iframe 未点击前不得加载。

加载状态：

- 按钮禁用，显示 loading 状态。
- 8–12 秒超时后显示重试按钮。
- 同时提供 `Open original game` 外链。

运行状态：

- iframe 源使用 `https://5qbwd96hq.clide.app/`，而不是将 `https://5qbwd96hq.8x.gg/` 作为 iframe。后者的响应头限制了允许嵌入的父站点。
- iframe 建议 `title="Mottle - Hide & Seek by Star Lord, interactive game"`。
- `allow="autoplay; fullscreen"`，并提供 `allowfullscreen`。
- 提供 Restart、Expand/Fullscreen、Open original。
- 桌面保持接近游戏原始比例；手机提供展开式沉浸视图，并保留关闭按钮。

播放器下方固定展示：

- Drag to move.
- Release to camouflage.
- Collect fireflies.
- Avoid the Seeker lights.

### 6.4 教程与内容区

建议首页仅保留能帮助决策的精简模块：

1. 三步玩法：移动、伪装、生存。
2. HUD 解释：Alert 与 Camo。
3. 移动端说明。
4. 两到三条实用技巧。
5. 内容卡片：How to Play、Rules、Tips。
6. FAQ 摘要（6–8 个问题）。
7. 来源、作者和非官方声明。

不要像竞品一样在首页堆叠大量语义重复段落。更短的首页可以改善阅读、品牌辨识和转化；长尾内容由独立页面承接。

## 7. 功能需求

### 7.1 游戏加载

- 点击用户主动触发后创建 iframe。
- 重复点击不会创建多个 iframe。
- Restart 会销毁旧 iframe 并创建新实例。
- 加载失败、超时、跨域被阻止时显示可理解的错误文案。
- 无论 iframe 是否成功，都能访问原始 8x.gg 作品页和独立游戏页。
- 不尝试读取跨域游戏分数、生命或内部状态。

### 7.2 响应式

- 桌面：游戏区优先，可在首屏或首屏下方完整看到。
- 平板：保留宽屏比例，控制栏可换行。
- 手机：海报和游戏不能横向溢出；点击 Play 后自动进入扩展视图可作为可选增强。
- 触摸操作区不得被页面滚动、悬浮导航或手势层抢占。

### 7.3 可访问性

- 提供 Skip to content。
- 所有图标按钮有可读名称。
- 键盘可访问 Play、Restart、Fullscreen、Open original、菜单和 FAQ。
- 焦点样式清楚；弹出的移动端游戏层需要焦点圈定并支持 Escape 关闭。
- 正文和按钮达到可读对比度。
- 动画尊重 `prefers-reduced-motion`。
- iframe 有明确 title；无法为跨域游戏本体声明完整 WCAG 合规。

### 7.4 分析事件

建议只采集匿名产品事件：

- `play_click`
- `game_loaded`
- `game_load_timeout`
- `game_retry`
- `open_original`
- `fullscreen_click`
- `guide_click`
- `faq_expand`

不得宣称能追踪跨域游戏内部的分数或回合，除非未来获得游戏方提供的正式接口。

## 8. 内容与 SEO 需求

### 8.1 页面级 SEO

- 每页唯一 title、meta description、canonical 和单一 H1。
- Open Graph / Twitter Card 使用本站原创社交分享图。
- `robots.txt` 指向 `https://mottlegame.cc/sitemap.xml`。
- sitemap 只包含可索引的正式页面。
- 404 页面返回真实 404 状态并 `noindex, follow`。
- 多语言上线时使用完整的 `hreflang` 互链和 `x-default`。

### 8.2 结构化数据

- `WebSite`
- `Organization` 或 `Person`（按实际站点运营主体）
- `WebPage`
- `VideoGame`：作者指向 Star Lord，游戏 URL 指向原始 8x.gg 页面。
- FAQ 页面只有在问题与答案真实可见时使用 `FAQPage`。
- Breadcrumb 页面可使用 `BreadcrumbList`。

### 8.3 内容原则

- 游戏事实来自原始作品页或实际试玩。
- 攻略建议标明是编辑建议，不伪装成开发者声明。
- 不使用“Official”“官方下载”等可能误导的表述。
- “Download”内容必须明确：当前验证到的是浏览器游戏和 8x 平台入口，不应把平台 App 描述成独立 Mottle APK。
- 避免复制竞品段落；所有页面重新组织并原创表达。
- 可增加 `llms.txt`，但它是补充，不替代 sitemap、结构化数据和正常页面内容。

## 9. 品牌与视觉方向

建议保留游戏的气质，但建立独立视觉语言：

- 主色：深森林绿或近黑绿色。
- 强调色：萤火虫暖黄 + 玩家珊瑚橙；主要按钮可使用薄荷绿。
- 图形母题：不规则色块、半透明搜索光锥、微弱萤火光点。
- 字体：标题有圆润、友好、略带游戏感；正文保持高可读性。
- 视觉关键词：安静、隐蔽、紧张、克制，不做霓虹电竞风。

必须原创：Logo、海报、社交分享图、教程示意图和装饰背景。可以引用实际游戏截图用于评论/教程，但应控制范围、标注来源，并在上线前确认使用依据。

## 10. 法务与信任要求

- 页脚和 About 页面明确：独立玩家指南；不隶属于 Star Lord 或 8x.gg。
- 标注游戏名称、作者和原始链接。
- 上线前检查 8x.gg/游戏托管方条款是否允许第三方 iframe 与截图使用。
- 不代理、重打包、修改或分发游戏文件。
- 不使用竞品的 Logo、插画、文案、CSS 或设计资产。
- Privacy 说明第三方 iframe 在点击 Play 后会连接 `clide.app`/相关游戏服务。
- 如果使用 GA、广告或其他追踪，应按目标地区要求提供同意机制。

## 11. 推荐技术方案

由于当前工作区还没有应用代码，MVP 可以采用静态优先架构：

- 前端：Astro 或支持静态输出的 React/TanStack 方案。
- 内容：Markdown/MDX 或类型化内容集合。
- 样式：原生 CSS + 设计 token，避免为小站引入过重 UI 框架。
- 部署：Cloudflare Pages/Workers 或同类静态托管。
- 图片：WebP/AVIF，多尺寸 `srcset`。
- 字体：本地托管 WOFF2，限制字重。
- 分析：Cloudflare Web Analytics 或合规配置后的 GA4。

建议设置严格 CSP，至少包括：

- `default-src 'self'`
- `frame-src https://5qbwd96hq.clide.app`
- `object-src 'none'`
- `base-uri 'self'`
- `frame-ancestors 'self'`
- 根据实际分析服务补充 `script-src`、`connect-src` 和 `img-src`

## 12. MVP 验收标准

### 产品

- 用户在桌面与手机上都能找到并触发 Play。
- 点击前没有游戏 iframe 网络请求；点击后才加载。
- 游戏成功加载后可点击画布开始回合。
- iframe 失败时可重试，也可打开原始游戏。
- 首页可在 60 秒内让新用户理解核心玩法。

### 内容

- 8 个 MVP 页面全部有原创内容、唯一元数据和正确内部链接。
- 所有游戏事实都能追溯到原始作品页或实际试玩。
- 作者与非官方声明在 About 和页脚清晰可见。

### 质量

- 360px 宽度无横向滚动。
- 键盘可完成导航、开始加载、重试和打开原始站点。
- 真实 404、robots.txt、sitemap.xml、canonical 和结构化数据可验证。
- 首屏不因游戏 iframe 阻塞加载。
- Lighthouse 目标：Performance ≥ 90、Accessibility ≥ 90、Best Practices ≥ 90、SEO ≥ 95（以无第三方游戏 iframe 的初始状态测试）。

## 13. 实施优先级

### P0：可上线 MVP

- 视觉系统与原创 Logo/海报。
- 首页与按需加载播放器。
- How to Play、Rules、Tips、Online、FAQ、About、Privacy。
- 响应式、可访问性、错误状态。
- 基础 SEO、结构化数据、sitemap、robots、404。
- 域名、HTTPS、部署和基础分析。

### P1：上线后优化

- 根据真实搜索数据补充语言版本。
- 更细的移动端全屏体验。
- 原创交互式 Camo/Alert 教程。
- 搜索性能与内容更新流程。

### P2：仅在数据证明需要时

- 更多语言与更长的内容集群。
- PWA 安装能力。
- 与创作者合作后的官方数据或排行榜接口。

## 14. 主要风险与待确认项

1. **嵌入授权**：技术上 `clide.app` 当前可被第三方 iframe 引用，但技术可行不等于拥有永久授权。
2. **源地址变动**：游戏托管域名或入口参数可能变化，需要可配置而不是硬编码到多个页面。
3. **商标与混淆**：域名与游戏名高度一致，必须持续明确“非官方指南”。
4. **第三方可用性**：游戏加载速度、跨域策略和停服不受本站控制。
5. **内容同质化**：照搬竞品信息架构容易形成低差异站点；应以更短首页、更好的教程和更强移动体验形成差异。
6. **域名部署**：`mottlegame.cc` 当前连通性需要单独处理。

## 15. 建议的产品差异点

与 `mottlegame.pro` 相比，`mottlegame.cc` 应优先做三件更好的事：

1. **更快进入游戏**：首屏一屏内看到 Play，点击后稳定加载，错误恢复清晰。
2. **更好的首次教程**：用一张原创交互示意清楚解释“移动暴露 / 静止伪装 / Alert / Camo”。
3. **更好的手机体验**：点击 Play 后进入专注模式，控制页面滚动，明确退出和恢复方式。

这样站点既能满足搜索意图，也有真实的产品价值，而不是竞品内容的另一份副本。
