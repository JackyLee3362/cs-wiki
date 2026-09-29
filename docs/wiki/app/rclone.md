---
title: rclone
description:
date: 2026-08-30
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 配置

```sh
# 交互式配置
rclone config

# 查看配置文件路径
rclone config file
```

## 配置文件

```conf
[连接名]
type = sftp
host = 主机名
user = 用户名
key_file = 密钥路径
```

## 测试连接

```sh
rclone ls 连接名
```
