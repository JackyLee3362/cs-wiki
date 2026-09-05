---
title: git-cherry-pick
date: 2026-03-12
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## TLDR

```sh

# 将单个提交应用到当前分支：

    git cherry-pick 提交哈希

# 将连续多个提交应用到当前分支（也可参考 git rebase --onto）：

    git cherry-pick 起始提交~..结束提交

# 将多个（非连续的）提交应用到当前分支：

    git cherry-pick 提交1 提交2 ...

# 将提交变更应用到工作区但不自动创建提交：

    git cherry-pick --no-commit 提交哈希
```

## 参考资料
