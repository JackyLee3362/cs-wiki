---
title: Tailscale
date: 2026-08-29T10:51:55+08:00
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
update_date: 2026-09-29
---

## 简介

Tailscale 将设备加入同一个受身份和访问策略控制的私有网络。常规客户端入门与使用 Headscale 自建控制服务器是两种配置路径。

## 安装与验证

Windows、macOS 从 [官方快速入门](https://tailscale.com/docs/how-to/quickstart)下载客户端并登录。Linux 按 [安装文档](https://tailscale.com/docs/install/linux)选择发行版的软件包或官方安装脚本。

```sh
# 已按官方说明安装 Linux 客户端后
tailscale version
sudo tailscale up
tailscale status
tailscale ip -4
```

执行 up 后按输出链接完成身份验证。两台设备登录到同一 tailnet，并检查管理后台中设备的授权状态。

## 基本使用：连接另一台设备

```sh
tailscale ping DEVICE_NAME
ssh user@100.64.0.10
```

DEVICE_NAME 和 IP 都是占位示例，应替换为 status 列出的设备名称或地址。普通 SSH 仍要求对端已启动 SSH 服务并允许该用户登录；安装 Tailscale 不会自动配置 SSH 服务。

## 使用 Headscale 时的区别

自建控制服务器时需额外指定 --login-server，并按 Headscale 的注册流程关联用户。--operator 指定的是本地可操作 Tailscale 的系统用户，不是 Headscale 的用户；是否允许子网路由取决于客户端选项和控制端策略。

连接问题先用 status 与 ping 分别检查设备状态和连通性，再检查目标服务监听地址与访问策略。

- 官网: [Tailscale | Secure Connectivity for AI, IoT & Multi-Cloud](https://tailscale.com/) #todo

## Headscale 客户端配置（进阶）

```sh
tailscale up --auth-key=hskey-auth-xxx --force-reauth --login-server=你的域名 --operator=用户名
# hskey-auth   : headscale服务器的 auth-key
# login-server : 域名公网 headscale 域名，如 https://xxx.xxx
# operator     : 本机获准操作 Tailscale 的系统用户，与 Headscale 用户注册无关

# Windows 无人值守运行时使用 --unattended；普通交互登录不必添加
tailscale up --login-server=https://你的域名 --auth-key=hskey-auth-xxx --accept-dns=true --accept-routes=true --unattended
# --accept-dns=true：接收 Headscale 下发 DNS/MagicDNS
# --accept-routes=true：接收子网路由，访问其他节点的内网

# windows 打开网页
tailscale web

# 查看当前客户端生效参数
tailscale debug prefs
```

[headscale#服务端注册客户端](docs/wiki/app/headscale.md#服务端注册客户端)

## 服务端删除节点

```sh
podman exec -it headscale headscale nodes list
# 逐个删除
podman exec headscale headscale nodes delete --identifier 查询到的id
```

## 安装

- [Install Tailscale on Linux · Tailscale Docs](https://tailscale.com/docs/install/linux) #todo
- [Tailscale玩法之内网穿透、异地组网、全隧道模式、纯IP的双栈DERP搭建、Headscale协调服务器搭建，用一期搞定，看一看不亏吧？哔哩哔哩bilibili](https://www.bilibili.com/video/BV1Wh411A73b) #todo
- [Headscale 完全指南：自建 Tailscale 控制服务器，零成本私有组网 | 0xJessdy - 专注Web3、AI、代理、开源项目](https://www.jessdy.com/posts/proxies/headscale-self-hosted-2026) #todo

## 参考资料

### 官方资源

- [官网](https://tailscale.com/)
- [GitHub 仓库：客户端](https://github.com/tailscale/tailscale)
- [官方文档](https://tailscale.com/docs/)

### 相关文章

- [OpenSSH](docs/wiki/app/ssh.md)

### 其他参考链接

- [Tailscale | Secure Connectivity for AI, IoT & Multi-Cloud](https://tailscale.com/) #todo
- [Install Tailscale on Linux · Tailscale Docs](https://tailscale.com/docs/install/linux) #todo
- [Tailscale玩法之内网穿透、异地组网、全隧道模式、纯IP的双栈DERP搭建、Headscale协调服务器搭建，用一期搞定，看一看不亏吧？哔哩哔哩bilibili](https://www.bilibili.com/video/BV1Wh411A73b) #todo
- [Headscale 完全指南：自建 Tailscale 控制服务器，零成本私有组网 | 0xJessdy - 专注Web3、AI、代理、开源项目](https://www.jessdy.com/posts/proxies/headscale-self-hosted-2026) #todo
- [原笔记链接](https://xxx.xxx) #todo
- [原笔记链接](https://你的域名) #todo
- [官方快速入门](https://tailscale.com/docs/how-to/quickstart) #todo
- [Linux 安装](https://tailscale.com/docs/install/linux) #todo
- [tailscale CLI](https://tailscale.com/docs/reference/tailscale-cli) #todo
