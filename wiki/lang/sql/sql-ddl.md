---
title: sql-ddl
description:
date: 2025-09-25
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## DDL

### 库操作

```sql
-- 显示数据库
SHOW DATABASES;
-- 使用数据库
USE db_test;
-- 建库
CREATE DATABASE IF NOT EXISTS db_test;
-- 删库
DROP DATABASE IF EXISTS db_test;
```

### 表常规操作

```sql
-- 显示数据表
SHOW TABLES;
-- 建表
CREATE TABLE IF NOT EXISTS user
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname  VARCHAR(50) NOT NULL,
    points      INT NOT NULL DEFAULT 0,
    email       VARCHAR(255) NOT NULL UNIQUE
);
-- 删表
DROP TABLE IF EXISTS user;
-- 显示表
DESC user;
-- 复制表结构
CREATE TABLE user_bak AS SELECT * FROM user
```

### 更改表

```sql
ALTER TABLE user
    -- 新增列
    ADD age INT NOT NULL,
    ADD city VARCHAR(50) NOT NULL AFTER email,
    -- 修改列
    MODIFY COLUMN uname VARCHAR(55) NOT NULL DEFAULT '',
    -- 删除列
    DROP points;
```

> 建立外键关系 ...
> 更改主键 ...
> 更改外键 ...
> 显示存储引擎 `SHOW ENGINES;`
> 更改存储引擎 `ALTER TABLE customers ENGINE = InnoDB;`
> 显示字符集 `SHOW CHARSET;`
> 更改字符集 ...

## 参考资料

> 数据库设计
>
> - Conceptual Models 概念模型
> - Logical Models 逻辑模型
> - Physical Models 物理模型
>
> 数据库范式
>
> - 1st Normal Form: 第一范式
> - 2nd Normal Form: 第二范式
> - 3rd Normal Form: 第三范式
