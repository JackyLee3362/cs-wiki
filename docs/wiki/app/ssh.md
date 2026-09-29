---
title: ssh
date: 2026-08-16
draft: false
author: JackyLee
tags:
  - 命令行
  - 命令行
categories:
  - wiki/命令行
comment: false
---

## 基础

### ssh登录

```sh
ssh $user@$server_ip
```

### ssh配置公钥登录

```sh
su - $user
mkdir -p ~/.ssh
chmod 700 ~/.ssh
# 把你的本地公钥（id_rsa.pub内容）写入authorized_keys
vim ~/.ssh/authorized_keys
```

### 生成公钥

```sh
ssh-keygen -t ed25519
vim ~/.ssh/config
```

### ssh服务器配置文件

```sh
vim /etc/ssh/sshd_config
```

```ini
# 禁止root账号ssh远程登录
PermitRootLogin no

# 关闭密码认证，只允许密钥
PasswordAuthentication no

# 关闭挑战密码认证（有些版本会绕过PasswordAuthentication）
ChallengeResponseAuthentication no

# 启用公钥认证（确保开启）
PubkeyAuthentication yes

# 禁用PAM密码，保留PAM其他功能
UsePAM yes
```

> ⚠️不要直接关闭UsePAM no，会导致 sudo、su 出问题。

```sh
sudo systemctl reload sshd
```

### ssh保持会话

```sh
vim /etc/ssh/sshd_config
```

服务器配置

```ini
TCPKeepAlive yes
# 服务器往客户端发心跳包。单位秒
ClientAliveInterval 60
ClientAliveCountMax 10
```

```sh
# 校验语法
sudo sshd -t

# 重启sshd服务
sudo systemctl reload sshd
```

## 本地测试连接

```sh
ssh -i 私钥文件 用户@服务器ip
```

### 测试ssh连接

```sh
ssh -T git@github.com
```

## 常用

### 建立端口转发

```sh
ssh -L 80:127.0.0.1:8080 用户名@主机
```

### 建立 ssh sock5 隧道

```sh
ssh -fNT -D 1080 user@domain
# -D: 开启动态端口转发（SOCKS5 代理）
# -f: 后台运行
# -T: 不分配伪终端（no tty）。
#     不需要终端交互，配合 `-N`，适合纯隧道场景，减少多余开销。

# 查看进程
ps aux |grep ssh

# 关闭
ps aux | grep "ssh -fNT"
#终止隧道进程
pkill -f "ssh -fNT"
pkill -f ssh
```

## FAQ

### PAM 密码是什么

PAM = Pluggable Authentication Modules，
可插拔认证模块，
是 Linux 的一套认证框架，不是某一个密码，是一套认证机制。

SSH、sudo、su、登录屏幕，全都靠 PAM 来做身份校验。

## 参考资料

- [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- 将公钥添加到Github: [Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [Testing your SSH connection - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)
- [两步教你用 ssh 连接 Termux，在电脑上便捷使用 termux。 - 知乎](https://zhuanlan.zhihu.com/p/550073316)
- [SSH开启（win10） - 知乎](https://zhuanlan.zhihu.com/p/391373172)
- [适用于 Windows 的 OpenSSH 入门 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse)
