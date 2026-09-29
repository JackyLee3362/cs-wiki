---
title: ag
date: 2026-02-12
draft: true
author: JackyLee
tags:
categories:
  - 命令行
comment: true
---

## 仓库

- [GitHub - ggreer/the_silver_searcher: A code-searching tool similar to ack, but faster.](https://github.com/ggreer/the_silver_searcher)

## 安装

```sh
brew install the_silver_searcher
```

## 使用

```sh
# 使用可以查看
tldr ag

# 排除目录
ag 关键字 --ignore-dir node_modules

# 特定文件类型
ag 关键字 --java
```

## 参考资料
