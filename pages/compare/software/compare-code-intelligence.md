---
title: compare-code-intelligence
description: AI 代码知识图谱工具选型：GitNexus / CodeGraph / Graphify / codebase-memory-mcp
date: 2026-09-08
draft: true
author: JackyLee
tags:
  - ai
  - 选型
  - mcp
categories:
  - 命令行
comment: true
---

[[gitnexus]]
[[codegraph]]
[[graphify]]
[[codebase-memory-mcp]]
[[deepwiki]]

## 概览对比

| 维度 | GitNexus | CodeGraph | Graphify | codebase-memory-mcp |
|------|----------|-----------|----------|---------------------|
| 定位 | 零服务器代码智能引擎 | AI 代理的预索引"代码地图" | 多模态知识图谱 Skill | 高性能 MCP 服务器 |
| 语言/实现 | TypeScript | TypeScript | Python (PyPI: graphifyy) | C（单静态二进制） |
| 形态 | 网页版 + CLI + MCP | CLI + MCP 插件/Skill | AI 助手 Skill + MCP Server | 纯 MCP Server |
| 运行环境 | 浏览器 / Node.js 18+ | Node.js | Python 3.10+ | 无（零依赖二进制） |
| 依赖外部服务 | 无（Claude 用于 RAG 问答） | 无 | Claude（第二轮多模态提取） | 无 |
| 图谱存储 | 项目内 .gitnexus/ + 全局注册表 | 本地索引，自动同步变更 | graphify-out/graph.json (NetworkX) | 内存 SQLite + LZ4 压缩 |
| 可视化 | 交互式图谱 + serve 命令 | 交互式 HTML 查看器 | graph.html 可交互图谱 + 审计报告 | 无 |
| 查询入口 | Graph RAG 问答 / impact / trace | codegraph_explore 单调用 | /graphify 命令 + 图查询 | MCP 图查询（亚毫秒） |
| 多模态输入 | 仓库链接、ZIP | 代码库 | 代码、SQL、PDF、截图、白板照片、视频 | 代码库 |
| 聚类/算法 | 预计算调用链 + 置信度评分 | 依赖图 + 混合语义搜索 | Leiden 社区发现（无向量库） | Tree-Sitter AST + 混合 LSP |
| 语言支持 | 主流语言 | 多语言（含 Vue template） | 多语言 AST | 158 种语言内置 |
| 增量更新 | analyze 重建 | 自动监听同步 | --update + Git 钩子 | 增量解析 + watcher |
| 边来源标注 | 置信度分数 | 调用关系 | EXTRACTED / INFERRED / AMBIGUOUS | 调用关系 |
| 隐私 | 代码不出本机（RAG 问答除外） | 100% 本地 | 本地 + Claude API 调用 | 100% 本地 |

## 场景推荐

- **接手陌生私有代码库，想先看图谱再问答** → GitNexus：网页版拖入链接/ZIP 即用，零部署成本；注意 Graph RAG 问答需要 Claude。
- **日常用 Claude Code / Cursor 开发，要省 Token、少打断** → CodeGraph：预索引 + 自动同步，`codegraph_explore` 单次调用替代多轮文件扫描，主打代理工作流效率。
- **要理解的不只是代码，还有设计文档、论文、架构截图** → Graphify：唯一多模态方案，Leiden 社区聚类找"隐藏关联"，边来源标注让 AI 推断可信度透明。
- **超大仓库 / 追求极致性能 / 环境依赖洁癖** → codebase-memory-mcp：单二进制零依赖，毫秒级索引、亚毫秒查询，158 种语言内置。
- **代码需上传云端、团队共享问答** → [[deepwiki]]：托管式服务，与上面四个本地优先方案隐私模型相反。

## 决策树

```text
需要理解的对象只有代码吗？
├─ 否（还有 PDF/截图/白板/文档）→ Graphify
└─ 是
   ├─ 想在浏览器交互式探索 + 自然语言问答？
   │  ├─ 是，且不愿本地部署 → GitNexus（网页版）
   │  └─ 是，且代码必须完全不出本机 → GitNexus CLI 或 CodeGraph
   ├─ 主要给 AI 编辑器（Claude Code/Cursor）当上下文引擎？
   │  ├─ 仓库很大 / 要最快索引 → codebase-memory-mcp
   │  └─ 要自动同步 + 单调用探索 → CodeGraph
   └─ 只求一个能跑的最小方案 → codebase-memory-mcp（单二进制）
```

## 参考资料

- [GitHub - abhigyanpatwari/GitNexus: The Zero-Server Code Intelligence Engine](https://github.com/abhigyanpatwari/GitNexus) #todo
- [GitHub - colbymchenry/codegraph: Pre-indexed code knowledge graph, auto syncs on code changes](https://github.com/colbymchenry/codegraph) #todo
- [GitHub - Graphify-Labs/graphify: Turn any codebase into a queryable knowledge graph](https://github.com/safishamsi/graphify) #todo
- [GitHub - DeusData/codebase-memory-mcp: High-performance code intelligence MCP server](https://github.com/DeusData/codebase-memory-mcp) #todo
- [CodeGraph 深度解析：为 AI 编程代理构建预索引代码知识图谱 - CSDN](https://blog.csdn.net/yanceyxin/article/details/161753198) #todo
- [Graphify 简明指南 - 腾讯云开发者社区](https://cloud.tencent.com/developer/article/2657245) #todo
- [GitHub 20K 星标：热门 AI 项目技术分析 codebase-memory-mcp - 知乎](https://zhuanlan.zhihu.com/p/2054933778477356820) #todo
- [GitNexus 实测：拖入 GitHub 链接秒出代码知识图谱 - CSDN](https://blog.csdn.net/u014354882/article/details/159926401) #todo
