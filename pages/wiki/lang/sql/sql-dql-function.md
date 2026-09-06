---
title: sql-dql-function
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

## 数值函数

```sql
SELECT 
    ROUND(5.7345, 3),
    TRUNCATE(5.7345, 3),
    CEILING(5.2),
    FLOOR(5.2),
    ABS(-5.2),
    RAND()
```

## 字符串函数

```sql
SELECT 
    LENGTH('sky'),
    UPPER('sky'),
    LOWER('Sky'),
    
    LTRIM('   Sky'),
    RTRIM('Sky  '),
    TRIM(' S ky '),
    
    LEFT('Kindergarten', 4),
    RIGHT('Kindergarten', 6),
    SUBSTRING('Kindergarten', 3, 5),
    
    LOCATE('N','Kindergarten'), -- not case sensitive
    LOCATE('q','Kindergarten'), -- return 0 if not exists
    LOCATE('garten','Kindergarten'),  -- return the first place
    
    REPLACE('Kindergarten', 'garten', 'garden'),
    CONCAT('first','last')
```

## 日期函数

```sql
SELECT 
    NOW(), 
    CURDATE(),
    CURTIME(),
    
    YEAR(NOW()),
    MONTH(NOW()),
    DAY(NOW()),
    HOUR(NOW()),
    MINUTE(NOW()),
    SECOND(NOW()),
    
    DAYNAME(NOW()),
    MONTHNAME(NOW()),
    
    EXTRACT(DAY FROM NOW()),
    EXTRACT(MONTH FROM NOW()),
    EXTRACT(YEAR FROM NOW())
```

### 练习

```sql
USE sql_store;

SELECT *
FROM orders
WHERE YEAR(order_date) = YEAR(NOW())
```

## 日期时间格式化

```sql
SELECT 
    DATE_FORMAT(NOW(), '%D %M %Y'),
    TIME_FORMAT(NOW(), '%H %i %p')
```

## 日期时间计算

```sql
SELECT 
    NOW(),
    DATE_ADD(NOW(), INTERVAL 1 DAY),
    DATE_ADD(NOW(), INTERVAL -1 YEAR),
    DATE_SUB(NOW(), INTERVAL -1 YEAR),
    DATEDIFF(NOW(),'1997-12-05 17:00'),
    TIME_TO_SEC('9:00') - TIME_TO_SEC('9:02')
```

## IFNULL 和 COALESCE 函数

```sql
USE sql_store;

SELECT 
    order_id,
    IFNULL(shipper_id, 'not assigned') AS shipper,
    COALESCE(shipper_id, comments, 'not assigned') AS shipper
FROM orders
```

### 练习

```sql
USE sql_store;

SELECT 
    CONCAT(first_name, ' ', last_name) AS customer,
    IFNULL(phone, 'Unknown') AS phone,
    COALESCE(phone, 'Unknown') AS phone
FROM customers
```

## IF 函数

```sql
SELECT 
    order_id,
    order_date,
    IF(
        YEAR(order_date) = YEAR(NOW()), 
        'Active', 
        'Archive') AS category
FROM orders
```

### 练习

```sql
-- My solution
SELECT
    product_id,
    name,
    (SELECT COUNT(product_id)
    FROM order_items
    WHERE product_id = p.product_id
    ) AS orders,
    IF((SELECT orders) > 1, 'Many Times','Once') AS frequency
FROM products p
```

```sql
-- Mosh solution
SELECT 
    product_id,
    name,
    COUNT(*) AS orders,
    IF (COUNT(*)>1, 'Many times','Once') AS frequency
FROM products
JOIN order_items USING (product_id)
GROUP BY product_id, name
```

## CASE 操作符

```sql
SELECT 
    order_id,
    CASE 
        WHEN YEAR(order_date) = YEAR(NOW()) -1 THEN 'Active'
        WHEN YEAR(order_date) = YEAR(NOW()) - 2 THEN 'Last Year'
        WHEN YEAR(order_date) < YEAR(NOW()) - 2 THEN 'Archive'
        ELSE 'Future'
    END AS category
FROM orders
```

### 练习

```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS customer,
    points,
    CASE
        WHEN points > 3000 THEN 'Gold'
        WHEN points >= 2000 THEN 'Silver'
        ELSE 'Bronze'
    END AS category
FROM customers
```

## 相关

- 业务逻辑的条件判断也可用在更新/删除，见 [[sql-dml-update]]、[[sql-dml-delete]]