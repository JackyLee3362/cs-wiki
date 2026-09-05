---
title: docker-network
description:
date: 2026-08-26
update_date:
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 列出 docker 网络

```sh
docker network ls
```

## 创建 docker 网络

```sh
docker network create 网络名
# 比如
docker network create web-shared
```

## 删除 docker 网络

```sh
docker network rm 网络1 [网络2...]
```

## docker 配置

```yaml
# 加入
service:
  服务名:
    networks:
      - web-shared
# 声明
networks:
  web-shared:
    external: true
```

## 查看哪些容器在该网络上

```sh
docker network inspect caddy_net
```

```jsonc
[
  {
    "Name": "web-shared",
    "Id": "...",
    "Created": "...",
    "Scope": "local",
    "Driver": "bridge",
    "EnableIPv6": false,
    "IPAM": {
      "Driver": "default",
      "Options": {},
      "Config": [
        {
          "Subnet": "172.23.0.0/16",
          "Gateway": "172.23.0.1",
        },
      ],
    },
    "Internal": false,
    "Attachable": false,
    "Ingress": false,
    "ConfigFrom": {
      "Network": "",
    },
    "ConfigOnly": false,
    // 说明没有容器加入
    "Containers": {},
    "Options": {},
    "Labels": {},
  },
]
```
