---
title: sql-dql-subquery
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

## 子查询

```sql
USE sql_store;

SELECT *
FROM products
WHERE unit_price > (
    SELECT unit_price
    FROM products
    WHERE product_id = 3
)
```

### 练习

```sql
USE sql_hr;

SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
)
```

### IN 操作符

```sql
USE sql_store;

SELECT *
FROM products
WHERE product_id NOT IN (
    SELECT DISTINCT product_id
    FROM order_items
)
```

### 练习

```sql
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id NOT IN (
    SELECT DISTINCT client_id
    FROM invoices
)
```

### 子查询 vs 连接

```sql
USE sql_invoicing;

SELECT *
FROM clients
LEFT JOIN invoices USING (client_id)
WHERE invoice_id IS NULL
```

### 练习

```sql
USE sql_store;

SELECT DISTINCT
    customer_id,
    first_name,
    last_name
FROM customers c
JOIN orders o USING (customer_id)
JOIN order_items oi USING (order_id)
WHERE oi.product_id = 3
```

### ALL 关键字

```sql
USE sql_invoicing;

SELECT * 
FROM invoices 
WHERE invoice_total > (
    SELECT MAX(invoice_total)
    FROM invoices
    WHERE client_id = 3
)
```

```sql
USE sql_invoicing;

SELECT * 
FROM invoices 
WHERE invoice_total > ALL (
    SELECT invoice_total
    FROM invoices
    WHERE client_id = 3
)
```

### ANY 关键字

```sql
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id IN (
    SELECT client_id
    FROM invoices 
    GROUP BY client_id
    HAVING COUNT(*) >= 2
)
```

```sql
USE sql_invoicing;

SELECT *
FROM clients
WHERE client_id = ANY (
    SELECT client_id
    FROM invoices 
    GROUP BY client_id
    HAVING COUNT(*) >= 2
)
```

### 相关子查询

```sql
USE sql_hr;

SELECT *
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE office_id = e.office_id
)
```

### 练习

```sql
USE sql_invoicing;

SELECT * 
FROM invoices i
WHERE invoice_total > (
    SELECT AVG(invoice_total)
    FROM invoices
    WHERE client_id = i.client_id
)
```

### EXISTS 操作符

```sql
USE sql_invoicing;

SELECT *
FROM clients c
WHERE EXISTS (
    SELECT client_id
    FROM invoices
    WHERE client_id = c.client_id
)
```

### 练习

```sql
USE sql_store;

SELECT *
FROM products p
WHERE NOT EXISTS (
    SELECT product_id
    FROM order_items
    WHERE product_id = p.product_id
)
```

### SELECT 中的子查询

```sql
USE sql_invoicing;

SELECT 
    invoice_id,
    invoice_total,
    (SELECT AVG(invoice_total)
        FROM invoices) AS invoice_average,
    invoice_total - (SELECT invoice_average) AS difference
FROM invoices
```

### 练习

```sql
USE sql_invoicing;

SELECT 
    client_id,
    name,
    (SELECT SUM(invoice_total) 
        FROM invoices
        WHERE client_id = c.client_id) AS total_sales,
    (SELECT AVG(invoice_total) FROM invoices) AS average,
    (SELECT total_sales - average) AS difference
FROM clients c
```

### FROM 中的子查询

```sql
USE sql_invoicing;
SELECT *
FROM (
    SELECT 
        client_id,
        name,
        (SELECT SUM(invoice_total) 
            FROM invoices
            WHERE client_id = c.client_id) AS total_sales,
        (SELECT AVG(invoice_total) FROM invoices) AS average,
        (SELECT total_sales - average) AS difference
    FROM clients c
) AS sales_summary
WHERE total_sales IS NOT NULL
```

## 相关

- 子查询与连接的对比见 [[sql-dql-join]]