---
title: curl
date: 2025-11-20
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

## 安装

```sh
# 下载到本地，名字是a.txt
curl https://www.google.com -o g.html

# 常用 flag
-f, --fail: 遇到错误时不输出 HTML 错误页面
-s, --silent: 静默模式，不显示下载进度
-S, --show-error: 显示错误
-L, --location: 跟随重定向
```

## 常用命令

```sh
# 在cmd和powershell上使用不太一样
# 显示 ip
curl https://cip.cc
```

和 curl 相似的工具有 wget

## 参考资料
