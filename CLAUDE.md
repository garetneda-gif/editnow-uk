# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

"四色香屯"文旅品牌网站 — 北京延庆区大庄科乡香屯村的长城文化与乡村振兴展示平台。参加"青振京郊"乡村振兴专项赛（项目编号17）。

**线上地址：** https://stitch.editnow.uk

## 部署

```bash
# 部署到 Cloudflare Pages（每次改完代码执行）
CLOUDFLARE_API_TOKEN=$CF_TOKEN npx wrangler pages deploy . --project-name stitch --commit-dirty=true
```

凭据存储在 shell 环境中（见 ~/.zshrc 或密钥管理器），不要硬编码到代码里：
- `CF_TOKEN` — Cloudflare API Token
- `GH_PAT` — GitHub Personal Access Token
- GitHub 仓库：`garetneda-gif/editnow-uk`
- Cloudflare Pages 项目名：`stitch`
- Cloudflare Worker 项目名：`xiangtun-chat`
- DNS：CNAME `stitch` → `stitch-128.pages.dev`

## 架构

纯静态多页 HTML 网站，无构建工具。

```
index.html                    # 首页（品牌展示 + 路线导览卡 + 交互地图）
routes/
  red-study.html              # 红色研学路线
  green-ecology.html          # 绿色生态路线
  grey-greatwall.html         # 灰色长城路线
about/
  history.html                # 香屯故事（时间轴 + 四色文化 + 村庄现状）
js/
  chat-knowledge.js           # AI导游"香屯小卒"结构化知识库
worker.js                     # Cloudflare Worker — LLM API 代理（独立部署）
DESIGN.md                     # 设计系统文档（Heritage Modernist 风格）
```

### 技术栈

- **样式：** Tailwind CSS CDN（运行时编译，无构建）
- **字体：** Google Fonts — Newsreader (serif, 标题) + Manrope (sans-serif, 正文)
- **图标：** Material Symbols Outlined (Google Fonts CDN)
- **地图：** Leaflet.js + 高德卫星图瓦片
- **Live2D：** oh-my-live2d CDN
- **AI 聊天：** DeepSeek API，通过 Cloudflare Worker 代理

### AI 聊天链路

```
前端 chat widget (index.html)
  → POST https://xiangtun-chat.garetneda.workers.dev/api/chat
    → Cloudflare Worker (worker.js)
      → DeepSeek API (env: LLM_API_KEY, LLM_API_URL)
```

Worker 环境变量在 Cloudflare Dashboard → Workers → xiangtun-chat → Settings → Variables 配置。

## 设计规范

遵循 DESIGN.md 中的 Heritage Modernist 风格：

- **色彩：** primary #851217（传承红）、secondary #3b6934（远山绿）、tertiary #593d00（板栗金）、on-surface #1b1c1c（玄石墨）
- **禁止** 1px 边框分割内容，用背景色差分层
- **禁止** 纯黑 #000000，统一用 #1b1c1c
- **布局：** 不对称编辑式排版，大量留白
- **阴影：** 24-32px blur、4% opacity 环境光，禁止纯黑阴影
- 每个页面需要 `paper-texture` 背景和 `silk-overlay` 效果

## 内容原则

- **这是比赛项目，不是商业网站** — 禁止购物车、价格、商城等商业化元素
- AI 导游名为"香屯小卒"，人设是热情的延庆本地年轻人
- 所有历史内容基于真实调研资料（docx 原始材料在项目背景中）
- 知识库数据在 `js/chat-knowledge.js` 中维护

## 页面间共享

无构建工具，每个页面独立包含完整的 `<head>`（Tailwind config、fonts、icons）、导航栏和 footer。修改导航或 footer 时需要同步更新所有 5 个 HTML 文件。Tailwind config 中的颜色定义在每个文件的 `<script id="tailwind-config">` 中重复。
