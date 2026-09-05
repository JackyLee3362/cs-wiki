---
title: git-reflog
description:
date: 2026-08-19
update_date:
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

## FAQ

### 恢复本地已删除分支

```sh
# 查看所有操作记录，包括被删分支之前的 commit
git reflog

# 找到分支最后一次的 commit hash，例如：
# abc1234 HEAD@{2}: commit: fix bug xxx

# 用这个 hash 重建分支
git branch <分支名> abc1234

# 或者直接切出来
git checkout -b <分支名> abc1234
```
