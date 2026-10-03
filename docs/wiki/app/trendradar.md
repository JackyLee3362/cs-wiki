---
title: TrendRadar
description: 聚合热点与 RSS，按关键词筛选并生成通知或 AI 简报。
date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - 信息聚合
---

TrendRadar（`sansan0/TrendRadar`）汇集平台热点与 RSS，按关键词筛选、去重并推送；AI 分析与 MCP 是按需配置的附加能力。它适合追踪选定主题，不能代替对原始新闻来源的核对。

## 本地体验

已安装 `git` 和 `uv` 时，按项目 README 的本地运行方式：

```sh
git clone https://github.com/sansan0/TrendRadar.git
cd TrendRadar
uv sync
uv run python -m trendradar
```

运行前编辑 `config/config.yaml` 和 `config/frequency_words.txt`，设置数据源、关注词与所需通知渠道；API 密钥及 Webhook 地址只放在私有配置或环境变量中。以上命令未在本地执行；Docker、定时采集与输出目录以当前上游文档为准。

## 参考资料

- [GitHub 仓库与官方说明](https://github.com/sansan0/TrendRadar)
- [英文说明](https://github.com/sansan0/TrendRadar/blob/master/README-EN.md)
- [uv](docs/wiki/app/uv.md)
- [工具资料采集与 AI 报告流水线](docs/solution/tool-research-pipeline.md)
