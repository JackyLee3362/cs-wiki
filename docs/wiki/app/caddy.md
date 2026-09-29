---
title: Caddy
description:
date: 2026-08-12
update_date: 2026-09-29
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
---

## 简介

Caddy 是 Web 服务器，使用 Caddyfile 配置静态站点和反向代理。满足域名解析、网络访问及证书签发条件时，可自动管理 HTTPS。

## 安装与验证

从 [官方安装页](https://caddyserver.com/docs/install)选择系统软件包或对应平台的二进制文件，放入 PATH 后验证：

```sh
caddy version
caddy help
```

macOS 已安装 Homebrew 时可使用 brew install caddy。Linux 服务器的官方软件包通常同时提供 systemd 服务。

## 基本使用：本地静态网站

在包含 index.html 的目录运行：

```sh
caddy file-server --root . --listen 127.0.0.1:8080
```

访问 [本地站点](http://127.0.0.1:8080)；前台运行时按 Ctrl+C 停止。

也可以创建名为 Caddyfile 的文件，注意大小写：

```text
http://localhost:8080 {
    bind 127.0.0.1
    root * ./build
    file_server
}
```

```sh
caddy fmt --overwrite Caddyfile
caddy validate --config Caddyfile --adapter caddyfile
caddy run --config Caddyfile --adapter caddyfile
```

## 反向代理

本地测试代理到 3000 端口：

```text
http://localhost:8080 {
    bind 127.0.0.1
    reverse_proxy 127.0.0.1:3000
}
```

公网部署静态知识库可以使用：

```text
wiki.jackylee.top {
    root * /opt/caddy/site/wiki
    file_server
}
```

域名应解析到服务器，并满足所用证书验证方式的要求；常规部署需放通 80、443 端口。服务进程必须有权读取站点目录。

## Docker Compose 部署

创建 conf/Caddyfile 和 site/index.html，保存以下 compose.yaml：

```yaml
services:
  caddy:
    image: caddy:2-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./conf:/etc/caddy:ro
      - ./site:/srv:ro
      - caddy_data:/data
      - caddy_config:/config
volumes:
  caddy_data:
  caddy_config:
```

容器中的静态站点根目录使用 /srv，证书和状态保存在命名卷中。

```sh
docker compose up -d
docker compose logs --tail 50 caddy
docker compose exec caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile
```

容器内的 127.0.0.1 指向容器自身。代理同一 Compose 网络的服务时用服务名，例如 app:3000。Podman rootless 若不能绑定低端口，可先映射本机 8080 到容器 80。

## 参考资料

- [Caddy 安装说明](https://caddyserver.com/docs/install)
- [静态文件快速入门](https://caddyserver.com/docs/quick-starts/static-files)
- [反向代理指令](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)
- [Caddy 命令行](https://caddyserver.com/docs/command-line)
