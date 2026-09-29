---
title: sql-dql-aggregate
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

## 聚合函数

```sql
MAX()
MIN()
AVG()
SUM()
COUNT()
```

```sql
USE sql_invoicing;

SELECT 
    MAX(invoice_total) AS highest,
    MIN(invoice_total) AS lowest,
    AVG(invoice_total) AS average,
    SUM(invoice_total) AS total,
    COUNT(invoice_total * 1.1) AS number_of_invoices,
    COUNT(payment_date)  AS count_of_payments,
    COUNT(*) AS total_records,
    COUNT(DISTINCT client_id) AS total_records
FROM invoices
WHERE invoice_date > '2019-07-01'
```

### 练习

```sql
USE sql_invoicing;

SELECT 
    'First half of 2019' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total-payment_total) AS what_we_expect
FROM  invoices
WHERE invoice_date 
    BETWEEN '2019-01-01' AND '2019-06-30'
UNION
SELECT 
    'Second half of 2019' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total-payment_total) AS what_we_expect
FROM  invoices
WHERE invoice_date 
    BETWEEN '2019-07-01' AND '2019-12-31'
UNION
SELECT 
    'Total' AS date_range,
    SUM(invoice_total) AS total_sales,
    SUM(payment_total) AS total_payments,
    SUM(invoice_total-payment_total) AS what_we_expect
FROM  invoices
WHERE invoice_date 
    BETWEEN '2019-01-01' AND '2019-12-31'
```

## GROUP BY 子句

```sql
SELECT
    client_id,
    SUM(invoice_total) AS total_sales
FROM invoices
WHERE invoice_date >= '2019-07-01'
GROUP BY client_id
ORDER BY total_sales DESC
```

```sql
SELECT
    state,
    city,
    SUM(invoice_total) AS total_sales
FROM invoices i
JOIN clients USING (client_id)
GROUP BY state, city
```

### 练习

```sql
USE sql_invoicing;

SELECT
    date,
    pm.name,
    sum(p.amount) as total_payments
    
FROM payments p
JOIN payment_methods pm
    ON p.payment_method = pm.payment_method_id
GROUP BY p.date, p.payment_method
ORDER BY p.date
```

## HAVING

> 使用 HAVING 时，被过滤的列必须出现在 SELECT 中；而 WHERE 可以使用任意列。

```sql
USE sql_invoicing;

SELECT 
    client_id,
    SUM(invoice_total) AS total_sales,
    COUNT(*) AS number_of_invoices
FROM invoices
GROUP BY client_id
HAVING total_sales > 500 AND number_of_invoices > 5
```

### 练习

```sql
USE sql_store;

SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    SUM(oi.quantity * oi.unit_price) AS total_sales
FROM customers c
JOIN orders o USING (customer_id)
JOIN order_items oi USING (order_id)
WHERE state = 'VA'
GROUP BY 
    c.customer_id,
    c.first_name,
    c.last_name
HAVING total_sales > 100
```

## ROLLUP

```sql
USE sql_invoicing;

SELECT 
    client_id,
    SUM(invoice_total) AS total_sales
FROM invoices
JOIN clients c USING (client_id)
GROUP BY client_id WITH ROLLUP
```

```sql
USE sql_invoicing;

SELECT 
    state,
    city,
    SUM(invoice_total) AS total_sales
FROM invoices i
JOIN clients c USING (client_id)
GROUP BY state, city WITH ROLLUP
```

### 练习

```sql
USE sql_invoicing;

SELECT 
    pm.name AS payment_method,
    SUM(p.amount) AS total
FROM payments p
JOIN payment_methods pm
    ON p.payment_method = pm.payment_method_id
GROUP BY pm.name WITH ROLLUP
```
