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

## 客户端连接服务器

```sh
tailscale up --auth-key=hskey-auth-xxx --force-reauth --login-server=你的域名 --operator=用户名
# hskey-auth   : headscale服务器的 auth-key
# login-server : 域名公网 headscale 域名，如 https://xxx.xxx
# operator     : 在 headscale 注册的用户，如果用户不存在，会自动归属 default

# windows必须 + --unattended
tailscale up --login-server=https://你的域名 --auth-key=hskey-auth-xxx --accept-dns=true --accept-routes=true --unattended
# --accept-dns=true：接收 Headscale 下发 DNS/MagicDNS
# --accept-routes=true：接收子网路由，访问其他节点的内网

# windows 打开网页
tailscale web

# 查看当前客户端生效参数
tailscale debug prefs
```

[[headscale#服务端注册客户端]]

## 服务端删除节点

```sh
podman exec -it headscale headscale nodes list
# 逐个删除
podman exec headscale headscale nodes delete --identifier 查询到的id
```

## 安装

- [Install Tailscale on Linux · Tailscale Docs](https://tailscale.com/docs/install/linux)
- [Tailscale玩法之内网穿透、异地组网、全隧道模式、纯IP的双栈DERP搭建、Headscale协调服务器搭建，用一期搞定，看一看不亏吧？哔哩哔哩bilibili](https://www.bilibili.com/video/BV1Wh411A73b)
- [Headscale 完全指南：自建 Tailscale 控制服务器，零成本私有组网 | 0xJessdy - 专注Web3、AI、代理、开源项目](https://www.jessdy.com/posts/proxies/headscale-self-hosted-2026)
