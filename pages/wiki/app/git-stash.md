---
title: git-stash
date: 2025-09-23
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

`stash`：临时保存当前分支的工作状态，方便切换到其它分支

应用场景：比如在自己的分支上工作到一半，但是被要求去修改别的文件，此时就需要

## 暂存

```sh
# 当前暂存区的文件暂存
git stash
# 查看 stash 内容
git stash list
# 查看具体内容
git stash show t
# 应用
git apply
# 弹出
git pop
# 临时保存当前分支的工作状态，方便切换到其它分支
git stash
# 恢复刚刚临时保存的工作状态
git stash pop
```

## 场景

什么时候需要【储藏并签出】呢？

比如当自己在 `feat-a` 上写代码，
突然有紧急的 bug 需要在 `master` 维修
但是 `feat-a` 还没到达可以提交的阶段，
此时就可以使用【储藏并签出】的功能

- `apply-stash`：合并到当前分支，可以对多个分支使用，删除用 `drop stash`
- `pop-stash`：合并到当前分支并删除，即只能使用一次

## 参考资料
