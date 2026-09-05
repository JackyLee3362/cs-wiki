---
title: adb
date: 2024-03-25
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

## adb 调试

```sh
cd D:/Program/platform-tools

adb devices -l
```

## 修改收集分辨率

```sh
adb -s NBC6NBRKG66XMVMJ shell

wm size 1080x1920

wm density 480

# 恢复分辨率
wm size reset
```
