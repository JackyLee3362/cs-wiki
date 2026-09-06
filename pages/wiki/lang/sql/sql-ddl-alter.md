---
title: sql-ddl-alter
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

## 更改表

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