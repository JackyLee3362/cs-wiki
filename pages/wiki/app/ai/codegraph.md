---
title: CodeGraph
description: 为 AI 编程代理预索引代码知识图谱，自动同步代码变更
date: 2026-09-08
draft: true
author: JackyLee
tags:
  - ai
  - 代码分析
  - 知识图谱
  - mcp
categories:
  - 命令行
comment: true
---

## 概述

[CodeGraph](https://github.com/colbymchenry/codegraph) 是由 Colby McHenry 开发的开源工具（TypeScript，MIT 协议），核心定位是**为 AI 编程代理准备的"代码地图"**：预先将整个代码库构建为可查询的知识图谱，自动同步代码变更，让 Claude Code、Codex、Gemini、Cursor、OpenCode、Antigravity、Kiro、Copilot、Hermes Agent 等代理通过一次工具调用获取代码结构信息，跳过昂贵的文件扫描（glob + grep + 逐文件 Read）。

项目宣称的效果：节省 61% Token、减少 84% 工具调用、快 37 倍。100% 本地运行，零配置上手。

核心能力：

- **混合语义搜索**：依赖图 + 语义检索结合
- **多语言依赖图**：基于 AST 提取跨文件符号与调用关系
- **符号级影响面分析**与 call-flow 追踪
- **交互式 HTML 查看器**：浏览器中浏览图谱
- **跨项目与分支感知搜索**：适合 monorepo 与多仓库场景
- **DB/API/基础设施知识**：不只索引应用代码，还包括数据库模式和基础设施配置

## MCP 工具

接入后 AI 代理的主要入口是 `codegraph_explore`——它是唯一的主查询工具，单次调用即可返回入口点、相关符号和源码片段，无需零散的文件读取操作。另有针对影响面分析、调用链追踪的辅助工具，并支持按文件展示 staleness 提示（索引是否落后）。

## 安装

支持 npm 安装与安装脚本（Windows 提供 install.ps1），安装器会自动为各个 AI 编辑器写入 MCP 配置：

```sh
npm install -g codegraph
```

对 Vue 等框架有专门适配（如索引 `<template>` 中的组件使用关系）。

## 参考资料

- [GitHub - colbymchenry/codegraph: Pre-indexed code knowledge graph, auto syncs on code changes](https://github.com/colbymchenry/codegraph)
- [CodeGraph 深度解析：为 AI 编程代理构建预索引代码知识图谱 - CSDN](https://blog.csdn.net/yanceyxin/article/details/161753198)
- 相关笔记：[[gitnexus]]、[[graphify]]、[[codebase-memory-mcp]]
