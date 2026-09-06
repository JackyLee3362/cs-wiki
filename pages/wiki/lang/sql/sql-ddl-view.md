---
title: sql-ddl-view
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

## 创建视图

```sql
USE sql_invoicing;

CREATE VIEW sales_by_client AS
SELECT 
    client_id,
    name,
    SUM(invoice_total) AS total_sales
FROM clients c
JOIN invoices i USING (client_id)
GROUP BY client_id, name
```

### 练习

```sql
USE sql_invoicing;

CREATE VIEW clients_balance AS 
SELECT 
    client_id,
    name,
    SUM(invoice_total - payment_total) AS Balance
FROM clients
JOIN invoices USING (client_id)
GROUP BY client_id, name
```

## 修改或删除视图

```sql
DROP VIEW sales_by_client
```

```sql
-- CLICK TOOL ICON IN VIEW
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `sql_invoicing`.`sales_by_client` AS
    SELECT 
        `c`.`client_id` AS `client_id`,
        `c`.`name` AS `name`,
        SUM(`i`.`invoice_total`) AS `total_sales`
    FROM
        (`sql_invoicing`.`clients` `c`
        JOIN `sql_invoicing`.`invoices` `i` ON ((`c`.`client_id` = `i`.`client_id`)))
    GROUP BY `c`.`client_id` , `c`.`name`
    ORDER BY total_sales DESC
```

## 可更新视图

```sql
-- 在某些特定条件下（未包含以下子句）可更新：
-- DISTINCT
-- Aggregate Function(MIN,MAX,SUM)
-- GROUP BY, HAVING
-- UNION
```

```sql
USE sql_invoicing;

CREATE OR REPLACE VIEW invoice_with_balance AS
SELECT 
    invoice_id,
    number,
    client_id,
    invoice_total,
    payment_total,
    invoice_total - payment_total AS balance,
    invoice_date,
    due_date,
    payment_date
FROM invoices
WHERE (invoice_total - payment_total) > 0
```

```sql
-- DELETE
DELETE FROM invoice_with_balance 
WHERE invoice_id = 1
-- UPDATE
UPDATE invoice_with_balance
SET due_date = DATE_ADD(due_date, INTERVAL 2 DAY)
WHERE invoice_id = 2
```

## WITH CHECK OPTION 子句

```sql
USE sql_invoicing;

CREATE OR REPLACE VIEW invoice_with_balance AS
SELECT 
    invoice_id,
    number,
    client_id,
    invoice_total,
    payment_total,
    invoice_total - payment_total AS balance,
    invoice_date,
    due_date,
    payment_date
FROM invoices
WHERE (invoice_total - payment_total) > 0
WITH CHECK OPTION
```

```sql
UPDATE invoice_with_balance
SET payment_total = invoice_total
WHERE invoice_id = 2
```

## 视图的其他优点

- Simplify queries 简化查询
- Reduce the impact of changes 降低变更影响
- Restrict access to the data 限制数据访问