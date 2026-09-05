---
title: sql-dml
description:
date: 2025-09-25
draft: true
author: JackyLee
tags:
categories:
comment: true
---

> DML

## INSERT

```sql
-- 单行
INSERT INTO user VALUE (DEFAULT, 'Alice', 18, '1990-01-01', NULL)
-- 单行指定列
INSERT INTO user (name, age, birth) VALUE ('Alice', 20, '1990-01-01');
-- 多行指定列
INSERT INTO user (name, age, birth) VALUES
  ('alice', 15, '1990-01-01'),
  ('bob', 11, '1994-03-13'),
  ('cindy', 12, '1993-04-25');
-- 使用 LAST_INSERT_ID
INSERT INTO user(id, name, age)
VALUES
  (LAST_INSERT_ID(), 'bob', 10),
    (LAST_INSERT_ID(), 'cindy', 13)
```

## UPDATE

### 更新单行

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

### 更新多行

```sql
UPDATE user
SET age = age + 1
WHERE birth_date <  '1990-01-01'
```

### 使用子查询更新

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

## DELETE

```sql
-- 普通删除
DELETE FROM user WHERE id = 1;
-- 从子查询中删除
DELETE FROM user
WHERE dep_id IN (
    SELECT id
    FROM department
    WHERE id > 3
);
```
