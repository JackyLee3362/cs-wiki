---
title: journalctl
update_date: 2026-10-09
description: 按服务、时间和启动批次查询 systemd journal。
---

`journalctl` 查询 systemd-journald 收集的日志；正确拼写是 `journalctl`。查询系统服务日志时，权限不足可使用 sudo。

## 常用查询

```sh
# 本次启动中，指定服务的最近 100 条日志
sudo journalctl -u example-job.service -b -n 100 --no-pager

# 实时跟踪，Ctrl+C 仅退出查看，不停止服务
sudo journalctl -u example-job.service -f

# 时间范围与易读时间戳
sudo journalctl -u example-job.service --since 'today' -o short-iso --no-pager

# 上次启动及可查询的启动批次
sudo journalctl --list-boots
sudo journalctl -u example-job.service -b -1 --no-pager

# warning 及更严重级别
sudo journalctl -u example-job.service -p warning --since '1 hour ago'
```

## 关键坑点

- `.timer` 日志主要反映调度，任务输出通常应查对应 `.service`。
- 日志保留受 journald 存储和轮转设置影响；重启后查不到历史，不代表任务从未运行。
- 应用写入独立文件的日志不一定进入 journal；检查服务的输出配置和应用日志设置。
- `-p` 按日志级别过滤，普通标准输出不一定被识别成错误；排障先看完整时间范围。

## 参考资料

- [systemd 官网](https://systemd.io/) · [源码](https://github.com/systemd/systemd)
- [官方手册](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html) · [手册源码](https://github.com/systemd/systemd/blob/main/man/journalctl.xml)
- [systemctl](docs/app/linux/systemctl.md) · [Linux 定时任务运维手册](docs/solution/linux-scheduled-task-operations.md)
