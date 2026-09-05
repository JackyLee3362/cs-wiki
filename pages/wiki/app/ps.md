---
title: ps
date: 2025-09-05
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

## ps

```sh
# 常用命令
ps aux

# 查看正在运行的进程并以长格式显示
ps -rl

# 如何查看命令启动时的参数
ps -p 进程号 -o args

# 检查进程状态，如果是 S 或 D，则表明该进程可能是一个守护进程
ps -p 进程号 -o state

# 检查父进程
ps -p 进程号 -o ppid

# 查找守护进程，如果守护进程是 1 ，则说明是 launchd 启动的
ps -ef | grep 子进程号
# 输出格式> xxx 子进程号 守护进程号
```

## 常用参数

```sh
-ef 显示所有进程消息
-aux: 用于查看所有静态进程
-top: 用于查看动态变化的进程
-A: 用于查看所有的进程
-r: 表示只显示正在运行的进程
-l: 表示用长格式显示
```

## 在 PS 查看的进程通常有以下几种状态

- D: 不能中断的休眠
- R: 正在运行中
- S: 处于休眠状态
- T: 停止或被追踪
- W: 进入内存交换
- Z: 僵死进程

## 示例

```sh

```

## 参考资料
