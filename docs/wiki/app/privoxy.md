---
title: Privoxy
description: 可按规则修改请求与响应的非缓存 HTTP 代理。
date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - 代理
categories:
  - 命令行
---

Privoxy 是非缓存 HTTP 代理，重点是按规则过滤请求、响应和可见的网页内容；它不是 VPN，也不适合用作下载缓存。客户端需显式配置代理。普通 HTTPS CONNECT 隧道内的正文不能直接过滤；HTTPS 内容检查需要另行配置 TLS inspection。

## 安装与验证

Debian / Ubuntu 示例，配置文件位于 `/etc/privoxy/`。其他系统按[官方安装说明](https://www.privoxy.org/user-manual/installation.html)选择安装包。

```sh
sudo apt-get install privoxy
privoxy --version
sudo privoxy --config-test /etc/privoxy/config
sudo systemctl enable --now privoxy
curl --proxy http://127.0.0.1:8118 http://config.privoxy.org/
```

默认只监听 `127.0.0.1:8118`；将浏览器的 HTTP 和 HTTPS 代理设置为该地址即可使用。最后一条命令请求 Privoxy 自带的配置页面，用于确认请求确实经过代理；本文命令未在实际主机执行验证。

## 基本配置

- 主配置文件 `config` 控制监听地址、日志和规则文件；个人规则写入 `user.action`、`user.filter`，避免更新时覆盖默认规则。
- 保持监听地址为本机；如需服务局域网客户端，应同时限制来源和防火墙，避免开放代理。
- 规则只影响经过 Privoxy 的请求。HTTPS 隧道内的页面内容默认不可见；启用 TLS inspection 前要另行评估证书和信任配置。

## 参考资料

- [官网](https://www.privoxy.org/)
- [官方源码仓库（Git）](https://www.privoxy.org/git/privoxy.git)
- [用户手册](https://www.privoxy.org/user-manual/)
- [正向代理工具对比](docs/compare/service/compare-forward-proxy.md)
- [Squid](docs/wiki/app/squid.md) · [Tinyproxy](docs/wiki/app/tinyproxy.md)
