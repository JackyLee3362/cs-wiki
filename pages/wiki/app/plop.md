---
title: Plop
description: Node.js 轻量级项目内代码生成器，专注重复文件片段的批量创建
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

[Plop](https://github.com/plopjs/plop) 是一个「微型生成器框架」（Node.js，7k+ star），定位与 [[cookiecutter]] 明显不同：**cookiecutter 生成整个新项目，Plop 在已有项目内生成重复结构的文件**——React 组件、API 控制器、测试用例、页面模块等。

核心特点：

- **plopfile.js 即配置**：用 JavaScript 定义生成器（generator），逻辑表达力强，可用任意 npm 包
- **模板用 Handlebars**：`.hbs` 模板文件，与 Jinja2 语法风格类似
- **交互基于 Inquirer**：问答式收集变量
- **项目内声明、随仓库版本化**：生成规则进 Git，团队成员 `npx plop` 即可复用，天然统一团队代码规范

## 安装与使用

```sh
npm install --save-dev plop
```

```js
// plopfile.js
module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "React 组件",
    prompts: [
      { type: "input", name: "name", message: "组件名：" },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/component.hbs",
      },
    ],
  });
};
```

```sh
npx plop component
```

## 适用场景

- 团队要求每个模块都有固定的「组件 + 样式 + 测试 + story」文件组合
- 在 CI/脚本中批量产出样板代码

## 参考资料

- [GitHub - plopjs/plop: Consistency Made Simple](https://github.com/plopjs/plop) #todo
- [2025 Node.js 代码生成工具集：Yeoman / Plop / Hygen 选型 - CSDN](https://blog.csdn.net/dengjianbin/article/details/152088934) #todo
- 相关笔记：[[hygen]]、[[cookiecutter]]
