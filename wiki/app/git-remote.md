---
title: git-remote
date: 2025-08-03
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 查看远程分支

```sh
git remote
git remote --verbose
```

## 删除远程分支

```sh
git remote remove [远程分支名]
```

## 清理远程分支

远程分支已删除，本地仍然保留远程分支，如何清理过期的分支

原因就是本地缓存了远程分支的信息，要删除本地缓存的已删除远程分支

```sh
git remote prune origin
```
