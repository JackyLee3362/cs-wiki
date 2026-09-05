---
title: git pull 拉取合并
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
## 拉取并合并

```sh
# 从关联的远程分支拉取最新代码并自动合并到当前分支
git pull
```

## 拉取指定远程分支

```sh
# 从指定远程仓库的指定分支拉取并合并
git pull origin main
```

## 拉取但不合并（等于 fetch）

```sh
# 只下载远程更新，不自动合并，可手动决定后续操作
git pull --no-commit
```

## 使用 rebase 方式拉取

```sh
# 先拉取远程更新，再用 rebase 方式应用到当前分支，历史更线性
git pull --rebase
git pull origin main --rebase
```

## FAQ

### pull 和 fetch 的区别

- `git fetch`：只下载远程分支的最新状态到本地远程跟踪分支，不会修改当前工作分支
- `git pull`：`fetch` + `merge`（或 `rebase`），会自动将远程更新合并到当前分支
