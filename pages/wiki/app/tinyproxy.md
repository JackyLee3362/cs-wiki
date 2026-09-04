---
title: tinyproxy
description:
date: 2026-09-04
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 安装

### linux安装

```sh
apt update
apt install tinyproxy -y

# 备份原文件
cp /etc/tinyproxy/tinyproxy.conf /etc/tinyproxy/tinyproxy.conf.bak
```

### 1、VPS 上确认 tinyproxy 配置（不变）

`vim /etc/tinyproxy/tinyproxy.conf`

```conf
DisableViaHeader Yes
LogLevel Critical
Port 8888
Listen 127.0.0.1
Allow 127.0.0.1
DisableViaHeader Yes
LogLevel Critical
```

### 启动

```sh
systemctl restart tinyproxy
systemctl enable tinyproxy
```

### 连接

```sh
ssh -N -L 127.0.0.1:8888:127.0.0.1:8888 vpsuser@搬瓦工IP
# -L 本地转发
# ‑L（Local，本地转发）：把远端端口映射到【你当前这台电脑】
# 当前机器开端口，流量通过 ssh 隧道送到**远程服务器**。

# -R 远程转发
# ‑R（Remote，远程转发）：把本机端口映射到【远端服务器】
# 在远程服务器上开端口，流量通过隧道传回**你当前电脑**
```

