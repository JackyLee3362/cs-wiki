---
title: Graphify
description: 将代码、文档、SQL、图片等多模态素材转为可查询知识图谱的 AI 技能
date: 2026-09-08
draft: true
author: JackyLee
tags:
  - ai
  - 代码分析
  - 知识图谱
  - rag
categories:
  - 命令行
comment: true
---

## 概述

[Graphify](https://github.com/safishamsi/graphify)（Graphify-Labs，Python，约 6 万 star）是一个 **AI 编程助手技能（Skill）**：在 Claude Code、Codex、OpenCode、OpenClaw、Factory Droid、Trae 中输入 `/graphify .`，它会把当前目录的代码、文档、SQL Schema、配置、PDF、截图、白板照片乃至视频统一转为一张可查询的知识图谱，并声称每次查询的 Token 消耗最高可降低 71.5 倍，结果跨会话持久保存。

与同类工具最大的差异点是**多模态**：截图里的架构图、PDF 中的论文图表、白板照片都能通过 Claude Vision 提取概念和关系，融入同一张图。

## 工作原理

两轮执行：

1. **第一轮（确定性，无需 LLM）**：用 tree-sitter 对代码做 AST 提取——类、函数、导入、调用图、docstring、解释性注释。
2. **第二轮（Claude 子代理并行）**：处理文档、论文和图片，提取概念、关系和设计动机。

最后合并到 NetworkX 图，用 **Leiden 社区发现算法**按图拓扑聚类（不依赖 embeddings、不需要向量数据库——Claude 抽取的 `semantically_similar_to` 边本身就存在于图中，会直接影响社区划分）。

每条关系都有来源标注，明确区分「发现」与「推断」：

| 标注 | 含义 |
|------|------|
| EXTRACTED | 直接在源材料中找到 |
| INFERRED | 合理推断，附带置信度分数 |
| AMBIGUOUS | 有歧义，需要人工复核 |

## 输出产物

```
graphify-out/
├── graph.html       可交互图谱：点节点、搜索、按社区过滤
├── GRAPH_REPORT.md  审计报告：God nodes、意外连接、建议提问
├── graph.json       持久化图谱：数周后仍可查询，无需重读原始文件
└── cache/           SHA256 缓存：重复运行只处理变更过的文件
```

## 安装与使用

要求 Python 3.10+。注意 PyPI 包名是 `graphifyy`（两个 y，原名尚在回收中）：

```sh
pip install graphifyy

# Claude Code
graphify install
# Codex
graphify install --platform codex
# Cursor
graphify cursor install
# OpenCode / OpenClaw / Factory Droid 同理
```

日常使用：

```sh
/graphify .        # 对任意目录建图（代码库、笔记、论文都可以）
graphify --update  # 增量刷新，只处理变更文件
```

切换分支或提交代码时，Git 钩子可自动触发图谱更新。还提供 MCP Server（支持 Streamable HTTP transport），可给更多客户端复用图谱。

## 参考资料

- [GitHub - Graphify-Labs/graphify: Turn any codebase into a queryable knowledge graph](https://github.com/safishamsi/graphify)
- [Graphify 简明指南 - 腾讯云开发者社区](https://cloud.tencent.com/developer/article/2657245)
- 相关笔记：[[gitnexus]]、[[codegraph]]、[[codebase-memory-mcp]]
