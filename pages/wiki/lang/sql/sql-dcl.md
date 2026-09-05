---
title: sql-dcl
description:
date: 2025-09-25
draft: true
author: JackyLee
tags:
categories:
comment: true
---

DCL, 数据控制语言(权限)

## 用户管理

```sql
-- 新建用户
CREATE USER john IDENTIFIED BY '1234';
-- john
-- john@129.7.0.58
-- john@localhost
-- john@'%.outlook.com'

-- 查看用户
SELECT * FROM mysql.user;

-- 查看用户权限
SELECT Host, User,
Select_priv, Insert_priv, Delete_priv, Update_priv, Create_priv, Drop_priv
password_last_changed
FROM mysql.user;

-- 删除用户
CREATE USER bob@outlook.com IDENTIFIED BY '1234';
DROP USER bob@outlook.com;
```

## 授予权限

```sql
-- 查看权限
SHOW GRANTS FOR ${username};
-- 查看某个具体权限
SELECT Host, User, Select_priv FROM mysql.user;

-- 赋予权限
-- 某个数据库全部数据表
GRANT CREATE VIEW ON sql_store.* TO ${username};
GRANT SELECT VIEW ON sql_store.* TO ${username};
GRANT INSERT VIEW ON sql_store.* TO ${username};
GRANT UPDATE VIEW ON sql_store.* TO ${username};
GRANT DELETE VIEW ON sql_store.* TO ${username};
GRANT EXECUTE VIEW ON sql_store.* TO ${username};
GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON sql_store.* TO ${username}

-- 撤销权限
-- 某个数据库全部数据表
REVOKE CREATE VIEW ON sql_store.* FROM ${username};
```

### 场景

场景 1: 对于应用 moon_app 授予某个数据库权限，对于管理员 john 授予全部数据库权限

```sql
-- 创建用户
CREATE USER moon_app IDENTIFIED BY '1234';

-- 授予权限
GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON sql_store.*  TO moon_app
-- GRANT SELECT, INSERT, UPDATE, DELETE, EXECUTE ON ON sql_store.customers  TO moon_app

-- GOOGLE mysql privileges
GRANT ALL ON *.* TO john;
```
