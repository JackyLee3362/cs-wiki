---
title: systemd-timer
description:
date: 2026-09-12
update_date:
draft: true
author: JackyLee
tags:
  - wiki
categories:
comment: true
---

## 查看本机已存在 timer

```sh
# 列出全部timer，包括系统自带 + 你自己创建的
systemctl list-timers --all

# 看自建timer详情
systemctl cat some-app-backup.timer

# 看自建timer状态
systemctl status some-app-backup.timer

# 看自建 service
systemctl cat some-app-backup.service

# 看自建 service
systemctl status some-app-backup.service
```

## 常用命令

```sh
# 修改完 service/timer 文件后，必须重载systemd配置
sudo systemctl daemon-reload

# 启用并启动定时器（开机自启+立刻激活闹钟）
sudo systemctl enable --now some-app-backup.timer

# 只看备份任务日志
journalctl -u some-app-backup.service

# 实时跟踪日志
journalctl -u some-app-backup.service -f

# 手动立即跑一次备份，测试脚本是否正常
sudo systemctl start some-app-backup.service

# 停止定时器（不再自动触发）
sudo systemctl stop some-app-backup.timer

# 禁用开机自启
sudo systemctl disable some-app-backup.timer
```

## 最佳实践

```sh
# 提交启动作业后立即返回，不代表任务已完成
sudo systemctl start --no-block some-app-backup.service
# 查看日志
journalctl -u some-app-backup.service -f

```

## 相关条目

- [systemctl：管理服务与定时器](docs/app/systemctl.md)
- [journalctl：查询任务日志](docs/app/journalctl.md)
- [Linux 定时任务运维手册](docs/solution/linux-scheduled-task-operations.md)
