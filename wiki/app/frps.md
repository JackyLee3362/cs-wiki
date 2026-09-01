---
title: frps
description:
date: 2026-08-29
update_date:
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

## docker-compose

```yml
services:
  frps:
    image: fatedier/frps:latest
    container_name: frps
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./frps.toml:/etc/frp/frps.toml:ro
```

## 配置文件

- [frp/conf/frps_full_example.toml at dev · fatedier/frp](https://github.com/fatedier/frp/blob/dev/conf/frps_full_example.toml)

查看这个配置文件

## 校验部署成功

```sh
# 如果是 up 则部署成功
docker ps | grep frps

# 如果没有报错部署成功
docker logs frps

ss -tulpn | grep -E "7000|7500|9001"
```

## 校验联通成功

```sh
curl -v -H "Host:photo.jackylee.fun" http://127.0.0.1:9091
```

## frps 配置的三个端口含义

|端口|用途|是否需要安全组放行公网|
|7000|frpc 隧道连接|✅放行 TCP|
|7500|web 仪表盘|❌禁止公网放行|
|8081|HTTP vhost，Caddy 后端|❌禁止公网放行|
