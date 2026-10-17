---
title: find
date: 2026-02-14
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
---

## 统计文件数量

在仓库根目录统计 `docs/` 下当前存在的 Markdown 文件，包括尚未加入 Git 的文件：

```sh
find docs -type f -name '*.md' | wc -l
```

`-type f` 只匹配普通文件，`-name '*.md'` 按文件名筛选。按扩展名统计受 Git 跟踪的文件，见[如何统计仓库中的文档类型和数量？](docs/issue/count-repository-document-types.md)。
