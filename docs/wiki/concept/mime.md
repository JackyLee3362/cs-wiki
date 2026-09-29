---
title: MIME
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 计算机网络
categories:
  - 计算机网络
comment: true
---

## 定义

MIME（Multipurpose Internet Mail Extensions，多用途互联网邮件扩展）是对电子邮件格式的扩展，使电子邮件可以传输非 ASCII 内容（图片、音频、视频、二进制文件等）。

## 解决的问题

- SMTP 只能传输 7 位 ASCII 文本
- 需要在邮件中嵌入多媒体内容和附件

## 核心机制

- **内容类型**（Content-Type）：指定媒体类型，如 text/plain、image/jpeg、application/pdf
- **内容传输编码**（Content-Transfer-Encoding）：如 Base64、Quoted-Printable
- **Base64 编码**：将二进制数据转换为 ASCII 字符串

## 应用

- 电子邮件附件
- HTTP 协议中的内容类型标识
