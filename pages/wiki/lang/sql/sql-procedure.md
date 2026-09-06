---
title: sql-procedure
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

## 什么是存储过程

- store and organize SQL 存储和组织 SQL
- Faster execution 执行更快
- Data security 数据安全

## 创建存储过程

```sql
DELIMITER $$
CREATE PROCEDURE get_clients()
BEGIN
    SELECT * FROM clients;
END$$

DELIMITER ;
```

```sql
CALL get_clients()
```

### 练习

```sql
-- MySolution
DELIMITER $$
CREATE PROCEDURE get_invoices_with_balance()
BEGIN
    SELECT * 
    FROM invoices
    WHERE (invoice_total - payment_total) > 0;
END$$

DELIMITER ;
```

## 使用 MySQLWorkbench 创建

```sql
-- Stored Procedures > Create stored Procedures
CREATE PROCEDURE `new_payment` ()
BEGIN
    SELECT * FROM payments;
END
```

## 删除存储过程

```sql
DROP PROCEDURE IF EXISTS get_clients;

DELIMITER $$
CREATE PROCEDURE get_clients()
BEGIN
    SELECT * FROM clients;
END $$

DELIMITER ;
```

## 参数

```sql
DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state
(
    state CHAR(2)
)
BEGIN
    SELECT * FROM clients c
    WHERE c.state = state;
END $$

DELIMITER ;
```

### 练习

```sql
DROP PROCEDURE IF EXISTS get_client_invoice;

DELIMITER $$
CREATE PROCEDURE get_client_invoice
(
    client_id INT
)
BEGIN
    SELECT * FROM invoices i
    WHERE i.client_id = client_id;
END $$

DELIMITER ;
```

## 带默认值的参数

```sql
DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state
(
    state CHAR(2)
)
BEGIN
    IF state IS NULL THEN
        SET state = 'CA';
    END IF;

    SELECT * FROM clients c
    WHERE c.state = state;
END $$

DELIMITER ;
```

```sql
DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state
(
    state CHAR(2)
)
BEGIN
    IF state IS NULL THEN
        SELECT * FROM clients;
    ELSE
        SELECT * FROM clients c
        WHERE c.state = state;    
    END IF;
END $$

DELIMITER ;
```

```sql
DROP PROCEDURE IF EXISTS get_clients_by_state;

DELIMITER $$
CREATE PROCEDURE get_clients_by_state
(
    state CHAR(2)
)
BEGIN
    SELECT * FROM clients c
    WHERE c.state = IFNULL(state, c.state);
END $$

DELIMITER ;
```

### 练习

```sql
DROP PROCEDURE IF EXISTS get_payments;

DELIMITER $$
CREATE PROCEDURE get_payments
(
    client_id INT,
    payment_method_id TINYINT
)
BEGIN
    SELECT * 
    FROM payments p
    WHERE p.client_id = IFNULL(client_id,p.client_id) AND
          p.payment_method = 
            IFNULL(payment_method_id,p.payment_method);
END $$

DELIMITER ;
```

## 参数校验

```sql
-- GOOGLE sqlstate error
DROP PROCEDURE IF EXISTS make_payment;

DELIMITER $$
CREATE PROCEDURE make_payment
(
    invoice_id INT,
    payment_amount DECIMAL(9, 2),
    payment_date DATE
)
BEGIN
    UPDATE invoices i
    SET
        i.payment_total = payment_amount,
        i.payment_date = payment_date
    WHERE i.invoice_id = invoice_id;
END $$

DELIMITER ;
```

```sql
DROP PROCEDURE IF EXISTS make_payment;

DELIMITER $$
CREATE PROCEDURE make_payment
(
    invoice_id INT,
    payment_amount DECIMAL(9, 2),
    payment_date DATE
)
BEGIN
    IF payment_amount < 0 THEN 
        SIGNAL SQLSTATE '22003'
        SET MESSAGE_TEXT = 'Invalid payment amount';
    END IF;
    
    UPDATE invoices i
    SET
        i.payment_total = payment_amount,
        i.payment_date = payment_date
    WHERE i.invoice_id = invoice_id;
END $$

DELIMITER ;
```

## 输出参数

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_unpaid_invoice_for_client`(
    client_id INT
)
BEGIN
    SELECT 
        COUNT(*),
        SUM(invoice_total)
    FROM invoices i
    WHERE i.client_id = client_id 
        AND payment_total = 0;
END
```

## 变量

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_risk_factor`()
BEGIN
    DECLARE risk_factor DECIMAL(9, 2) DEFAULT 0;
    DECLARE invoices_total DECIMAL(9, 2);
    DECLARE invoices_count INT;
    
    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices;
    
    SET risk_factor = invoices_total / invoices_count * 5;
    
    SELECT risk_factor;
END
```

## 函数

```sql
CREATE DEFINER=`root`@`localhost` FUNCTION `get_risk_factor_for_client`(
    client_id INT
) RETURNS int
    READS SQL DATA
BEGIN
    DECLARE risk_factor DECIMAL(9, 2) DEFAULT 0;
    DECLARE invoices_total DECIMAL(9, 2);
    DECLARE invoices_count INT;
    
    SELECT COUNT(*), SUM(invoice_total)
    INTO invoices_count, invoices_total
    FROM invoices i
    WHERE i.client_id = client_id;
    
    SET risk_factor = invoices_total / invoices_count * 5;
    RETURN risk_factor;
END
```

```sql
SELECT
    client_id,
    name,
    get_risk_factor_for_client(client_id) AS risk_factor
FROM clients
```

```sql
DROP FUNCTION IF EXISTS get_risk_factor_for_client;
```

## 其他约定

```sql
procGetRiskFactor
get_rish_factor
```

## 相关

- 存储过程与函数的用途对照见 [[sql.md]]