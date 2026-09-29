---
title: sql-dml-update
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

## 更新单行

```sql
-- 常用
UPDATE user u
SET u.age = 10, u.name = '2019-03-09'
WHERE id = 1;
-- 特殊值
UPDATE user
SET
    u.name = DEFAULT,
    u.age = NULL
WHERE id = 1
-- 动态值
UPDATE user u
SET
    u.age = u.weight * 0.5,
    u.update_time = u.add_time
WHERE id = 1
```

## 更新多行

```sql
UPDATE user
SET age = age + 1
WHERE birth_date <  '1990-01-01'
```

## 使用子查询更新

```sql
UPDATE user u
SET
    u.name = u.first_name
    u.age = u.age + 1
WHERE u.id =
    (SELECT id
    FROM account a
    WHERE a.name = 'admin')
```
