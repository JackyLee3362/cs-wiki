---
title: ufw
date: 2026-08-16
draft: false
author: JackyLee
tags:
  - app/command-line
  - 命令行
  - 网络
  - 防火墙
categories:
  - wiki/命令行
comment: false
---

> 查看 `tldr ufw`

## 安装 ufw

```sh
sudo apt install ufw
```

## 开启和关闭 ufw

```sh
sudo ufw enable
sudo ufw disable
```

## 添加规则

```sh
sudo ufw allow
sudo ufw allow 22/tcp # 例如添加ssh端口,防止断开
```

## 拒绝规则

```sh
sudo ufw deny 22/tcp
```

## 查看规则

```sh
sudo ufw status
sudo ufw status verbose
```

## 删除规则

```sh
# 删除
sudo ufw delete $rule_number
```
