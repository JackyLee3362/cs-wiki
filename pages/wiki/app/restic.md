---
title: restic
description:
date: 2026-09-01
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 初始化

```sh
# 常规初始化，需要输入密码
restic init [-r|--repo] path/to/repository
# 无密码初始化
restic init -r path/to/repository --insecure-no-password
```

## 备份

```sh
restic [-r|--repo] path/to/repository backup path/to/directory
# 无密码
restic -r 备份仓库地址 backup 待备份数据 --insecure-no-password

# 展示快照
restic [-r|--repo] path/to/repository snapshots

# 恢复快照
restic [-r|--repo] path/to/repository restore latest|snapshot_id --target path/to/target

# 恢复快照到指定目录
restic [-r|--repo] path/to/repository restore snapshot_id --target path/to/target --include path/to/restore

# 只保留最新快照
restic forget --keep-last 1 --prune
```
