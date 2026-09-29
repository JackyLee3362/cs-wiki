---
title: sql-dql-select
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

## select

```sql
-- using 示例：
select a.*, b.* from a left join b using(colA);
-- 等同于：
select a.*, b.* from a left join b on a.colA = b.colA;
```

```sql
SELECT * -- 选择列
FROM user -- 选择表
WHERE age > 18 -- 条件
ORDER BY age -- 排序 ORDER BY {column} [ASC|DESC]
```

## as

对表别名 Alias `AS`，参考[教程](https://www.w3school.com.cn/sql/sql_alias.asp)

```sql
SELECT
    first_name,
    last_name,
    points,
    (points + 10) * 100 AS discount_factor,
    (points + 10) * 100 AS 'discount factor'
FROM customers AS c
```

### distinct

对某列去重

参考[教程](https://www.w3school.com.cn/sql/sql_distinct.asp)

```sql
SELECT DISTINCT state
FROM customers
```

### where

时间比较

```sql
SELECT *
FROM orders
WHERE order_date > '2018-12-31'
```

## and or not

```sql
SELECT *
FROM Customers
WHERE birth_date > '1990-01-01' AND points > 1000
-- WHERE birth_date > '1990-01-01' OR points > 1000
-- WHERE NOT (birth_date > '1990-01-01' OR points > 1000)
```

优先级: `NOT >  AND >  OR`

```sql
SELECT *
FROM order_items
WHERE order_id = 6 AND unit_price * quantity > 30
```

## in

```sql
SELECT *
FROM Customers
WHERE state IN ('VA','GA','FL')
-- WHERE state = 'VA' OR state = 'GA' OR state = 'FL'
-- WHERE state NOT IN ('VA','GA','FL')
-- WHERE xxx IN (30, 31, 32) -- 数字 IN
```

## between

```sql
SELECT *
FROM customers
WHERE points BETWEEN 1000 AND 3000
-- WHERE points >= 1000 AND points <= 3000
-- WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01'
```

## like

like，[教程](https://www.w3school.com.cn/sql/sql_like.asp)

```sql
SELECT *
FROM customers
-- WHERE last_name LIKE 'b%' -- 以b开头的last_name
-- WHERE last_name LIKE 'brush%' -- 以brush开头的last_name
-- WHERE last_name LIKE '%b%' -- 中间有b的last_name
-- WHERE last_name LIKE '%y' -- 以y结尾的last_name
-- WHERE last_name LIKE '_____y' 以y结尾，且_表示任意一个字符（或汉字）
WHERE last_name LIKE 'b____y'
-- % any number of characters
-- _ string character
```

## regexp

```sql
SELECT *
FROM customers
WHERE last_name REGEXP 'field'
-- ^ beginning
-- $ end
-- | logical or
-- [abcd]
-- [a-f]
```

## IS NULL

```sql
SELECT *
FROM customers
WHERE phone IS NULL
-- WHERE phone IS NOT NULL
```

## order by

```sql
SELECT *
FROM customers
ORDER BY first_name
-- ORDER BY first_name DESC
-- ORDER BY state DESC, first_name DESC
```

## limit

```sql
-- 前 5 行
... LIMIT 5

-- 跳过 2 行并获取 5 行
... LIMIT 5 OFFSET 2
... LIMIT 2, 5
```
