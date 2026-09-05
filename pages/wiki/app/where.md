---
title: where
date: 2025-11-19
draft: true
author: JackyLee
tags:
  - 命令行
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---


以管理员身份运行 CMD，更换脚本执行策略：set-ExecutionPolicy RemoteSigned，然后输入 Y。

## 可执行文件目录

`c/Windows/system32/where`

> [!Note]
> 怎么找到的呢，使用的是`gitbash`中的`which where`找到的

## 设置 where 的快捷方式

```sh
new-alias -name gh -value get-help
new-alias -name w -value where.exe
```

## unix 中的 where

```sh
where java
whereis java
which java
type java
whatis java
```
