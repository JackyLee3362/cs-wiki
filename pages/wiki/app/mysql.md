---
title: mysql
description:
date: 2025-02-26
update_date:
  - 2025-09-24
  - 2025-11-21
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 安装

```sh
# macos
brew services start mysql@8.0
brew services restart mysql@8.0

#windows
scoop install mysql
scoop info mysql
```

## 启动

```sh
# windows
mysql --standalone
```

## 配置文件

```sh
# 查找 mysql 的配置文件
mysql --help | grep 'my.cnf'
```

## 客户端连接

```sh
# 如果 hostname=localhost 可忽略
mysql -h ${hostname} -u root -p
# (交互式)输入密码
# > ...
```

数据库 Schema

`jdbc:mysql://localhost:3306/test_app?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true`

其中

- useSSL=false
- serverTimezone=Asia/Shanghai
- allowPublicKeyRetrieval=true

### 查看数据库信息

```sql
-- 查看数据库
show databases;

-- 选择数据库
use ${db};

-- 查看数据表
show tables;

-- 查看字符集
show charset;

-- 查看引擎
show engines;
```

## 查看数据表的长度

```sql
SELECT COUNT(*) FROM ${table_name};
```

查看数据长度是否符合要求

```sql
SELECT * FROM ${table_name} WHERE LEN(${column_name}) == 10
```

## 设置密码

```sh
# 无密码
mysql
# 账号 + 密码: 密码一般在环境变量中
mysql -u root -p
## 环境变量
echo $env:MYSQL_USERNAME
echo $env:MYSQL_PASSWORD
# 修改配置
nvim "D:\Scoop\apps\mysql\current\my.ini"
```

## FAQ

### MYSQL 密码忘记了怎么办

> 空密码也是这样设置的

```sql

-- 5.7.6 以前
SET PASSWORD FOR 用户名@localhost = PASSWORD('新密码');

-- 5.7.6 以后
SET PASSWORD FOR 用户名@localhost = '新密码';
SET PASSWORD FOR 用户名 = '新密码';

-- 8.0 以后
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
```

## 忘记密码如何处理

启动 mysql 时跳过授权表

`/etc/my.cnf` 中添加一行然后重新启动

```ini
skip_grant_tables
```
