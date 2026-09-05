---
title: git-log-查找日志
date: 2025-11-03
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 历史：在 commit 信息中查找并展示 commit

```sh
git log --grep="待过滤信息"
```

## 历史: 在文件中查找内容并展示 commit

```sh
git log -S"待搜索内容" -p
```

## 参考资料
