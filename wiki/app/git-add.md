---
title: git-add
date: 2026-08-19
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

## 添加到暂存区

1. 将一个尚未被 Git 跟踪的文件纳入 Git 跟踪
2. 将一个已经被 Git 跟踪的文件且这个文件处于修改状态，通过 add，可以将它纳入暂存区
3. 将 merge 或者 rebase 后产生的冲突文件标记为冲突已解决

```sh
git add .
git add [文件1] [文件2] [文件3]
git add [文件夹]
# 更加规范的用法，来自 vscode-git
# 无 -A 表示只处理新增
# 其中 -A/-all 表示还处理新增和删除
git add -A -- [文件]

git rm --cached [文件]
# 如果是目录 -r
# 如果需要强制 -f
```

> 如何取消，通过对 Vscode 中 Git 的输出查看，可以看到其使用的命令是 `git reset -q HEAD -- .`
> 也可以使用 `git reset --mixed` 命令
