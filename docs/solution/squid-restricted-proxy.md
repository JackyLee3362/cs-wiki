---
title: Squid：配置受限的本地正向代理
description: 只允许本机访问指定域名，并验证代理规则。
---

目标：本机通过 [Squid](docs/wiki/app/squid.md) 访问允许的站点。示例适用于 Debian / Ubuntu 上的 Squid 5–7，未启动代理实测。

选型见[正向代理工具对比](docs/compare/service/compare-forward-proxy.md)。

## 最小配置

在测试实例的 `/etc/squid/squid.conf` 使用以下完整访问规则；不要追加到已有的宽泛放行规则后面。

```text
http_port 127.0.0.1:3128

acl local_client src 127.0.0.1/32
acl allowed_sites dstdomain .example.com
acl Safe_ports port 80 443
acl SSL_ports port 443
acl CONNECT method CONNECT

http_access deny !Safe_ports
http_access deny CONNECT !SSL_ports
http_access allow local_client allowed_sites
http_access deny all
```

`.example.com` 表示示例域名及其子域，按需替换。这里仅监听本机，不提供局域网或公网代理。规则语义见 [ACL](https://www.squid-cache.org/Doc/config/acl/) 与 [http_access](https://www.squid-cache.org/Doc/config/http_access/)。

## 检查与验证

1. 配置检查成功后，再启动或重载服务：

```sh
sudo squid -k parse
sudo systemctl enable --now squid
sudo systemctl reload squid
```

2. 显式指定代理，分别测试允许与拒绝的域名：

```sh
curl --noproxy "" -I -x http://127.0.0.1:3128 https://example.com
curl --noproxy "" -I -x http://127.0.0.1:3128 https://example.org
```

预期前者可建立隧道，后者被代理拒绝。访问失败时先区分代理拒绝、DNS、网络和目标站点响应；不要为了排障改成 `allow all`。
