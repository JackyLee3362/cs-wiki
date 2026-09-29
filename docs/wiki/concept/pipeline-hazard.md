---
title: Pipeline Hazard
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 计算机组成原理
categories:
  - 计算机科学
comment: true
---

## 定义

流水线冒险（Pipeline Hazard）是指由于指令之间的相关性或资源冲突，导致流水线无法按理想状态连续执行的情况。

## 结构冒险（资源冲突）

多条指令在同一时钟周期争用同一功能部件。解决方法：资源复制、流水线停顿。

## 数据冒险

- **RAW**（Read After Write）：后一条指令读取前一条指令尚未写入的数据
- **WAR**（Write After Read）：后一条指令写入前一条指令尚未读取的数据
- **WAW**（Write After Write）：两条指令写入同一位置

解决方法：数据前推（Forwarding）、流水线停顿、编译器调度。

## 控制冒险

主要由转移指令（分支、跳转、调用）引起，导致下一条指令地址不确定。

解决方法：

- 分支预测（静态/动态）
- 延迟分支
- 刷新流水线
