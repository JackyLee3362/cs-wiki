---
title: 工具资料采集与 AI 报告流水线
description: 把官网、文档和仓库资料转为可追溯的工具记录与报告。
date: 2026-10-03
draft: false
author: JackyLee
tags:
  - 工具
  - 数据采集
  - ai
---

目标是维护工具数据库并生成有来源的报告；网页快照是证据，不直接作为已核实的工具事实。旧 `cache/` 不参与新流水线。

## 最短流程

1. 为每个工具建立稳定 ID，登记官网、官方文档、GitHub 仓库及允许采集的 URL。先用公开 API、RSS、站点地图；抓取前检查 `robots.txt` 和站点条款，设置每站请求间隔与失败退避，不采集登录后或含个人信息的页面。
2. 按 URL 保存原始响应或 HTML 快照，并记录抓取时间、状态码、ETag、Last-Modified、内容哈希。重新抓取时用条件请求；未变化则沿用旧快照。快照保存在私有对象存储或独立目录，不写入现有 `cache/` 或公开站点。
3. 用 Trafilatura 从 HTML 提取正文与链接；只有普通请求拿不到内容时才考虑 Playwright 渲染。对正文规范化、去重，保留原 URL、快照 ID、提取器版本和语言。
4. 将可查询字段写入数据库：`tools`（名称、分类、平台、许可证）、`tool_translations`（语言、名称、简介）、`sources`（URL、类型、抓取时间、哈希）、`facts`（字段、值、来源快照、核实状态）。原始网页与结构化事实分开存储。
5. AI 只根据本次选定的来源快照提取事实和生成报告。每项结论附来源 URL、快照时间和证据片段；缺证据写“未核实”，冲突信息交人工复核。报告记录模型、提示词版本、输入快照 ID 与生成时间，来源更新后才重新生成。

先选 20–30 个工具验证字段、去重和报告质量，再扩充站点；抓取成功、正文提取成功与事实核实是三个不同状态。对外展示摘要和来源链接，不把缓存的整篇第三方网页公开发布。

## 参考资料

- [Robots Exclusion Protocol（RFC 9309）](https://www.rfc-editor.org/rfc/rfc9309.html)
- [Trafilatura：Python 正文提取](https://trafilatura.readthedocs.io/en/latest/usage-python.html)
- [Scrapy：下载缓存与爬取设置](https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware)
- [Playwright：浏览器网络功能](https://playwright.dev/python/docs/network)
