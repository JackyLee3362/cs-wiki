---
title: pandoc
date: 2022-12-20
draft: true
author: JackyLee
tags:
  - 命令行
categories: 
comment: true
---


## 基本使用

```shell
pandoc input.md -o output.docx # md文件转docx
```

## LaTeX -> Typst

```sh
pandoc --from latex --to typst input.tex -o output.typ
```

## 参考资料

1.知乎文章：[用 Markdown 写论文｜ 03 YAML 信息](https://zhuanlan.zhihu.com/p/412303359)
