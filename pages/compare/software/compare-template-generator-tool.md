---
title: compare-template-generator-tool
description: 项目模板/脚手架工具选型：cookiecutter / copier / degit / plop / hygen
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - 选型
  - 脚手架
categories:
  - 命令行
comment: true
---

[[cookiecutter]]
[[copier]]
[[jinja2]]
[[degit]]
[[plop]]
[[hygen]]

## 概览对比

| 维度 | cookiecutter | copier | degit | plop | hygen | Yeoman |
|------|--------------|--------|-------|------|-------|--------|
| 定位 | 新项目生成 | 新项目生成 + 模板升级回灌 | 模板仓库快照拉取 | 项目内文件片段生成 | 项目内文件片段生成 | 通用脚手架系统（生态驱动） |
| 运行环境 | Python (pipx) | Python (pipx) | Node.js (npx) | Node.js (npx) | Node.js | Node.js (yo) |
| 模板语法 | Jinja2 | Jinja2 | 无（纯快照） | Handlebars | EJS + frontmatter | EJS |
| 交互问答 | ✅ cookiecutter.json | ✅ copier.yml（支持类型校验/条件提问） | ❌ | ✅ plopfile.js (Inquirer) | ✅ prompt.js（可选） | ✅ |
| 变量渲染 | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| 生成后模板升级 | ❌ 一次性生成 | ✅ `copier update` 三方合并 | ❌ | — | — | ❌ |
| 注入已有文件 | ❌（仅 hooks 脚本） | 部分支持 | ❌ | ❌ | ✅ 强项 | ✅ |
| 配置方式 | JSON + hooks 脚本 | YAML + migrations | 零配置 | JS（plopfile.js） | 目录即模板（零 JS） | JS（Generator 类） |
| 维护状态 | 活跃 | 活跃（更积极） | 活跃（低频） | 活跃 | 维护放缓 | 基本停滞（遗留） |
| 典型生态 | awesome-cookiecutter 海量模板 | 新兴 Python 项目模板 | Svelte/Vite 曾用 | 前端团队规范 | 脚本化提效 | generator-* 生态 |

语言生态里还有框架内置的对应物，思路相通但绑定技术栈：Java 的 Maven Archetype、Rust 的 cargo-generate、.NET 的 `dotnet new templates`、Spring Initializr（Web 表单式）。

## 场景推荐

- **给团队/开源社区做标准化新项目模板，希望持续演进** → [[copier]]：唯一支持把模板升级回灌到已生成项目的工具，pybamm 等项目已从 cookiecutter 迁移过来
- **一次性生成新项目、看重现成模板生态** → [[cookiecutter]]：模板存量最大，找 Python/Django/Frontend 现成模板几乎必中
- **模板就是「成品仓库」，不需要任何参数化** → [[degit]]：零学习成本秒级快照，配合 Git tag 还能锁版本
- **已有项目内高频创建结构化文件（组件/模块/测试），规则要进 Git** → [[plop]]：JS 配置表达力强，Inquirer 交互成熟
- **同上但偏好零配置、CLI 快捷、且需要向已有文件注入内容（如自动注册路由）** → [[hygen]]
- **模板变量渲染本身的自定义需求（HTML 页面、配置文件、文档站点）** → 直接用 [[jinja2]]，它是上面大半工具的底层引擎
- **需要维护 Yo 时代的旧生成器（如 Office 加载项模板）** → Yeoman 仅作为遗留选项保留，新项目不建议

## 决策树

```text
生成的对象是什么？
├─ 一个全新的项目/仓库
│  ├─ 模板需要参数化（交互问答 + 变量渲染）？
│  │  ├─ 是，且希望日后模板升级能同步到已生成项目 → copier
│  │  ├─ 是，只需要一次性生成 / 想用现成海量模板 → cookiecutter
│  │  └─ 否，模板就是成品仓库 → degit
│  └─ 绑定特定语言框架？→ 优先框架内置（cargo-generate / Maven Archetype / dotnet new）
└─ 在已有项目里批量生成重复文件
   ├─ 需要向既有文件注入内容 → hygen
   ├─ 需要复杂 JS 逻辑 / 团队规范固化 → plop
   └─ 都不需要，写个脚本就行 → 自定义脚本 (ts-node / Python)
```

## 参考资料

- [GitHub - cookiecutter/cookiecutter: A cross-platform command-line utility that creates projects from templates](https://github.com/cookiecutter/cookiecutter) #todo
- [GitHub - copier-org/copier: Library and command-line utility for rendering projects templates](https://github.com/copier-org/copier) #todo
- [GitHub - Rich-Harris/degit: makes copies of git repositories](https://github.com/Rich-Harris/degit) #todo
- [GitHub - plopjs/plop: Consistency Made Simple](https://github.com/plopjs/plop) #todo
- [GitHub - jondot/hygen: The simple, fast, and scalable code generator that lives in your codebase](https://github.com/jondot/hygen) #todo
- [GitHub - pallets/jinja: A very fast and expressive template engine](https://github.com/pallets/jinja) #todo
- [pybamm-cookie 从 cookiecutter 迁移到 copier 的 PR 记录](https://github.com/pybamm-team/pybamm-cookie/pull/34) #todo
- [2025 Node.js 代码生成工具集：Yeoman / Plop / Hygen 选型 - CSDN](https://blog.csdn.net/dengjianbin/article/details/152088934) #todo
- [awesome-cookiecutter 模板列表](https://github.com/cookiecutter/awesome-cookiecutter) #todo
- [mdklatt/cookiecutter-python-app: Cookiecutter template for a Python application project](https://github.com/mdklatt/cookiecutter-python-app) #todo
