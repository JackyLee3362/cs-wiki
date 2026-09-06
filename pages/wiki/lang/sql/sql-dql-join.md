---
title: sql-dql-join
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

## The USING Clause

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

### 练习

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

## Natural Joins

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

## Cross Joins

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

### 练习

```sql
USE sql_store;

SELECT
    sh.name AS shipper,
    p.name AS product
FROM shippers sh, products p
ORDER BY sh.name
```

## Unions

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
```

```sql
SELECT first_name
FROM customers
UNION
SELECT name
FROM shippers
```

### 练习

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