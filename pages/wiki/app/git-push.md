---
title: git push 推送
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
## 推送到远程

```sh
# 将当前分支的提交推送到关联的远程分支
git push
```

## 推送到指定远程分支

```sh
# 将本地分支推送到指定的远程仓库和分支
git push origin main
# 将本地 dev 分支推送到远程 dev 分支
git push origin dev
```

## 首次推送并建立关联

```sh
# 推送当前分支到远程，并建立上游追踪关系
git push -u origin main
git push --set-upstream origin main
```

## 强制推送（谨慎使用）

```sh
# 强制推送，用本地历史覆盖远程历史，可能丢失他人提交
git push --force
git push -f

# 安全的强制推送，先检查远程是否有新提交
git push --force-with-lease
```

## 删除远程分支

```sh
# 删除远程分支
git push origin --delete 分支名
git push origin :分支名
```

## 推送标签

```sh
# 推送本地标签到远程
git push origin 标签名
# 推送所有本地标签
git push origin --tags
```
