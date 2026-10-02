---
title: acl
description:
date: 2026-10-02
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 安装

```sh
sudo apt update
sudo apt install acl
# 查看版本
setfacl --version
getfacl --version

# 给现有文件/目录添加 jackylee 只读权限
sudo setfacl -R -m u:jackylee:rX /path/to/file/or/dir

# 让以后新创建的文件/目录继承
sudo setfacl -R -d -m u:jackylee:rX /path/to/file/or/dir
```
