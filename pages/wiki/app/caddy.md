---
title: caddy
description:
date: 2026-08-12
update_date:
draft: true
author: JackyLee
tags:
  - app/server
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

```yml
services:
  caddy:
    image: caddy:2-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "443:443/udp"
    volumes:
      - ./conf:/etc/caddy
      - ./site:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```

./conf/CaddyFile

```conf
# 裸IP HTTP测试
http:// {
  respond "Caddy Running..."
}

# 示例：监控面板，替换成你的域名
monitor.xxx.com {
  reverse_proxy host.docker.internal:19999
}
```

## 验证和重载配置

```sh
docker exec caddy容器名 caddy validate --config /etc/caddy/Caddyfile

# 或者
docker exec caddy容器名 caddy reload --config /etc/caddy/Caddyfile

# 用这个
cd /opt/caddy/ && docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
```

## 配置格式化

```sh
docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
docker compose exec caddy caddy fmt --overwrite /etc/caddy/Caddyfile
```

## 参考资料
