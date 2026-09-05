---
title: nvm
date: 2025-08-27
draft: true
author: JackyLee
tags:
  - 命令行
  - 必装软件
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

> tldr nvm

## 安装

```sh
scoop install nvm
brew install nvm
```

### 云服务器安装

- [部署Node.js环境-云服务器 ECS(ECS)-阿里云帮助中心](https://help.aliyun.com/zh/ecs/user-guide/manually-deploy-a-node-js-environment?spm=a2c4g.11186623.help-menu-25365.d_0_11_4_6_1.4d8d5a25582qkk)

## 基础

查看已经安装的 node

```sh
# 列出当前已安装的
nvm ls
# 列出远程
nvm ls-remote
# 安装
nvm install <version>
# 默认版本
nvm alias default <version>
```

```sh
# 常用
nvm list
nvm list-remote
nvm list available

# 设置代理
nvm proxy http://127.0.0.1:7890

# 设置镜像
nvm node_mirror https://npmmirror.com/mirrors/node/
```
