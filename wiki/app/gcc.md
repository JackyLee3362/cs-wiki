---
title: gcc
date: 2025-04-28
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

## 简单命令

```shell
g++  -E  test.cpp  -o  test.i # 生成预处理后的.i文件
g++ -S test.i -o test.s       # 生成汇编.s文件
g++  -c  test.s  -o  test.o   # 生成二进制.o文件
g++ test.o  -o  test.out      # 生成二进制.out 可执行文件
```

## 查看内存

```shell
-exec x/8x [var]
```

## 反汇编

```shell
-exec disassemble /m
-exec disassemble /m main
```

## 寄存器信息

```shell
-exec info registers
```

## 参考资料

- [Linux编译工具：gcc入门 - 知乎](https://zhuanlan.zhihu.com/p/76930507)
