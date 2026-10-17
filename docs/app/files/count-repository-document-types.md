---
title: 如何统计仓库中的文档类型和数量？
date: 2026-10-09
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
  - wiki
  - 命令行
categories:
  - 常见问题
comment: true
---

在仓库根目录运行下面的命令，按扩展名统计 `docs/` 下受 Git 跟踪的文件：

```sh
git -c core.quotePath=false ls-files -- docs |
awk -F/ '{name=$NF; if (name !~ /\./ || name ~ /^\.[^.]+$/) type="[无扩展名]"; else {sub(/^.*\./, "", name); type="." name} print type}' |
sort | uniq -c | sort -nr
```

本仓库在 2026-10-09 的结果是：

```text
998 .md
 74 .json
  2 .py
```

合计 1074 个文件。去掉命令中的 `-- docs` 可统计整个仓库。`git ls-files` 读取 Git 索引，因此包含已暂存的新文件，不包含尚未加入 Git 的文件；更多用法见 [Git](docs/app/git/git.md) 和 [git-ls-files 官方文档](https://git-scm.com/docs/git-ls-files.html)。

如果要统计当前工作目录中的 Markdown 文件，包括未加入 Git 的文件，可用 [find](docs/app/terminal/find.md)：

```sh
find docs -type f -name '*.md' | wc -l
```

这里的“类型”指文件扩展名。如果要统计 Markdown 头部显式填写的 `type` 字段，可用：

```sh
rg --no-filename '^type:' docs -g '*.md' |
sed 's/^type:[[:space:]]*//' |
sort | uniq -c | sort -nr
```

```text
44 basic-note
 1 books
```

本仓库只有 45 篇 Markdown 文档填写了 `type`，因此这个结果不能代表全部文档的分类。
