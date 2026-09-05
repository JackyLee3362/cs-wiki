---
title: git fetch 获取远程更新
description:
date: 2026-09-05
update_date:
draft: false
author: JackyLee
tags:
  - Git
  - 版本管理
categories:
  - 命令行
comment: true
---
## 下载远程更新

```sh
# 从关联的远程仓库下载所有分支的最新状态
git fetch
```

## 获取指定远程

```sh
# 从指定的远程仓库获取更新
git fetch origin
```

## 获取指定分支

```sh
# 只获取指定远程分支的更新
git fetch origin main
```

## 获取并清理已删除的远程分支

```sh
# 获取远程更新，同时删除本地已不存在的远程跟踪分支
git fetch --prune
git fetch -p
```

## FAQ

### fetch 和 pull 的区别

- `git fetch`：安全地获取远程更新，只更新本地的远程跟踪分支（如 `origin/main`），不会修改当前工作分支，可让你在合并前先审查改动
- `git pull`：`fetch` + `merge`，直接获取并合并到当前分支
