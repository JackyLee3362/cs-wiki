---
title: sql-dml-insert
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
