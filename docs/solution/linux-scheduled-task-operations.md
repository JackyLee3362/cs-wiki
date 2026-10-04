---
title: Linux 定时任务运维手册
description: 使用 systemd timer 创建、检查、排障和停用周期任务。
---

适用于使用 systemd 的 Linux：以 timer 调度、service 执行，用 [systemctl](docs/app/systemctl.md) 管状态、[journalctl](docs/app/journalctl.md) 查日志。以下为通用示例，未在实际 Linux 主机执行验证。

## 创建任务

前提：已创建普通用户 `jobuser`，脚本 `/usr/local/bin/example-job` 可执行且该用户具备所需读写权限；脚本使用绝对路径、正确返回退出码，不依赖交互式 shell 环境。

1. 创建 `/etc/systemd/system/example-job.service`：

```ini
[Unit]
Description=Example scheduled job

[Service]
Type=oneshot
User=jobuser
ExecStart=/usr/local/bin/example-job
TimeoutStartSec=30min
StandardOutput=journal
StandardError=journal
```

2. 创建同目录下的 `example-job.timer`，每天 UTC 02:00 触发：

```ini
[Unit]
Description=Run example job daily

[Timer]
OnCalendar=*-*-* 02:00:00 UTC
Persistent=true

[Install]
WantedBy=timers.target
```

同名 timer 默认触发同名 service。`Persistent=true` 为日历定时器补一次停机期间错过的执行，不会逐次补跑全部历史任务；精确触发还受时钟、精度窗口和系统负载影响。见[官方 timer 手册](https://github.com/systemd/systemd/blob/main/man/systemd.timer.xml)。

## 检查并启用

1. 检查文件与时间表达式：

```sh
sudo systemd-analyze verify /etc/systemd/system/example-job.service /etc/systemd/system/example-job.timer
systemd-analyze calendar '*-*-* 02:00:00 UTC'
sudo systemctl daemon-reload
```

2. 手动执行并核对结果，再开启定时器：

```sh
sudo systemctl start example-job.service
systemctl show example-job.service -p Result -p ExecMainCode -p ExecMainStatus
sudo journalctl -u example-job.service --since '10 minutes ago' --no-pager
sudo systemctl enable --now example-job.timer
systemctl list-timers --all example-job.timer
```

只有任务退出成功且业务产物符合预期，才算验证通过；定时器处于 active 不代表任务执行成功。

## 日常排障

| 现象 | 最短检查 |
| --- | --- |
| 没触发 | `systemctl status example-job.timer`；检查下一次时间、时区和系统时钟 |
| 触发后失败 | `systemctl status example-job.service`，再查对应 service 日志 |
| 手动成功、定时失败 | 核对执行用户、工作目录、PATH、环境变量和文件权限 |
| 只运行一次 | 检查 service 是否仍为 active；周期 oneshot 通常不要设 `RemainAfterExit=yes` |
| 执行超时 | 查看日志和 `TimeoutStartSec`，先确定卡点再调整时限 |
| 修改未生效 | `systemctl cat` 核对实际文件与覆盖项；重载后重启 timer |

同一个 service 未退出时，timer 不会再启动一个并发实例；不同 unit、cron 或手动脚本之间仍可能重叠，需要脚本锁或幂等设计。迁移旧 cron 任务时，验证新任务后停用旧调度，避免重复执行。

## 修改与停用

修改 unit 后重新加载并重启 timer；下次 service 执行使用新配置：

```sh
sudo systemctl daemon-reload
sudo systemctl restart example-job.timer
```

停用后不再定时触发；已经运行的任务仍会继续。仅在确认可以中断时，另行停止 service：

```sh
sudo systemctl disable --now example-job.timer
# 可选：中断正在运行的任务
sudo systemctl stop example-job.service
```
