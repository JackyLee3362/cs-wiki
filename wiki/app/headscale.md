---
title: Headerscale
date: 2026-08-29T10:47:26+08:00
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

- [juanfont/headscale at selfh.st](https://github.com/juanfont/headscale)

使用 docker 版本的时候要选择 stable 版本

## 部署

关于Caddy配置

```conf
hs.example.com {
        reverse_proxy headscale:8080 {
                header_up X-Real-IP {remote_host}
                header_up X-Forwarded-For {remote_host}
                header_up X-Forwarded-Proto {scheme}
        }
}
```

## 容器内部检验是否生效

先查看容器内部是否正常

```sh
# 容器内执行
docker compose exec headscale headscale version

# 列出用户（原来的namespaces list）
docker compose exec headscale headscale users list

# 创建一个用户，等价于旧版 namespaces create default
docker compose exec headscale headscale users create default

# 创建预认证密钥，拿到 key 字符串
## 用户id 使用列出用户命令拿到，一般来说是1
docker compose exec headscale headscale preauthkeys create --user [用户id] --reusable --expiration 24h
```

## 服务器上检查生效

```sh
curl http://127.0.0.1:8080/health

# 或者
# 浏览器打开你配置的域名
https://hs.example.demo
```

## 日常运维

```sh
# 查看节点：
docker compose exec headscale headscale nodes list

# 查看全部子命令
docker compose exec headscale headscale --help

# 查看状态
docker compose exec headscale headscale 
```

## FAQ

### config.yaml

关于 base_domain 一般可以随意填写，但是 server_url 必须填写对外暴露的公网地址

### 使用 docker compose logs 显示错误

```log
headscale  | 2026/08/29 03:55:51 Error initializing: ephemeral_node_inactivity_timeout () is set too low, must be more than 1m5s
```
