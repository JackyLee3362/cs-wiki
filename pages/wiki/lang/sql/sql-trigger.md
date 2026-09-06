---
title: sql-trigger
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

## 触发器

```sql
DELIMITER $$

CREATE TRIGGER payment_after_insert
    AFTER INSERT ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total + NEW.amount
    WHERE invoice_id = NEW.invoice_id;
END $$

DELIMITER ;
```

```sql
INSERT INTO payments
VALUE (DEFAULT, 5, 3, '2019-01-01', 10, 1)
```

### 练习

```sql
DELIMITER $$

CREATE TRIGGER payments_after_delete
    AFTER DELETE ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total - OLD.amount
    WHERE invoice_id = OLD.invoice_id;
    
END $$

DELIMITER ;
```

```sql
DELETE 
FROM payments
WHERE payment_id = 9
```

## 查看触发器

```sql
SHOW TRIGGERS;
SHOW TRIGGERS LIKE 'payment%'
```

## 删除触发器

```sql
DROP TRIGGER IF EXISTS payment_after_insert;
```

## 使用触发器做审计

```sql
USE sql_invoicing;

CREATE TABLE payments_audit
(
    client_id    INT           NOT NULL,
    date         DATE          NOT NULL,
    amount       DECIMAL(9.2)  NOT NULL,
    action_type  VARCHAR(50)   NOT NULL,
    action_date  DATETIME      NOT NULL
)
```

```sql
DELIMITER $$

DROP TRIGGER IF EXISTS payment_after_insert;

CREATE TRIGGER payment_after_insert
    AFTER INSERT ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total + NEW.amount
    WHERE invoice_id = NEW.invoice_id;
    
    INSERT INTO payments_audit
    VALUES(NEW.client_id, NEW.date, NEW.amount, 'Insert', NOW());
END $$

DELIMITER ;
```

```sql
DELIMITER $$

DROP TRIGGER IF EXISTS payments_after_delete;

CREATE TRIGGER payments_after_delete
    AFTER DELETE ON payments
    FOR EACH ROW
BEGIN
    UPDATE invoices
    SET payment_total = payment_total - OLD.amount
    WHERE invoice_id = OLD.invoice_id;
    
    INSERT INTO payments_audit
    VALUES(OLD.client_id, OLD.date, OLD.amount, 'Delete', NOW());
END $$

DELIMITER ;
```

```sql
INSERT INTO payments
VALUE (DEFAULT, 5, 3, '2019-01-01', 10, 1);

DELETE 
FROM payments
WHERE payment_id = 11;

SHOW TRIGGERS
```

## EVENT 事件

```sql
DELIMITER $$

CREATE EVENT yearly_delete_stable_audit_rows
ON SCHEDULE
    -- AT '2020-01-01'
    EVERY 1 YEAR STARTS '2019-01-01' ENDS '2029-01-01'
DO BEGIN
    DELETE FROM payment_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END $$

DELIMITER ;
```

## 查看和删除事件

```sql
SHOW EVENTS;

SHOW EVENTS LIKE 'yearly%';

DROP EVENT IF EXISTS yearly_delete_stable_audit_rows;

ALTER EVENT yearly_delete_stable_audit_rows DISABLE;

ALTER EVENT yearly_delete_stable_audit_rows ENABLE;
```

```sql
DELIMITER $$

ALTER EVENT yearly_delete_stable_audit_rows
ON SCHEDULE
    -- AT '2020-01-01'
    EVERY 1 YEAR STARTS '2019-01-01' ENDS '2029-01-01'
DO BEGIN
    DELETE FROM payment_audit
    WHERE action_date < NOW() - INTERVAL 1 YEAR;
END $$

DELIMITER ;
```

## 相关

- 触发器的业务逻辑也依赖事务，见 [[sql-tcl]]