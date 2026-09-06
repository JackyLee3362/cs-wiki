---
title: Browser Plugin Comparison
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 浏览器
  - 插件
  - 选型
categories:
  - 应用软件
comment: true
---

## 插件概览

| 插件 | 功能类别 | 价格 | 平台 | 核心特点 |
|:---|:---|:---:|:---|:---|
| uBlock Origin | 广告拦截 | 免费 | 全平台 | 最高效的广告和跟踪拦截，资源占用极低 |
| [[tampermonkey]] | 脚本管理 | 免费 | 全平台 | 支持用户脚本（油猴），功能扩展无限 |
| Bitwarden | 密码管理 | 免费+增值 | 全平台 | 开源密码管理器，跨平台同步 |
| 1Password | 密码管理 | 订阅制 | 全平台 | 界面精美，家庭共享，旅行模式 |
| Dark Reader | 深色模式 | 免费+捐赠 | 全平台 | 为所有网站强制启用深色模式 |
| RSSHub Radar | RSS 订阅 | 免费 | 全平台 | 自动发现网页 RSS 源，一键订阅 |
| Sidekick | 侧边栏工具 | 免费 | Chromium | 聚合常用工具到浏览器侧边栏 |
| Evernote Web Clipper | 网页剪藏 | 免费+增值 | 全平台 | 保存网页到笔记，支持多种剪藏模式 |
| Obsidian Web Clipper | 网页剪藏 | 免费 | 全平台 | 保存网页到 Obsidian，支持自定义模板 |
| Infinity New Tab | 新标签页 | 免费+增值 | Chromium | 美化新标签页，支持自定义布局和壁纸 |
| Vimium / Vimium C | 键盘导航 | 免费 | 全平台 | Vim 风格键盘操作，无需鼠标浏览网页 |
| Surfingkeys | 键盘导航 | 免费 | 全平台 | 更强大的 Vim 模式，支持自定义配置 |

## 按场景推荐

### 必备安全与隐私

**uBlock Origin** 是首选广告拦截器，比 AdBlock Plus 更高效且不接受「可接受广告」。配合 **Bitwarden** 或 **1Password** 管理密码，避免浏览器自带密码管理器的平台锁定。

### 网页自动化与增强

**Tampermonkey** 是用户脚本的核心平台，配合 GreasyFork 上的海量脚本可实现：视频去广告、网盘直链下载、网页美化、自动签到等功能。

### 键盘优先操作

如果你是 Vim 用户，推荐 **Vimium C**（功能更丰富的 Vimium 分支）或 **Surfingkeys**。Surfingkeys 配置更灵活，Vimium C 更轻量稳定。详见 [[compare-browser-plugin-vim]]。

### 知识管理与剪藏

**Obsidian Web Clipper** 适合 Obsidian 用户，支持自定义 Markdown 模板；**Evernote Web Clipper** 适合传统笔记用户，剪藏格式保留最好。

### 视觉与体验优化

**Dark Reader** 为不支持深色模式的网站强制启用暗色主题；**Infinity New Tab** 将单调的新标签页替换为个性化仪表盘。
