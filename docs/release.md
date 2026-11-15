# 发布与验收

生产域名为 `https://mottlegame.cc`，图片资源域名为 `https://assets.mottlegame.cc`，站点使用 Astro 静态输出。公开 GitHub 仓库使用站点源码、双语教程、发布说明和页面引用的实玩证据。原游戏仍由原发布方提供。

## 1. GitHub

首次发布前运行 `npm ci`、`npm run build` 和 `npm run preview`，确认英文和中文页面可以打开。检查暂存清单，保留源码、锁文件、原创美术、教程和与正文对应的实玩证据。工作文件如竞品调研截图、浏览器运行日志、本地视觉评审截图和试验稿留在本地。发布前检查有无环境变量文件、个人资料、Cookie 或登录截图进入暂存区。

```sh
git status --short
git diff --cached --name-only
git diff --cached --stat
gh auth status
```

完成第一次源码提交后，从项目目录创建公开仓库。以下命令用于 `kesiondu/mottlegame` 尚未存在的首次发布。此后沿用已有远程仓库与常规推送。[GitHub CLI 文档](https://cli.github.com/manual/gh_repo_create)

```sh
gh repo create kesiondu/mottlegame --public --source=. --remote=origin --push \
  --homepage https://mottlegame.cc/ \
  --description "Independent bilingual walkthrough for Mottle — Hide & Seek"
```

## 2. Cloudflare Pages

对于 Git 集成发布，在 Cloudflare Dashboard 的 **Workers & Pages** 创建 Pages 项目，导入 GitHub 仓库。将 Cloudflare GitHub App 的仓库访问范围限定为本项目。设置生产分支 `main`，构建命令 `npm run build`，输出目录 `dist`。构建节点使用满足项目 `package.json` 的 Node.js LTS。若站点构建启用 GitHub 链接，设置构建变量 `PUBLIC_REPOSITORY_URL=https://github.com/kesiondu/mottlegame`。[Astro 的 Pages 部署文档](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

若使用一次性静态上传，在 **Workers & Pages → Pages → Drag and drop** 上传已构建的 `dist` 目录或其内容的 ZIP。为后续自动发布保留 Git 集成时，应创建 Git 集成项目。[Cloudflare Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)

在项目 **Custom domains** 绑定 `mottlegame.cc`。根域名须处于同一 Cloudflare 账号下的有效区。等待 Cloudflare 的状态变为 Active 后验收 HTTPS。使用 Cloudflare 重定向规则把 `https://www.mottlegame.cc/*` 永久跳转到根域名对应路径，保留查询参数。验证生产站后，再把可访问的生产 `pages.dev` 入口重定向到正式域名。各语言页在自身 URL 上输出 canonical。[Pages 自定义域名](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Cloudflare 单条重定向](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/)

## 3. 生产验收

| 检查 | 预期 |
| --- | --- |
| `/` 与 `/zh/` | 返回 200，初始 HTML 含对应语言的首页正文与站内链接 |
| `/play-guide/` 与 `/zh/play-guide/` | 返回 200，双语攻略、截图图注、实测和推测可阅读 |
| 隐私、条款和联系 | 两种语言从各自页脚打开，正文内容与实际站点功能一致 |
| `hreflang` | 英文页与中文页双向引用，`x-default` 指向英文对应页 |
| canonical、robots、sitemap | 使用正式生产域；站点地图只包含规范、可索引的 200 页面，并通过图片扩展列出 24 个 R2 图片资源 |
| `llms.txt` | 描述玩家可见页面与原始来源，数值与教程一致 |
| `/does-not-exist` | 返回 404，并有返回首页的链接 |
| 播放器 | 点击 Play 前页面没有游戏 iframe，点击后可进入原作，失败时保留重试和原站链接 |
| 原作截图 | 截图与同局记录对应，图注能指出画面证明了什么 |
| R2 图片 | 图片从 `assets.mottlegame.cc/images/` 返回 200，文件名为描述性的 `mottle-game-*`，类型与缓存头正确 |
| 社交预览 | 标题、描述、图片和分享链接指向生产页 |

在 Google Search Console 使用 DNS 完成 `mottlegame.cc` Domain Property 验证，确保验证范围覆盖图片子域 `assets.mottlegame.cc`，然后提交 `https://mottlegame.cc/sitemap.xml`。再用 URL 检查工具查看两个首页和两个攻略页。记录提交日期和索引状态，随后跟踪表现。[Google Sitemap 文档](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) · [Google 图片 Sitemap 文档](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps) · [Google 本地化页面规则](https://developers.google.com/search/docs/specialty/international/localized-versions)
