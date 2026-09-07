---
title: Network Tools
description: 网络工具对比
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - network
  - firewall
  - 网络工具
categories:
  - 应用软件
comment: true
---

> 网络工具覆盖防火墙管理、流量监控、DNS 加密、代理调试、内网穿透等场景，帮助用户精细控制网络行为与诊断问题。

## 工具概览

| 工具 | 类型 | 开源 | 价格 | 平台 | 核心特点 |
| :--- | :--- | :--: | :--- | :--- | :--- |
| [Watt Toolkit](https://steampp.net/) | 网络加速 | ✅ | 免费 | Windows / macOS / Linux | Steam 社区/商店加速，GitHub 加速，多功能网络工具箱 |
| [GlassWire](https://www.glasswire.com/) | 流量监控 | ❌ | 免费+付费 | Windows / Android | 可视化防火墙与流量监控，实时发现异常连接 |
| [Whistle](https://wproxy.org/whistle/) | HTTP 代理调试 | ✅ | 免费 | 全平台 | 跨平台 Web 调试代理，类似 Fiddler/Charles |
| [Intra](https://getintra.org/) | DNS 加密 | ✅ | 免费 | Android | Google 实验性工具，加密 DNS 流量，对抗 DNS 劫持 |
| [localtunnel](https://localtunnel.github.io/www/) | 内网穿透 | ✅ | 免费 | 全平台 | 将本地服务暴露到公网，快速共享开发中的站点 |
| [ngrok](https://ngrok.com/) | 内网穿透 | ❌ | 免费+付费 | 全平台 | 业界标准内网穿透工具，稳定且功能完善 |
| [frp](https://github.com/fatedier/frp) | 内网穿透 | ✅ | 免费 | 全平台 | 高性能反向代理，支持 TCP/UDP/HTTP/HTTPS |
| [Wireshark](https://www.wireshark.org/) | 协议分析 | ✅ | 免费 | 全平台 | 网络协议分析标准工具，抓包与排障必备 |
| [nmap](https://nmap.org/) | 网络扫描 | ✅ | 免费 | 全平台 | 端口扫描与网络发现，安全审计基础工具 |
| [NextDNS](https://nextdns.io/) | DNS 服务 | ❌ | 免费+付费 | 全平台 | 零日志 DNS，支持广告拦截、家长控制、自定义规则 |
| [AdGuard DNS](https://adguard-dns.io/) | DNS 服务 | ❌ | 免费+付费 | 全平台 | 隐私优先 DNS，内置广告与追踪拦截 |

## 按场景推荐

### 防火墙与流量监控

Windows 默认防火墙配置繁琐，**GlassWire** 提供可视化界面，一键阻止应用联网并实时监控流量异常。需要批量配置出站/入站规则时，FireWall App Blocker 是轻量替代方案。

### DNS 加密与隐私

Android 用户推荐 **Intra** 加密 DNS 查询，对抗运营商 DNS 劫持。跨平台长期方案推荐 **NextDNS** 或 **AdGuard DNS**，两者均支持零日志、广告拦截和自定义过滤规则。

### Web 开发与代理调试

前端/后端调试 HTTP 请求时，**Whistle** 是开源跨平台的 Fiddler/Charles 替代，支持规则配置、Mock 数据、注入脚本等功能，适合团队协作。

### 内网穿透

临时将本地开发环境暴露给同事或客户，**localtunnel** 是最快捷的选择（无需安装服务端）。需要长期稳定或生产级穿透时，**frp**（自建服务端）或 **ngrok**（托管服务）更为可靠。

### 网络排障与安全审计

抓包分析网络问题，**Wireshark** 是行业标准；端口扫描与网络发现，**nmap** 是安全领域的基础工具。

## 参考资料

- [你最满意的 10 款 PC 软件是什么？ - 知乎](https://www.zhihu.com/question/469450888/answer/2824912852) #todo
- [有哪些好用的开源软件？ - 知乎](https://www.zhihu.com/question/56766597/answer/3440997206) #todo
- [MarceauKa/shaark: Self-hosted platform to keep and share your content](https://github.com/MarceauKa/shaark) #todo
- [Kovah/LinkAce: LinkAce is a self-hosted archive to collect links of your favorite websites.](https://github.com/Kovah/LinkAce) #todo
- [星辰 的想法: 1.4w⭐️ 超好用的开源代理工具 | Whistle - 知乎](https://www.zhihu.com/pin/1809747598422196224) #todo
- [不想做程序员了，自己又没其他本领，能干什么呢？ - 知乎](https://www.zhihu.com/question/614230309/answer/3183618816) #todo
- [邻居家小孩来敲门问WiFi密码，告诉他之后，他竟然几部手机电视全用上。你说该怎么办？ - 知乎](https://www.zhihu.com/question/331281360/answer/3109557939) #todo
- [我应该设置多少kb才能让他不能玩游戏？ - 知乎](https://www.zhihu.com/question/629492783/answer/1968411167564202434) #todo
- [localtunnel/localtunnel: expose yourself](https://github.com/localtunnel/localtunnel) #todo
