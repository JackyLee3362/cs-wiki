---
title: git-config
date: 2025-06-25
draft: true
author: JackyLee
tags:
  - 命令行
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## config 配置

```sh
# 查看配置
git config --list
# 设置全局用户名+邮箱
git config --global user.name "your-name"
git config --global user.email your-email@qq.com
# 配置文件位置
# windows: ~/.gitconfig
# linux: /etc/gitconfig
# 设置代理
git config --global http.proxy 'http://localhost:7890'
# 具体项目的配置列表
git config --local --list
# 具体项目的配置
git config --local 配置内容
```

## git 在 powershell 使用命令行时出现乱码

```sh
git config --global core.quotepath false
git config --global gui.encoding utf-8
git config --global i18n.commit.encoding utf-8
git config --global i18n.logoutputencoding utf-8
```

- [Powershell 下 git 中文乱码 - Laggage - 博客园](https://www.cnblogs.com/laggage/p/12301495.html)

## git 设置代理

```sh
cat ~/.gitconfig
# 设置
[http]
proxy = socks5://127.0.0.1:socks5端口号
proxy = http://127.0.0.1:http端口号

[https]
proxy = socks5://127.0.0.1:socks5端口号
proxy = https://127.0.0.1:http端口号
```

## 参考资料

[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)
[.gitignore 文件语法介绍 - Revc - 博客园](https://www.cnblogs.com/revc/p/17070338.html)
