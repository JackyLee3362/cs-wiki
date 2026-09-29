---
title: OpenSSH
date: 2026-08-16
draft: false
author: JackyLee
tags:
  - wiki
  - 命令行
categories:
  - wiki/命令行
comment: false
update_date: 2026-09-29
---

## 安装与验证

SSH 客户端连接远程机器，SSH 服务端接受连接，两者应分开理解。macOS 通常自带客户端；Windows 可在“可选功能”中安装 OpenSSH 客户端。

```sh
# Ubuntu / Debian 客户端
sudo apt update
sudo apt install openssh-client
ssh -V
```

若 Linux 主机需要接受连接，再安装 openssh-server，并检查服务状态。发行版的服务名可能是 ssh 或 sshd。

## 基本使用：登录与排查

```sh
ssh user@server.example.com
ssh -p 2222 user@server.example.com
ssh -v user@server.example.com
```

主机和端口为占位示例。首次连接时，核对服务器提供的主机密钥指纹再接受提示。Connection refused 通常应检查服务和端口；Permission denied 应检查账号与认证方式。

## 密钥登录

```sh
ssh-keygen -t ed25519 -C "my-device"
ssh -i ~/.ssh/id_ed25519 user@server.example.com
```

把公钥 id_ed25519.pub 按服务器管理方式加入目标用户的 authorized_keys，私钥留在本机。已有密钥时不要覆盖原文件。Linux / macOS 的公钥复制也可使用 ssh-copy-id。

## 客户端配置

在 ~/.ssh/config 中保存常用连接，Windows 对应用户目录下的 .ssh/config：

```sshconfig
Host lab
    HostName server.example.com
    User user
    Port 2222
    IdentityFile ~/.ssh/id_ed25519
```

之后执行 ssh lab。用 ssh -G lab 查看合并后的配置。

## 本地端口转发

```sh
ssh -N -L 127.0.0.1:8080:127.0.0.1:3000 lab
```

这会把本机 8080 转发到 lab 主机的 3000 端口，保持终端运行，按 Ctrl+C 结束该隧道。服务端修改认证配置时，保留当前会话，校验配置后另开会话测试。

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
ssh -N -L 127.0.0.1:8080:127.0.0.1:3000 用户名@主机
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
# 不要用宽泛的进程匹配结束所有 SSH 会话
```

## FAQ

### PAM 密码是什么

PAM = Pluggable Authentication Modules，
可插拔认证模块，
是 Linux 的一套认证框架，不是某一个密码，是一套认证机制。

SSH、sudo、su、登录屏幕，全都靠 PAM 来做身份校验。

## 参考资料

### 官方资源

- [官网](https://www.openssh.com/)
- [GitHub 仓库：Portable OpenSSH](https://github.com/openssh/openssh-portable)
- [官方文档](https://www.openssh.com/manual.html)

### 相关文章

- [Tailscale](docs/wiki/app/tailscale.md)
- [Git](docs/wiki/app/git/git.md)

### 其他参考链接

- [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) #todo
- 将公钥添加到Github: [Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) #todo
- [Testing your SSH connection - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection) #todo
- [两步教你用 ssh 连接 Termux，在电脑上便捷使用 termux。 - 知乎](https://zhuanlan.zhihu.com/p/550073316) #todo
- [SSH开启（win10） - 知乎](https://zhuanlan.zhihu.com/p/391373172) #todo
- [适用于 Windows 的 OpenSSH 入门 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse) #todo

- [OpenSSH 客户端手册](https://man.openbsd.org/ssh) #todo
- [Windows OpenSSH 安装](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) #todo
