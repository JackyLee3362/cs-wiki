---
title: tar
date: 2025-06-30
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 创建归档文件

将文件 file1、file2 和 directory 打包到一个名为 archive.tar 的归档文件中。

```sh
tar -cvf archive.tar file1 file2 directory
-c: 创建新的归档文件
-v: 显示详细输出，列出被添加到归档中的文件
-f: 指定归档文件的名称
```

## 解压归档文件

解压名为 archive.tar 的归档文件，还原其中包含的文件和目录。

```sh
tar -xvf archive.tar
-x: 解压归档文件
-v: 显示详细输出，列出被解压的文件
-f: 指定要解压的归档文件的名称
```

## 参考资料
