---
title: Computer Network
date: 2025-01-01
draft: false
author: JackyLee
tags:
  - 基础知识
  - 计算机网络
categories:
  - 计算机科学
comment: true
---

# 计算机网络

## 七层网络结构

## 内网地址

A 类：10.0.0.0-10.255.255.255 mask 255.0.0.0

B 类：172.16.0.0-172.31.255.255 mask 255.255.0.0

C 类：192.168.0.0-192.168.255.255 mask 255.255.255.0

## 3.7 MAC 地址，IP 协议以及 ARP 地址

[视频](https://www.bilibili.com/video/BV1iE411h7dp)

### MAC 地址

有 48bit，6 个字节，前 3 个字节是 oui，需要向 ieee 注册，具体可以访问下面的网址查看

[查看各个厂商的 oui](https://standards-oui.ieee.org/)

第 1 个字节，分为 b7|b6|b5|b4|b3|b2|b1|b0

其中 b0 中取 0 表示单播地址，取 1 表示多播地址

b1 位取 0 表示全球管理，取 1 表示本地管理

```shell
arp -a # 查看本地的 arp 高速缓存表
arp -d # 删除告诉缓存表

Switch> enable
Switch# show mac-a # 显示mac地址表，mac address --> mac-a
Switch# clear mac-a # 删除mac地址表

Switch# config # 进入全局配置
Switch(config)# no spanning-tree vlan 1 # 左边不是注释...，删除生成树的命令
```
