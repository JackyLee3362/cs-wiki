---
title: MySQL 密码管理与恢复
description: 密码修改与恢复
date: 2026-10-02
author: JackyLee
tags:
  - wiki
---

适用于 MySQL 8 与 MariaDB，认证方式按实际版本确认。

## 修改密码

改环境变量不会修改已有数据库账号，必须执行 SQL。

```sql
-- 修改自身密码
ALTER USER CURRENT_USER() IDENTIFIED BY '<新密码>';

-- 管理员修改指定账号，Host 以查询结果为准
SELECT User, Host FROM mysql.user WHERE User = '<账号>';
ALTER USER '<账号>'@'<Host>' IDENTIFIED BY '<新密码>';
```

改完同步应用和备份任务的密码。

## 忘记管理员密码

先备份、停应用和数据库。用原镜像、原数据挂载启动临时恢复实例，不发布端口：

```text
--skip-grant-tables
--skip-networking
```

通过本地 socket 登录：

```bash
mysql -u root
# MariaDB 使用 mariadb -u root
```

```sql
FLUSH PRIVILEGES;
SELECT User, Host FROM mysql.user;
ALTER USER '<账号>'@'<Host>' IDENTIFIED BY '<新密码>';
```

停止恢复实例 → 同步密码配置 → 正常启动 → 验证登录和应用。

**关键：** 不删数据、不同时启动两个实例读写同一目录；修改 root 前确认认证方式，避免移除 socket 认证。

## 参考资料

- [MySQL 密码恢复](https://dev.mysql.com/doc/refman/8.4/en/resetting-permissions.html)
- [MariaDB 官网](https://mariadb.org/) · [源码](https://github.com/MariaDB/server) · [文档](https://mariadb.com/docs/) #todo
- [镜像环境变量](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/installing-mariadb/binary-packages/automated-mariadb-deployment-and-administration/docker-and-mariadb/mariadb-server-docker-official-image-environment-variables) #todo
- [ALTER USER](https://mariadb.com/docs/server/reference/sql-statements/account-management-sql-statements/alter-user) #todo
- [恢复参数](https://mariadb.com/docs/server/server-management/starting-and-stopping-mariadb/mariadbd-options) #todo
- [MySQL](docs/app/mysql.md) · [Podman](docs/app/docker/podman/index.md)
- [原始聊天](https://chatgpt.com/share/6abf6199-dc40-83e8-b7a2-10d58b78dcee) #todo
