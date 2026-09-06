---
title: PCB
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 操作系统
categories:
  - 计算机科学
comment: true
---

## 定义

PCB（Process Control Block，进程控制块）是操作系统中用于描述和控制进程运行的数据结构，是进程存在的唯一标志。

## 组成

- **进程描述信息**
  - PID（Process ID）：进程标识符
  - UID（User ID）：用户标识符
- **进程控制和管理信息**
  - 进程当前状态（运行、就绪、阻塞等）
  - 进程优先级
- **资源分配清单**
  - 程序段、数据段地址
  - 打开文件列表
- **处理机相关信息**
  - 通用寄存器值
  - 程序计数器 PC
  - 程序状态字 PSW

## 作用

- 进程创建时建立 PCB
- 进程调度时保存/恢复现场
- 进程终止时撤销 PCB
