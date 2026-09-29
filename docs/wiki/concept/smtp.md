---
title: SMTP
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

SMTP（Simple Mail Transfer Protocol，简单邮件传输协议）是用于发送电子邮件的应用层协议。

## 特点

- 使用 **TCP** 可靠传输（端口 25）
- 仅支持传输 7 比特 ASCII 码内容
- 采用「推」的方式：发送方主动将邮件推送到接收方邮件服务器
- 负责邮件服务器之间以及用户代理到邮件服务器的发送

## 工作过程

1. 建立 TCP 连接
2. 发送 SMTP 命令（HELO/EHLO、MAIL FROM、RCPT TO、DATA 等）
3. 传输邮件内容
4. 释放连接

## 局限

- 不能直接传输二进制数据（需配合 MIME 编码）
- 不能从邮件服务器向用户代理「拉」取邮件（由 POP3/IMAP 完成）
