---
title: sql-dml-delete
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
