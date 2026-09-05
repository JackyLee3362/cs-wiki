---
title: git restore 恢复文件
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
## 取消工作区的修改

```sh
# 将工作区中指定文件恢复到最新提交的状态（丢弃本地修改）
git restore 文件名
```

## 从暂存区移除

```sh
# 将已暂存的文件从暂存区移回工作区（保留修改内容）
git restore --staged 文件名
```

## 取消暂存并丢弃修改

```sh
# 先从暂存区移除，再丢弃工作区的修改，完全恢复到提交状态
git restore --staged 文件名
git restore 文件名
```

## 恢复所有文件

```sh
# 丢弃工作区所有未提交的修改（慎用）
git restore .
```

## FAQ

### restore 和 reset 的区别

- `git restore`：Git 2.23+ 引入，专门用于恢复文件状态，语义更清晰
- `git reset`：功能更广泛，可以移动 HEAD、操作暂存区等；`git reset HEAD 文件` 等价于 `git restore --staged 文件`
