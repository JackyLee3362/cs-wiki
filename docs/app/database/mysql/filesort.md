---
title: MySQL filesort
description: filesort 的含义、执行计划判断与排序优化
date: 2026-10-12
update_date: 2026-10-12
draft: false
author: JackyLee
tags:
  - wiki
  - MySQL
categories:
  - 数据库
comment: true
---

`filesort` 是 MySQL 为满足排序要求执行的额外排序步骤。当查询没有利用索引的有序性直接得到所需顺序时，就可能执行 `filesort`。名称中的 file 不代表必然写磁盘：排序可在内存中完成，数据量超过可用排序缓冲区时才可能使用临时磁盘文件。[官方说明](https://dev.mysql.com/doc/refman/8.4/en/order-by-optimization.html)

## 如何判断

对需要排序的查询运行 `EXPLAIN`：

```sql
EXPLAIN
SELECT id, created_at
FROM orders
WHERE tenant_id = 42
ORDER BY created_at DESC, id DESC
LIMIT 20;
```

这里假设已有 `orders` 表，包含 `id`、`tenant_id`、`created_at` 字段。传统格式的执行计划中，`Extra` 出现 `Using filesort` 表示执行额外排序；`key` 列同时出现索引名也不矛盾，因为该索引可能只用于查找符合 `WHERE` 的记录。

`Using temporary` 表示使用内部临时表，与 `Using filesort` 是两个独立信息；普通 `EXPLAIN` 不能据此判断排序是否落盘。需要进一步分析时，可检查 optimizer trace 中的 `filesort_summary`，包括临时文件数量、内存峰值和排序记录形式。[EXPLAIN 输出说明](https://dev.mysql.com/doc/refman/8.4/en/explain-output.html)

## 如何减少排序开销

对上述查询，可评估以下联合索引：

```sql
CREATE INDEX idx_orders_tenant_created_id
ON orders (tenant_id, created_at, id);
```

`tenant_id` 是等值条件，同一租户的索引记录按 `(created_at, id)` 排列；两个排序字段均为降序时，可反向扫描该索引。`id` 作为第二排序键还能按 ID 排列相同时间的记录。重新运行 `EXPLAIN`，确认实际计划是否采用索引顺序。

索引存在并不保证被选用，优化器还会比较过滤、回表和排序的成本。遇到 `filesort` 时，优先检查索引列顺序是否匹配查询，并减少待排序行数和不必要的返回列。小结果集或带 `LIMIT` 的排序可能很便宜，应结合实际耗时判断。确需调整 `sort_buffer_size` 时，要评估并发排序的内存开销。[ORDER BY 优化](https://dev.mysql.com/doc/refman/8.4/en/order-by-optimization.html)
