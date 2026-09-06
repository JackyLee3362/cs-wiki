---
title: sql-ddl-index
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

## 新增索引

```sql
EXPLAIN SELECT customer_id FROM customers WHERE state = 'CA';

CREATE INDEX idx_state ON customers (state);

-- 如果是修改表
ALTER TABLE customer_id
DROP INDEX idx_xxx(col_1, col_2)
DROP INDEX idx_yyy(col_3, col_4);
```

### 练习

```sql
EXPLAIN SELECT customer_id FROM customers WHERE points > 1000;

CREATE INDEX idx_points ON customers (points);

-- 如果是修改表
ALTER TABLE customer_id
ADD INDEX idx_xxx(col_1, col_2)
ADD INDEX idx_yyy(col_3, col_4);
```

## 删除索引

```sql
DROP INDEX
```

## 预览索引

```sql
SHOW INDEXES IN customers;

ANALYZE TABLE customers;

SHOW INDEXES IN orders;
```

## 前缀索引

> 适用于字符串列：CHAR / VARCHAR / TEXT / BLOB

```sql
CREATE INDEX idx_lastname ON customers (last_name(20));

SELECT 
    COUNT(DISTINCT LEFT(last_name, 1)),
    COUNT(DISTINCT LEFT(last_name, 5)),
    COUNT(DISTINCT LEFT(last_name, 10))
FROM customers;
```

## 全文索引

```sql
USE sql_blog;
SELECT *
FROM posts
WHERE title LIKE '%react redux%' OR
        body LIKE '%react redux%';
```

```sql
CREATE FULLTEXT INDEX idx_title_body ON posts (title, body);

SELECT * 
FROM posts
WHERE MATCH(title, body) AGAINST('react redux')
```

```sql
SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts
WHERE MATCH(title, body) AGAINST('react redux')
```

```sql
-- 布尔模式
SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts
WHERE MATCH(title, body) AGAINST('react -redux +form' IN BOOLEAN MODE)
```

```sql
-- 短语匹配
SELECT *, MATCH(title, body) AGAINST('react redux')
FROM posts
WHERE MATCH(title, body) AGAINST('"handling a form"' IN BOOLEAN MODE)
```

## 复合索引

```sql
USE sql_store;
EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA' AND points > 1000;
```

```sql
CREATE INDEX idx_state_points ON customers (state, points);
EXPLAIN SELECT customer_id FROM customers
WHERE state = 'CA' AND points > 1000;
```

## 复合索引的列顺序

> 考虑因素：经常使用的列、高基数（cardinality）的列、实际查询

```sql
EXPLAIN SELECT customer_id
FROM customers
USE INDEX (idx_state_lastname)
WHERE state LIKE 'CA' AND last_name LIKE 'A%';

CREATE INDEX idx_state_lastname ON customers
(state, last_name);

CREATE INDEX idx_lastname_state ON customers
(last_name, state);

DROP INDEX idx_lastname_state ON customers;
```

## 索引被忽略的场景

```sql
EXPLAIN 
    SELECT customer_id FROM customers
    WHERE state = 'CA'
    OR points > 1000;

CREATE INDEX idx_points ON customers(points);

EXPLAIN 
    SELECT customer_id FROM customers
    WHERE state = 'CA'
    UNION
    SELECT customer_id FROM customers
    WHERE points > 1000;

EXPLAIN SELECT customer_id FROM customers
WHERE points + 10 > 2010;
```

## 使用索引排序

```sql
EXPLAIN SELECT customer_id FROM customers
ORDER BY state DESC, points DESC;
SHOW STATUS LIKE 'last_query_cost';

-- (a, b)
-- a
-- a, b
-- a DESC, b DESC
```

## 覆盖索引

```sql
EXPLAIN SELECT * FROM customers
ORDER BY state;

EXPLAIN SELECT customer_id, state FROM customers
ORDER BY state;
```

## 索引维护

| Duplicate Indexes | Redundant Indexes |
| ----------------- | ----------------- |
| (A, B, C)         | (A, B)            |
| X (A, B, C)       | X (A)             |
|                   | (B, A)            |
|                   | (B)               |

> Before creating new indexes, check the existing ones.
> 相关概念：[[b-plus-tree]]、[[b-tree]]