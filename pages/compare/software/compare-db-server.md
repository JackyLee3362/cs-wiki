---
title: compare-db-server
description: 数据库服务器选型对比
date: 2026-08-20
update_date:
draft: false
author: JackyLee
tags:
  - 数据库
  - compare
categories:
  - 软件开发
comment: true
---

> 本页对比常见的数据库服务器，帮助你根据场景选择合适的数据库。

## 概览

| 数据库            | 类型     | 存储模型 | 协议       | 最佳场景              |
| ----------------- | -------- | -------- | ---------- | --------------------- |
| [[mysql]]         | 关系型   | 行式     | GPL        | Web 应用、OLTP        |
| [[postgresql]]    | 关系型   | 行式     | PostgreSQL | 复杂查询、GIS、金融   |
| [[sqlite]]        | 关系型   | 行式     | 公有领域   | 嵌入式、移动应用      |
| [[redis]]         | KV 缓存  | 内存     | BSD        | 缓存、会话、实时数据  |
| [[mongodb]]       | 文档型   | 文档     | SSPL       | 灵活 schema、内容管理 |
| [[duckdb]]        | 分析型   | 列式     | MIT        | 单机分析、数据处理    |
| [[clickhouse]]    | 分析型   | 列式     | Apache 2.0 | 大数据 OLAP、日志分析 |
| [[elasticsearch]] | 搜索引擎 | 文档     | SSPL       | 全文搜索、日志、监控  |

## 按场景推荐

### 事务型业务（OLTP）

需要强一致性、ACID 支持的传统业务系统。

- **首选**：[[mysql]] — 生态最成熟，社区文档最丰富，互联网公司标配
- **复杂业务**：[[postgresql]] — 支持更丰富的数据类型、复杂查询、存储过程
- **轻量级/嵌入式**：[[sqlite]] — 零配置，单文件存储，适合桌面和移动端

### 分析型业务（OLAP）

海量数据的聚合分析、报表查询。

- **单机分析**：[[duckdb]] — 列式存储，可直接查询 CSV/Parquet，数据科学家首选
- **大数据集群**：[[clickhouse]] — 单机性能炸裂，日志分析一天 3 亿条轻松处理
- **已有 PG 生态**：[[postgresql]] + 列式扩展（如 TimescaleDB、Citus）

### 缓存与会话

高频读取、低延迟、允许数据丢失重建。

- **首选**：[[redis]] — 毫秒级响应，支持多种数据结构，持久化可选
- **大规模分布式**：Redis Cluster 或 [[mongodb]] 作为文档缓存

### 全文搜索

站内搜索、文档检索、日志搜索。

- **首选**：[[elasticsearch]] — 基于 Lucene，分布式，近实时搜索
- **轻量级搜索**：[[postgresql]] 内置全文搜索

### 灵活 Schema / 文档存储

数据结构频繁变化、半结构化数据。

- **首选**：[[mongodb]] — JSON 文档模型，横向扩展简单
- **需要 SQL 兼容**：[[postgresql]] JSONB 字段

## 选型决策树

```
需要事务和强一致性？
  ├─ 是 → 复杂查询/GIS/金融？
  │         ├─ 是 → PostgreSQL
  │         └─ 否 → 高并发 Web？
  │                   ├─ 是 → MySQL
  │                   └─ 否 → SQLite（嵌入式）
  └─ 否 → 主要用途？
          ├─ 缓存/会话 → Redis
          ├─ 全文搜索 → Elasticsearch
          ├─ 灵活文档 → MongoDB
          └─ 数据分析 → 单机？
                          ├─ 是 → DuckDB
                          └─ 否 → ClickHouse
```

## 参考资料

- [numetriclabz/numetriclabz/moc-db](https://github.com/numetriclabz/numetriclabz/moc-db) #todo
- [mysql/mysql-server](https://github.com/mysql/mysql-server) #todo
- [sqlite/sqlite](https://github.com/sqlite/sqlite) #todo
- [redis/redis](https://github.com/redis/redis) #todo
- [google/leveldb](https://github.com/google/leveldb) #todo
- [elastic/elasticsearch](https://github.com/elastic/elasticsearch) #todo
- [dstibrany/SimpleDB](https://github.com/dstibrany/SimpleDB) #todo
- [angels - 不会写复杂的 SQL，该怎么学习？ - 知乎](https://www.zhihu.com/question/327369469/answer/3414157727) #todo
- [廖雪峰 - 怎么实现一个简单的数据库系统？ - 知乎](https://www.zhihu.com/question/26802517/answer/1967294120377705186) #todo
