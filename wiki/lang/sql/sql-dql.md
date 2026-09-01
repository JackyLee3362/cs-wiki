---
title: sql-dql
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

> DQL

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

> 视频时间：1h09min

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

## inner join

> 内连接 inner join

```sql
SELECT order_id, o.customer_id, first_name, last_name
FROM orders o
INNER JOIN customers c
ON o.customer_id = c.customer_id
```

## self join

> self join

```sql
USE sql_hr;

SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
JOIN employees m
    ON e.reports_to = m.employee_id
```

## 多表 JOIN Joining Multiple Tables

```sql
USE sql_store;

SELECT
    o.order_id,
    o.order_date,
    c.first_name,
    c.last_name,
    os.name AS status
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
JOIN order_statuses os
    ON o.status = os.order_status_id
```

## 多条件连接, Compound Join Conditions

```sql
USE sql_store;

SELECT *
FROM order_items oi
JOIN order_item_note oin
    ON oi.order_id = oin.order_id
    AND oi.product_id = oin.product_id
```

## 隐式连接, Implicit Join

```sql
-- explicit Join Syntax完全等价，但不建议使用后者
SELECT *
FROM orders o
JOIN customers c
    ON o.customer_id = c.customer_id
-- implicit Join Syntax
SELECT *
FROM orders o, customers c
WHERE o.customer_id = c.customer_id
```

## 外连接/左连接, Outer Joins

```sql
USE sql_store;

SELECT
    c.customer_id,
    c.first_name,
    o.order_id
FROM customers c
LEFT JOIN orders o -- RIGHT JOIN orders o
    ON c.customer_id = o.customer_id
ORDER BY c.customer_id
```

## 多表外连接 Outer Joins Between Multiple Tables

```sql
USE sql_store;

SELECT
    c.customer_id,
    c.first_name,
    o.order_id,
    o.shipper_id,
    sh.name AS shipper
FROM customers c
LEFT JOIN orders o -- RIGHT JOIN orders o
    ON c.customer_id = o.customer_id
LEFT JOIN shippers sh
    ON sh.shipper_id = o.shipper_id
ORDER BY c.customer_id
```

## Self Outer Joins

```sql
USE sql_hr;

SELECT
    e.employee_id,
    e.first_name,
    m.first_name AS manager
FROM employees e
LEFT JOIN employees m
    ON e.reports_to = m.employee_id
```

## 0.21 The USING Clause

```sql
USE sql_store;

SELECT
    o.order_id,
    c.first_name,
    sh.name AS shipper
FROM orders o
JOIN customers c
    USING (customer_id)
LEFT JOIN shippers sh
    USING (shipper_id)
    -- USING(id)===ON A.id=B.id
```

### 练习 0.21

```sql
USE sql_invoicing;

SELECT
    p.date,
    c.name AS client,
    p.amount,
    pm.name AS payment_method
FROM payments p
JOIN clients c USING (client_id)
JOIN payment_methods pm
    ON p.payment_method = pm.payment_method_id
```

## 0.22 Natural Joins

Natural join 特征：

- 关联的表具有一对或多对同名的列
- 连接时候不需要使用 on 或者 using 关键字

```sql
USE sql_store;

SELECT
    o.order_id,
    c.first_name
FROM orders o
NATURAL JOIN customers c

```

## 0.23 Cross Joins

```sql
-- explicit syntax
USE sql_store;

SELECT
    c.first_name AS customer,
    p.name AS product
FROM customers c
CROSS JOIN products p
ORDER BY customer
-- implicit syntax
USE sql_store;

SELECT
    c.first_name AS customer,
    p.name AS product
FROM customers c, products p
ORDER BY customer
```

## 跨数据库链接

```sql
USE sql_inventory;

SELECT *
FROM order_items oi
JOIN products p
    ON oi.product_id = p.product_id
```

### 练习 0.23

```sql
USE sql_store;

SELECT
    sh.name AS shipper,
    p.name AS product
FROM shippers sh, products p
ORDER BY sh.name
```

## 0.24 Unions

```sql
SELECT
    order_id,
    order_date,
    'Active' AS status
FROM orders o
WHERE order_date  >= '2019-01-01'
UNION
SELECT
    order_id,
    order_date,
    'Archived' AS status
FROM orders o
WHERE order_date  < '2019-01-01'
------------------------------
SELECT first_name
FROM customers
UNION
SELECT name
FROM shippers
```

### 练习 0.24

```sql
-- Bronze
SELECT
    customer_id,
    first_name,
    points,
    'Bronze' AS type
FROM customers
WHERE points < 2000
UNION
SELECT
    customer_id,
    first_name,
    points,
    'Silver' AS type
FROM customers
WHERE points >= 2000 AND points <3000
UNION
SELECT
    customer_id,
    first_name,
    points,
    'Gold' AS type
FROM customers
WHERE points > 3000
ORDER BY first_name
```

## 参考资料

[图解 SQL 的 inner join、left /right join、 outer join 区别 - 知乎](https://zhuanlan.zhihu.com/p/59656673)
