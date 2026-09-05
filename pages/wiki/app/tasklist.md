---
title: tasklist
date: 2026-08-17
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

windows平台进程工具

[微软官方tasklist](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/tasklist)

## 普通用法

```cmd
tasklist # 查看本机进程
tasklist /svc # 列出每个进程的所有服务信息，而不截断
tasklist /v # 在输出中显示详细的任务信息
tasklist /fo {table | list | csv} # 指定要用于输出的格式。 有效值为 table、list 或 csv。 输出的默认格式为 table。
```

## 过滤器filter

```cmd
tasklist /v /fi "PID gt 1000" /fo csv # 列出进程 ID 大于 1000 的所有任务，并将它们以 csv 格式显示

```

## 常用场景

```cmd
tasklist | findstr "PID" # 按照进程查找应用
tasklist | findstr "应用名" # 按照应用名查找应用
```
