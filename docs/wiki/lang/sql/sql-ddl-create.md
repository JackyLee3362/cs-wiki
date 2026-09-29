---
title: sql-ddl-create
description:
date: 2025-09-25
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 库操作

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

## 表常规操作

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