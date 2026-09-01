---
title: Tailscale
date: 2026-08-29T10:51:55+08:00
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

- 官网: [Tailscale | Secure Connectivity for AI, IoT & Multi-Cloud](https://tailscale.com/)

## 服务器连接headscale

```sh
tailscale up --auth-key=hskey-auth-xxx --force-reauth --login-server=你的域名 --operator=jackylee
# hskey-auth
# login-server 域名是你 caddy 反向代理的域名
```

## 客户端连接headscale

## 安装

- [Install Tailscale on Linux · Tailscale Docs](https://tailscale.com/docs/install/linux)
- [Tailscale玩法之内网穿透、异地组网、全隧道模式、纯IP的双栈DERP搭建、Headscale协调服务器搭建，用一期搞定，看一看不亏吧？哔哩哔哩bilibili](https://www.bilibili.com/video/BV1Wh411A73b)
