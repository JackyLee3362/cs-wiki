---
title: rclone
description:
date: 2026-08-30
update_date: 2026-09-29
draft: false
author: JackyLee
tags:
  - wiki
categories:
comment: true
---

## 简介

rclone 用统一的命令管理本地目录、对象存储、网盘和 SFTP。远程路径写作 remote:path，冒号用于区分远程连接名与本地目录。

## 安装与验证

Windows 从 [官方安装页](https://rclone.org/install/)下载对应架构的压缩包，解压后把 rclone.exe 所在目录加入 PATH。macOS 已安装 Homebrew 时可用 brew install rclone。

```sh
# Ubuntu / Debian 的发行版软件包
sudo apt update
sudo apt install rclone
rclone version
```

## 基本使用：本地复制

先创建一个包含示例文件的 notes 目录，预览操作后再复制：

```sh
rclone copy ./notes ./notes-copy --dry-run
rclone copy ./notes ./notes-copy --progress
rclone check ./notes ./notes-copy
```

copy 不会因为源文件被删除而删除目标文件；sync 则会让目标与源一致，可能删除目标中多余的文件。初次使用先采用 copy。

## 配置远程连接

```sh
rclone config
rclone config file
rclone listremotes
rclone lsd myremote:
rclone copy ./notes myremote:notes --dry-run
```

在交互配置中创建名为 myremote 的连接，并按实际存储类型完成认证。确认预览后去掉 --dry-run。配置文件可能包含访问令牌，应与文章、代码仓库分开保存。

## 配置

```sh
# 交互式配置
rclone config

# 查看配置文件路径
rclone config file
```

## 配置文件

```conf
[连接名]
type = sftp
host = 主机名
user = 用户名
key_file = 密钥路径
```

## 测试连接

```sh
rclone ls 连接名:
```

## 参考资料

### 官方资源

- [官网](https://rclone.org/)
- [GitHub 仓库](https://github.com/rclone/rclone)
- [官方文档](https://rclone.org/docs/)

### 相关文章

- [Syncthing](docs/wiki/app/syncthing.md)
- [restic](docs/wiki/app/backup/restic.md)

### 其他参考链接

- [rclone 安装](https://rclone.org/install/) #todo
- [rclone 使用文档](https://rclone.org/docs/) #todo
