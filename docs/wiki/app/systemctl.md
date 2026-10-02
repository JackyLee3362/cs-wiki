---
title: systemctl
description: 管理 systemd 服务、定时器与启动状态。
---

`systemctl` 管理 systemd unit；`.service` 描述任务，`.timer` 决定触发时间。以下使用系统级 unit，修改状态通常需要 sudo。

## 查看与操作

```sh
systemctl status example-job.service --no-pager
systemctl cat example-job.service
systemctl list-timers --all
systemctl --failed
sudo systemctl start example-job.service
sudo systemctl stop example-job.service
sudo systemctl restart example-job.service
```

## 配置与自启

```sh
sudo systemctl daemon-reload
sudo systemctl enable --now example-job.timer
sudo systemctl disable --now example-job.timer
```

- `start` 启动当前实例，`enable` 配置自启；`enable --now` 同时执行两者。
- `daemon-reload` 重新读取 unit 文件；`reload` 请求服务重载应用配置，需要服务支持；`restart` 停止后重新启动。
- `start --no-block` 只提交启动作业，不等待完成；一次性任务成功后显示 `inactive (dead)` 可以是正常状态，应结合退出结果和日志判断。
- 停止 timer 不会停止已触发的 service。用户级 unit 使用 `systemctl --user`，与系统级作用域不同。

## 参考资料

- [systemd 官网](https://systemd.io/) · [源码](https://github.com/systemd/systemd)
- [官方手册](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html) · [手册源码](https://github.com/systemd/systemd/blob/main/man/systemctl.xml)
- [journalctl](docs/wiki/app/journalctl.md) · [Linux 定时任务运维手册](docs/solution/linux-scheduled-task-operations.md)
