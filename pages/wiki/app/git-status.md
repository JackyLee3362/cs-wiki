---
title: git status
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
## 查看当前状态

```sh
git status
# 简洁版
git status -s
```

输出结果

```sh
?? new-file.txt   # 未跟踪
M  modified-file.js # 已修改未暂存
A  added-file.css  # 已暂存
```
