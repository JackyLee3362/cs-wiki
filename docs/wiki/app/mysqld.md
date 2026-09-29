---
type: basic-note
title: mysqld
author: JackyLee
create_time: 2026-04-18
update_time:
tags:
  - app/server
description:
---

## mysql 安装

### mac

使用 `scoop install mysql` 安装成功后弹出信息

```sh
'mysql' (9.4.0) was installed successfully!
Notes
-----
Run 'mysqld --standalone' or 'mysqld --console' to start the Database,
or run following command as administrator to register MySQL as a service. See:
https://dev.mysql.com/doc/refman/en/windows-start-service.html

mysqld --install MySQL --defaults-file="C:\Users\JACKYLEE\scoop\apps\mysql\current\my.ini"

To stop and/or delete the Service run 'sc stop MySQL' and 'sc delete MySQL'.
'mysql' suggests installing 'mysql-shell'.
'mysql' suggests installing 'extras/vcredist2022'.
```

### macos

```sh
brew install mysql@8.0
# 或者
brew install mysql

```

```sh
mysql@8.0
We've installed your MySQL database without a root password. To secure it run:
mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
mysql -u root

mysql@8.0 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have mysql@8.0 first in your PATH, run:
echo 'export PATH="/opt/homebrew/opt/mysql@8.0/bin:$PATH"' >> ~/.zshrc

For compilers to find mysql@8.0 you may need to set:
export LDFLAGS="-L/opt/homebrew/opt/mysql@8.0/lib"
export CPPFLAGS="-I/opt/homebrew/opt/mysql@8.0/include"

To start mysql@8.0 now and restart at login:
brew services start mysql@8.0
Or, if you don't want/need a background service you can just run:
/opt/homebrew/opt/mysql@8.0/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
```

## windows 安装

```sh
# 安装
scoop install mysql
# 查看版本详情
scoop info mysql
# 查看版本
mysqld --version
mysql --version
```

## windows 运行与停止

```sh
# 控制台启动
mysqld --console
# 后台启动
mysqld --standalone
# 关闭时运行两条命令
sc stop mysql
sc delete mysql
```

## windows 查看当前 MySQL 服务状态

```sh
# 方案1:
sc query mysql
# ✅ 存在并启动：会显示STATE为4 RUNNING，同时展示服务名称、类型等信息；
# ✅ 存在但未启动：STATE为1 STOPPED；
# ❌ 不存在：提示[SC] 枚举服务状态失败 1060: 指定的服务未安装。
# 或者
sc query | findstr /i mysql

# 方案二:最简单
tasklist | findstr /i mysql

# 方案三:最详细
wmic process where "name like '%mysql%'" get name,processid,executablepath
```

> sc 是 Windows 系统中用于管理系统服务的核心命令行工具，
> 全称是 Service Control（服务控制），
> 专门用来对 Windows 系统服务执行查询、创建、启动、停止、删除、配置等操作，
> 是比图形化services.msc更灵活的纯命令行管理方式，支持在批处理 / 脚本中自动化操作服务，
> 需在 CMD/PowerShell 中运行（部分操作需管理员权限）。

## windows FAQ

### Mysql 如何在 windows 移动数据文件夹

### windows 如何更改数据库的位置

[原文](https://blog.csdn.net/weixin_47455594/article/details/125708515)

第一步 查找数据库存数位置

```sql
show global variables like "%datadir%";
```

第二步 停止 mysql 服务，然后启动

```shell
net stop mysql80
net start mysql80
```

## 参考资料
