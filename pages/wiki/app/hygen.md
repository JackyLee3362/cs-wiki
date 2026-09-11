---
title: Hygen
description: 以速度著称的 Node.js 代码生成器，模板即目录
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - nodejs
  - 脚手架
  - 代码生成
categories:
  - 命令行
comment: true
---

## 概述

[Hygen](https://github.com/jondot/hygen) 是一个专注于**速度与 DX（开发体验）**的代码生成器（Node.js，5k+ star），与 [[plop]] 属于同一赛道——项目内重复代码片段生成。核心差异：

- **零配置、模板即目录**：生成器规则不用写 JS 配置文件，直接在 `_templates/` 下按「生成器名/动作名」建目录即生效
- **CLI 优先**：`hygen generator new --name user` 一步到位，适合脚本化与 muscle memory
- **EJS 模板** + frontmatter 控制行为（输出路径、注入、跳过等）
- **注入（injection）能力**：可向已有文件追加内容（如在路由表里自动注册新路由），这是它比多数同类工具强的地方

## 使用示例

目录结构约定：

```
_templates/
└── component/
    └── new/
        ├── hello.ejs.t          # 生成文件的模板
        └── prompt.js            # 可选：交互提问
```

```sh
# 生成
hygen component new --name UserCard
```

模板示例（frontmatter 声明目标路径）：

```ejs
---
to: src/components/<%= name %>/index.tsx
---
export const <%= name %> = () => <div><%= name %></div>;
```

向已有文件注入：

```ejs
---
inject: true
to: src/routes/index.ts
after: "// routes"
---
import <%= name %>Routes from './<%= name %>';
```

## 注意事项

- 维护节奏放缓（长期处于低频维护状态），重大新特性不建议依赖
- 适合个人/团队脚本化提效，复杂逻辑能力弱于 [[plop]] 的 JS 配置

## 参考资料

- [GitHub - jondot/hygen: The simple, fast, and scalable code generator that lives in your codebase](https://github.com/jondot/hygen) #todo
- [2025 Node.js 代码生成工具集：Yeoman / Plop / Hygen 选型 - CSDN](https://blog.csdn.net/dengjianbin/article/details/152088934) #todo
- 相关笔记：[[plop]]、[[cookiecutter]]
