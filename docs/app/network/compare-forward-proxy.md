---
title: 正向代理对比：Squid、Tinyproxy 与 Privoxy
description: 区分客户端出网代理、网站反向代理和 VPN，并按需求选择。
date: 2026-10-03
---

**Squid 解决「让客户端通过统一出口访问网站，并控制谁能访问什么」的问题。** 例如多台构建主机需要按域名白名单访问外部 HTTP 服务，可在代理侧集中控制和记录请求。

## 同类工具怎么选

| 工具 | 侧重点 | 适合场景 | 代价或限制 |
| --- | --- | --- | --- |
| [Squid](https://www.squid-cache.org/Intro/) | HTTP 代理、ACL、认证、日志与缓存 | 多客户端统一出网，需要细粒度规则 | 配置和缓存策略较多；HTTPS 隧道内的正文不能直接缓存 |
| [Tinyproxy](https://tinyproxy.github.io/) | 轻量 HTTP/HTTPS 转发、基础访问控制 | 少量客户端只需要简单代理 | 不以复杂缓存与集中治理为核心 |
| [Privoxy](https://www.privoxy.org/user-manual/introduction.html) | 隐私、请求与内容过滤，不提供缓存 | 希望按规则过滤可见的 HTTP 内容 | HTTPS 内容过滤需额外解密条件，不能把隧道当成明文 |

以上为官方定位对比，未进行吞吐或内存实测。只需转发可先试 Tinyproxy；需要集中 ACL、日志和缓存策略时再评估 Squid；过滤内容是主要目标时评估 Privoxy。

## 与 Nginx、Caddy、VPN 的区别

| 需求 | 工具类别 | 请求方向 |
| --- | --- | --- |
| 控制内网客户端访问外部网站 | Squid 等正向代理 | 客户端 → 代理 → 外部站点 |
| 给自己的应用提供域名、HTTPS、负载均衡 | Nginx / Caddy 等反向代理 | 外部访客 → 入口代理 → 自己的应用 |
| 跨网络访问多种协议与私有地址 | VPN | 在网络层建立连接，不局限于 HTTP |

这是典型分工，不代表软件只能用于一种模式。Squid 不是部署网站 HTTPS 入口的默认替代品；设置 HTTP 代理也不会自动接管全部程序或协议。

## 选型前的关键判断

- 如果只是为了「HTTPS 下载加速」，先验证缓存是否真的可用；CONNECT 通常只建立加密隧道。
- 代理规则只约束经过代理的请求；必须强制统一出口时，还需要网络层限制直连。
- 先限制来源、目标和端口，再开放访问，避免形成开放代理。

## 站内说明与实践

- [Squid 应用说明](docs/app/squid.md) · [Privoxy 应用说明](docs/app/privoxy.md)
- [受限本地正向代理示例](docs/solution/squid-restricted-proxy.md)
- [Nginx](docs/app/nginx.md) · [Caddy](docs/app/caddy.md)
