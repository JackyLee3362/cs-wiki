---
title: git diff 差异比较
date: 2026-08-19
draft: false
author: JackyLee
tags:
  - Git
  - 版本管理
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---
## 工作区 vs 暂存区

```sh
# 查看工作区中已修改但未暂存的文件差异
git diff
```

## 暂存区 vs 仓库

```sh
# 查看已暂存但还未提交的差异
git diff --staged
git diff --cached
```

## 工作区 vs 仓库

```sh
# 查看工作区与最新提交之间的所有差异
git diff HEAD
```

## 指定文件比较

```sh
# 只查看某个文件的差异
git diff 文件名
git diff --staged 文件名
```

## 分支之间比较

```sh
# 比较两个分支的差异
git diff 分支A 分支B
# 查看分支B有但分支A没有的改动
git diff 分支A..分支B
```

## 查看某次提交的改动

```sh
# 查看指定 commit 的改动内容
git diff commit-id^ commit-id
git show commit-id
```

## 统计改动概况

```sh
# 只显示统计信息，不显示具体 diff
git diff --stat
```

## 与当前分支比较

```sh
git diff 分支名
# 比较当前分支与 main 分支的差异（包含工作区和暂存区未提交的改动）
git diff main
# 比较当前分支与远程 main 分支
git diff origin/main
```
