---
title: MySQL 常见面试知识点
sidebar_position: 1
description: 从工作场景理解 MySQL 索引、事务、锁、日志和慢查询排查。
---

以 MySQL 8.0 / 8.4 的 InnoDB 为背景。回答时按「结论 → 原理 → 场景 → 限制」展开，实际行为还要结合版本、隔离级别和执行计划。

## 1. 为什么使用 B+ 树索引？

B+ 树的非叶子节点用于导航，叶子节点保存索引记录并按键有序连接。较高的分支数有助于减少访问层数，叶子节点的有序性适合范围查询和顺序扫描。

哈希结构适合等值定位，但不能直接利用键的顺序完成范围查询；不能因此推导出所有等值查询都应该改用哈希索引。

**常见追问**：索引越多越好吗？每个索引都会增加空间、写入维护和缓存开销，应围绕实际查询设计。

## 2. 聚簇索引、二级索引和回表

InnoDB 聚簇索引的叶子保存行数据，通常以主键组织；二级索引记录包含主键，通过主键再定位完整行就是常说的「回表」。覆盖索引包含查询所需的列，可减少回表。过长的主键也会扩大二级索引。参见 [InnoDB 索引组织](https://dev.mysql.com/doc/refman/8.4/en/innodb-index-types.html)。

**工作场景**：查询只需要订单 ID 和创建时间时，不要习惯性使用 `SELECT *`。先判断现有索引能否覆盖，再评估增加索引的收益。

## 3. 联合索引与最左前缀

对 `(tenant_id, status, created_at)`，通常优先利用连续的最左列缩小扫描范围。范围条件之后的列不一定继续缩小索引定位范围，但仍可能参与过滤或覆盖查询。

不能把「索引失效」当成固定口诀：优化器可能选择全表扫描、索引扫描或其他路径，应以执行计划为准。函数运算、隐式转换、低选择性以及返回行数都可能影响选择。参见 [索引优化](https://dev.mysql.com/doc/refman/8.4/en/optimization-indexes.html)。

```sql
-- 假设 orders 有索引 (tenant_id, status, created_at)
EXPLAIN
SELECT id, created_at
FROM orders
WHERE tenant_id = 42 AND status = 'PAID'
ORDER BY created_at
LIMIT 20;
```

**追问**：SQL 中 WHERE 条件的书写顺序必须与索引顺序一致吗？不必；索引列的组织顺序与 SQL 条件的文字顺序是两回事。

## 4. ACID 分别解决什么问题？

| 属性 | 回答重点 |
| --- | --- |
| 原子性 | 一个事务的修改整体提交或回滚 |
| 一致性 | 在约束和正确业务逻辑下保持业务不变量，例如余额不能无故增加 |
| 隔离性 | 控制并发事务之间可以观察到哪些变化 |
| 持久性 | 已提交结果的持久保证取决于日志刷盘、存储与故障假设 |

事务不能自动修复错误的业务逻辑。例如先查询库存，再无条件扣减，即使两步放在事务里，也要处理并发竞争。

## 5. 隔离级别、MVCC 和幻读

InnoDB 默认隔离级别是可重复读（RR）。常用的读已提交（RC）下，普通一致性读每次读取新快照；RR 下通常复用首次一致性读建立的快照，而不是简单地在 `BEGIN` 时固定快照。

MVCC 结合行版本和 undo 历史版本实现一致性读。`SELECT ... FOR UPDATE` 等锁定读与普通快照读不同，不能用同一套快照规则解释。RR 下的范围锁定读可通过 next-key 锁限制并发插入；不能笼统地说「MVCC 消除了所有幻读」。参见 [隔离级别](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-isolation-levels.html)。

**工作场景**：长事务会延长历史版本的保留时间。排查 undo 膨胀时，要检查长期未提交的事务。

## 6. 行锁、间隙锁和死锁

记录锁锁定索引记录，间隙锁限制向某个索引间隙插入，next-key 锁结合记录与前方间隙。锁的范围与隔离级别、索引和访问路径有关；没有合适索引时，扫描并锁定大量记录可能导致严重阻塞，并非简单地「升级为表锁」。参见 [InnoDB 锁](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking.html)。

**典型死锁**：事务 A 先锁订单 1 再锁订单 2，事务 B 顺序相反。统一访问顺序、缩短事务、减少扫描范围可以降低概率；应用仍应准备对被回滚的整个事务进行有界重试。

## 7. 如何避免超卖？

可以把检查与扣减放进同一条条件更新，通过受影响行数判断是否成功：

```sql
-- qty 为正数，由调用方验证；成功应影响一行
UPDATE inventory
SET stock = stock - :qty
WHERE sku_id = :sku_id AND stock >= :qty;
```

这里的 `:qty`、`:sku_id` 是应用层绑定参数示意。若还需要创建订单，应将相关数据库写入放在同一事务内。库存条件只能防止扣成负数；请求重复执行还需要业务幂等键或唯一约束。

**追问**：乐观锁有什么区别？版本号条件更新能检测冲突，但失败后需要重新读取和决策，不应无限重试。

## 8. redo、undo、binlog 的区别

| 日志 | 主要用途 | 容易混淆的地方 |
| --- | --- | --- |
| redo | InnoDB 崩溃恢复，重放需要恢复的修改 | 不是用于业务回滚 |
| undo | 回滚和构造历史版本 | 长事务可能阻碍旧版本清理 |
| binlog | 服务端记录变更，用于复制及配合备份做时间点恢复 | 不是完整备份，也不能直接等同于 redo |

**追问**：提交后就绝不会丢吗？需要说明 `innodb_flush_log_at_trx_commit`、`sync_binlog`、存储可靠性和故障类型。复制确认与本地刷盘也是不同保证。

## 9. 慢 SQL 如何排查？

1. 确认慢的是数据库执行、连接池等待、锁等待，还是网络传输。
2. 从慢查询日志或监控中找到 SQL、参数分布、调用次数与延迟分位数。
3. 用 `EXPLAIN` 检查索引、扫描行数估计、连接顺序和排序方式。
4. 在受控环境用 `EXPLAIN ANALYZE` 比较估计与实际执行情况；它会真正执行查询。
5. 对照真实数据验证索引或 SQL 修改，并观察写入开销与其他查询的变化。

`Using filesort` 不等于必然落盘，`rows` 也不是普通 EXPLAIN 实际扫描的精确计数。参见 [EXPLAIN](https://dev.mysql.com/doc/refman/8.4/en/explain.html)。

## 10. 深分页和主从延迟

大偏移量分页往往需要先扫描并丢弃大量记录。连续翻页可考虑基于稳定排序键的游标分页，例如按 `(created_at, id)` 记录上一页末尾位置；它不适合任意跳页，并需要处理排序字段变化。

读写分离下，异步复制可能造成「刚写完却查不到」。关键的读后写场景可路由到主库，或使用明确的复制进度等待机制。固定睡眠不能证明副本已经追上。

## 参考资料

- [MySQL 8.4 官方手册](https://dev.mysql.com/doc/refman/8.4/en/)
- [InnoDB redo log](https://dev.mysql.com/doc/refman/8.4/en/innodb-redo-log.html)
- [InnoDB undo logs](https://dev.mysql.com/doc/refman/8.4/en/innodb-undo-logs.html)
- [Binary log](https://dev.mysql.com/doc/refman/8.4/en/binary-log.html)
