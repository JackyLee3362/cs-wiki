---
title: pnpm
date: 2026-09-01
draft: false
author: JackyLee
tags:
  - wiki
  - 包管理
  - JavaScript
categories:
  - 命令行
comment: true
update_date: 2026-09-29
---

## 安装与验证

先安装受支持的 Node.js。已有 npm 时，可安装 pnpm；版本兼容性以官方安装表为准：

```sh
npm install -g pnpm
pnpm --version
```

## 基本使用：依赖管理

在包含 package.json 的项目目录执行：

```sh
pnpm install
pnpm add lodash
pnpm add -D eslint
pnpm list --depth 0
pnpm remove lodash
pnpm run
```

pnpm-lock.yaml 记录解析结果，应提交到版本控制。实际依赖目录 node_modules 通常忽略。已有项目应遵循其包管理器与锁文件约定。

## 持续集成与可重复安装

```sh
pnpm install --frozen-lockfile
# 仅当项目定义了 build 脚本时
pnpm run build
```

--frozen-lockfile 阻止安装过程修改锁文件；不一致时先在开发环境调整依赖并检查锁文件。通过 package.json 的 packageManager 字段记录团队约定的 pnpm 版本。

## 代理配置

配置代理后，可以用 pnpm config get proxy 核对设置。取消代理应删除配置项，不能只执行缺少值的 config set。

## 特点

- Node.js 的高性能包管理器
- 基于内容寻址存储，磁盘空间占用极小
- 严格的依赖隔离，避免幽灵依赖
- 支持 monorepo 工作区管理
- 兼容 npm 生态，迁移成本低

## 增加代理

```sh
# 开启代理
pnpm config set proxy http://127.0.0.1:7897
pnpm config set https-proxy http://127.0.0.1:7897

# 关闭代理
pnpm config delete proxy
pnpm config delete https-proxy
```

## 参考资料

### 官方资源

- [官网](https://pnpm.io/)
- [GitHub 仓库](https://github.com/pnpm/pnpm)
- [官方文档](https://pnpm.io/installation)

### 相关文章

- [npm](docs/wiki/app/npm.md)

### 其他参考链接

- [原笔记链接](http://127.0.0.1:7897) #todo
- [pnpm 安装](https://pnpm.io/installation) #todo
- [pnpm install](https://pnpm.io/cli/install) #todo
