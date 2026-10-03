---
title: Squid
description: 支持访问控制和缓存的 HTTP 代理。
---

Squid 常用作正向代理：客户端主动把请求交给代理，由代理访问目标站点。HTTPS 通常通过 CONNECT 建立隧道；未进行 TLS 解密时，代理不能读取或缓存隧道中的 HTTP 正文。

## 安装与检查

Debian / Ubuntu 软件包示例；其他发行版的配置路径和服务名需核对。

```sh
sudo apt-get install squid
squid -v
sudo squid -k parse
```

## 访问控制

`acl` 定义匹配条件，`http_access` 按顺序决定允许或拒绝；明确以 `http_access deny all` 收尾。不能在前面保留宽泛的放行规则，再期待后面的限制生效。见[访问控制文档](https://www.squid-cache.org/Doc/config/http_access/)。

- 同时限制监听地址、客户端来源和目标端口，避免形成开放代理。
- CONNECT 成功只表示隧道建立；目标站点仍可能认证失败或拒绝访问。
- 下文示例使用 Squid 5–7 的配置指令，升级时核对对应版本文档。

## 参考资料

- [横向比较：Squid、Tinyproxy 与 Privoxy](docs/compare/service/compare-forward-proxy.md)
- [官网](https://www.squid-cache.org/)
- [源码](https://github.com/squid-cache/squid)
- [配置文档](https://www.squid-cache.org/Doc/config/)
- [配置受限的本地正向代理](docs/solution/squid-restricted-proxy.md)
