---
title: World Monitor
description: 聚合新闻、地缘事件与基础设施信号的全球态势看板。
date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - 信息聚合
---

World Monitor（`koala73/worldmonitor`）把新闻、地图图层、地缘事件与基础设施信号放在同一看板，并提供 AI 摘要。它是聚合与分析界面，不应将自动摘要视为已独立核实的事实。

## 本地体验

按项目 README 的开发方式启动；需要 Node.js 与 npm，部分数据源需另配凭据：

```sh
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor
npm install
npm run dev
```

访问 `http://localhost:3000/`。上面是上游给出的操作步骤，本文未在本地执行；长期部署使用上游自托管文档，并核对数据源、凭据和缓存设置。不要把 `.env.local` 或密钥提交到仓库。

## 参考资料

- [官网](https://worldmonitor.app/)
- [GitHub 仓库](https://github.com/koala73/worldmonitor)
- [项目文档](https://www.worldmonitor.app/docs)
- [工具资料采集与 AI 报告流水线](docs/solution/tool-research-pipeline.md)
