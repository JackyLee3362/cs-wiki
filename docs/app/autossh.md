---
title: autossh
description: 监控并重启中断的 SSH 会话与端口转发。
date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - ssh
---

autossh 启动并监控 `ssh`，连接退出后重新拉起，适合需要长期保持的端口转发；认证、转发目标和访问权限仍由 OpenSSH 决定。

## 安装与基本使用

Debian / Ubuntu 示例。先确认普通 `ssh` 连接和免交互认证可用，再运行 autossh：

```sh
sudo apt-get install autossh
autossh -V
ssh -N -L 127.0.0.1:8080:127.0.0.1:80 user@example.com
autossh -M 0 -N -o ServerAliveInterval=30 -o ServerAliveCountMax=3 -o ExitOnForwardFailure=yes -L 127.0.0.1:8080:127.0.0.1:80 user@example.com
```

以上两条转发命令是先试 SSH、再切换到 autossh 的步骤，不能同时占用本机 8080 端口。`-M 0` 关闭 autossh 自有监控端口；此时依赖 SSH 的 `ServerAlive*` 选项在失联时退出，autossh 才能重启。`ExitOnForwardFailure=yes` 让端口转发建立失败尽早报错。长期运行可交给 systemd 管理；不要关闭主机密钥校验，也不要把口令写进命令。

## 参考资料

- [官网](https://www.harding.motd.ca/autossh/)
- [Debian autossh 手册](https://manpages.debian.org/unstable/autossh/autossh.1.en.html)
- [GitHub 源码镜像（非官方）](https://github.com/Autossh/autossh)
- [OpenSSH](docs/app/ssh.md)
