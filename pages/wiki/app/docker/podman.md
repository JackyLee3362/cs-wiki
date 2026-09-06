---
title: podman
description:
date: 2026-09-01
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 代理

### 临时变量

```sh
HTTP_PROXY=http://127.0.0.1:8888 HTTPS_PROXY=http://127.0.0.1:8888 NO_PROXY=127.0.0.1,192.168.0.0/16 podman pull docker.io/nginx
```

### 环境变量配置

```conf
# ssh 转发, 配合 vps 上 tinyproxy
# ssh -N -L 127.0.0.1:8888:127.0.0.1:8888 user@domain
export http_proxy="127.0.0.1:8888"
export httpx_proxy="127.0.0.1:8888"
export HTTP_PROXY="127.0.0.1:8888"
export HTTPS_PROXY="127.0.0.1:8888"
```

> 测试代理链路 `curl -x http://127.0.0.1:8888 https://ifconfig.me`

## FAQ

- [24.podman-registries.conf配置文件 - 知乎](https://zhuanlan.zhihu.com/p/719978088)
