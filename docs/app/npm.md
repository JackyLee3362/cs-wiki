---
title: npm
date: 2025-01-01
draft: false
author: JackyLee
tags:
  - wiki
  - 包管理
categories:
  - 命令行
comment: true
update_date: 2026-09-29
---

## 安装与验证

npm 通常随 Node.js 一起安装。从 [Node.js 官网](https://nodejs.org/en/download)选择受支持的 LTS 版本，安装后重新打开终端：

```sh
node --version
npm --version
```

## 基本使用：新建项目

在新的练习目录中执行：

```sh
mkdir npm-demo
cd npm-demo
npm init -y
npm install lodash
npm ls --depth=0
npm uninstall lodash
```

package.json 记录项目信息与直接依赖，package-lock.json 记录解析后的版本，node_modules 保存实际安装的包。前两个文件应提交到版本控制，node_modules 应忽略。

## 使用已有项目

```sh
# 仓库包含 package-lock.json 时，按锁文件安装
npm ci
# 列出 package.json 中的可用脚本
npm run
# 仅当项目定义了对应脚本时执行
npm run build
```

npm ci 会重建 node_modules；package.json 与锁文件不一致时会报错，而不是自动修正。开发时新增依赖用 npm install，持续集成通常用 npm ci。

## 开发依赖

```sh
npm install --save-dev eslint
npm config get registry
```

--save-dev 适用于只在开发、构建或检查阶段使用的工具。项目如已有其他包管理器的锁文件，应遵循项目约定，避免混用。

## 特点

- Node.js 官方默认的包管理器
- 通过 npm registry 分发 JavaScript 软件包
- 支持语义化版本控制
- npm scripts 可替代简单的构建工具
- 随 Node.js 安装，开箱即用

## 常用命令

```sh
npm install 包名       # 安装依赖
npm install -g 包名    # 全局安装
npm uninstall 包名     # 卸载依赖
npm update             # 更新依赖
npm run 脚本名         # 执行 package.json 中的脚本
```

## 参考资料

### 官方资源

- [官网](https://www.npmjs.com/)
- [GitHub 仓库：npm CLI](https://github.com/npm/cli)
- [官方文档](https://docs.npmjs.com/)

### 相关文章

- [pnpm](docs/app/pnpm.md)

### 其他参考链接

- [Node.js 与 npm 安装](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) #todo
- [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci) #todo
