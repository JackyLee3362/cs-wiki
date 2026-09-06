---
title: sql-tcl
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

## 事务

A group of SQL statements that represent a single unit of work.

### ACID 特性

- 原子性 Atomicity
- 一致性 Consistency
- 隔离性 Isolation
- 持久性 Durability

## 创建事务

```sql
USE sql_store;

START TRANSACTION;

INSERT INTO orders (customer_id, order_date, state)
VALUES(1, '2019-01-01' ,1);

INSERT INTO order_items
VALUES (LAST_INSERT_ID(), 1, 1, 1);

COMMIT;
```

## 并发和锁

```sql
USE sql_store;
START TRANSACTION;
UPDATE customers
SET points = points + 10
WHERE customer_id = 1;
COMMIT;
```

## 并发问题

- Lost Updates 丢失更新
- Dirty Reads 脏读
- Non-repeating Reads 不可重复读
- Phantom Reads 幻读

## 事务隔离级别

| 隔离级别       | Lost Updates | Dirty Reads | Non-repeating Reads | Phantom Reads |
| -------------- | ------------ | ----------- | ------------------- | ------------- |
| READ UNCOMMITTED |              |             |                     |               |
| READ COMMITTED   |              | O           |                     |               |
| REPEATABLE READ  | O            | O           | O                   |               |
| SERIALIZABLE     | O            | O           | O                   | O             |

- 读未提交 READ UNCOMMITTED
- 读已提交 READ COMMITTED
- 可重复读 REPEATABLE READ
- 序列化 SERIALIZABLE

```sql
SHOW VARIABLES like 'TRANSACTION_ISOLATION';
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

## 死锁

详见 [[deadlock]] 与 [[distributed-transaction]]。