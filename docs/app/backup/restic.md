---
title: restic
description:
date: 2026-09-01
update_date: 2026-09-29
draft: false
author: JackyLee
tags:
  - wiki
categories:
comment: true
---

## 简介

restic 是命令行备份工具，以快照保存目录在不同时间的状态，支持加密、去重及多种存储后端。以下以本地仓库为例。

## 安装与验证

Ubuntu / Debian：

```sh
sudo apt update
sudo apt install restic
restic version
```

macOS 可使用 brew install restic；Windows 可从官方发布页下载对应架构的二进制文件，并将所在目录加入 PATH。

## 初始化仓库

选择与源目录分离的存储位置；示例中的 ../restic-repo 不在 ./notes 内：

```sh
restic -r ../restic-repo init
```

按提示设置并妥善保存仓库密码。密码丢失后不能恢复加密数据。日常命令复用同一仓库，不需要再次初始化。

## 备份和查看快照

```sh
restic -r ../restic-repo backup ./notes
restic -r ../restic-repo snapshots
restic -r ../restic-repo ls latest
```

每次备份生成一个快照。退出码非零时应查看错误输出，确认是否有文件未被读取。备份运行中的数据库时，应先获得一致的数据库备份或应用快照。

## 恢复到独立目录

```sh
restic -r ../restic-repo restore latest --target ./restore-test
restic -r ../restic-repo check
```

恢复后在 restore-test 中核对文件和内容；仓库结构检查不能代替实际恢复演练。定期将仓库复制或备份到另一设备，避免源数据与唯一备份同时丢失。

## 快照保留策略

先预览，再按确认过的策略删除快照及回收数据：

```sh
restic -r ../restic-repo forget --keep-daily 7 --keep-weekly 4 --dry-run
# 确认预览符合预期后执行，下面的命令会删除过期快照
restic -r ../restic-repo forget --keep-daily 7 --keep-weekly 4 --prune
```

自动化时可用 RESTIC_PASSWORD_FILE 指定受限权限的密码文件，避免将密码直接写进命令历史。

## 参考资料

### 官方资源

- [官网](https://restic.net/)
- [GitHub 仓库](https://github.com/restic/restic)
- [官方文档](https://restic.readthedocs.io/en/stable/)

### 相关文章

- [tar](docs/app/tar.md)
- [rclone](docs/app/rclone.md)

### 其他参考链接

- [安装说明](https://restic.readthedocs.io/en/stable/020_installation.html) #todo
- [初始化仓库](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html) #todo
- [创建备份](https://restic.readthedocs.io/en/stable/040_backup.html) #todo
- [恢复备份](https://restic.readthedocs.io/en/stable/050_restore.html) #todo
