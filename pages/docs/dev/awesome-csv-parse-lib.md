---
title: awesome-csv-parse-lib
description: 
date: 2026-04-17
update_date:
draft: true
author: JackyLee
tags:
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## python

文件 with BOM

如何确定文件有 BOM

```py
with open("file.csv", "rb") as f:
    has_bom = f.read(3) == b'\xef\xbb\xbf'
    print(f"有 BOM: {has_bom}")
```

## java

common-io

## 参考资料
