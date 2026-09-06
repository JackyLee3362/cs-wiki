---
title: CSMA/CA
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

CSMA/CA（Carrier Sense Multiple Access with Collision Avoidance，载波侦听多路访问/碰撞避免）是 IEEE 802.11 无线局域网采用的介质访问控制协议。

## 为什么无线不用 CSMA/CD

- 无线信号衰减快，无法可靠检测冲突
- 存在「隐蔽站」问题：两个站点互相听不到对方，同时向 AP 发送会冲突

## 工作机制

1. **能量检测、载波检测、能量载波混合检测**
2. **帧间间隔 IFS**
   - SIFS（短 IFS）：ACK、CTS、分片数据帧
   - PIFS（点协调 IFS）
   - DIFS（分布式协调 IFS）：最长，普通数据帧
3. **信道预约**：RTS/CTS 握手
   - RTS（Request to Send）
   - CTS（Clear to Send）

## 与 CSMA/CD 对比

| 特性     | CSMA/CD        | CSMA/CA           |
| -------- | -------------- | ----------------- |
| 传输介质 | 有线以太网     | 无线局域网 802.11 |
| 检测方式 | 电压变化检测   | 能量/载波检测     |
| 工作方式 | 检测冲突后停止 | 尽量避免冲突      |
| 握手机制 | 无             | RTS/CTS           |
