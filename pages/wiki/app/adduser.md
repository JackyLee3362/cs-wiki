---
title: adduser
date: 2026-08-16
draft: false
author: JackyLee
tags:
  - 命令行
  - 命令行
  - linux基础
categories:
  - wiki/命令行
comment: false
---

## 添加新用户

```sh
# 创建用户，同时创建 Home 目录
adduser $your_name

# 比如 
adduser foobar

# 添加管理员权限
usermod -aG sudo foobar
```
