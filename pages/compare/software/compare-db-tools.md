---
title: compare-db-tools
description: 数据库周边工具对比
date: 2026-08-22
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

> 本页对比数据库开发、运维和迁移相关的周边工具。

## 概览

| 工具 | 类型 | 开源 | 适用数据库 | 最佳场景 |
|------|------|------|------------|----------|
| [[gh-ost]] | 在线 DDL | 是 | MySQL | 无锁表结构变更 |
| pt-online-schema-change | 在线 DDL | 是 | MySQL | Percona 生态 |
| Flyway | 迁移管理 | 是 | 多数据库 | Java 项目版本化迁移 |
| Liquibase | 迁移管理 | 是 | 多数据库 | 企业级变更追踪 |
| dbmate | 迁移管理 | 是 | 多数据库 | 轻量命令行迁移 |
| mysqldump | 备份 | 是 | MySQL | 逻辑备份 |
| xtrabackup | 备份 | 是 | MySQL | 物理热备份 |
| pg_dump | 备份 | 是 | PostgreSQL | 逻辑备份 |
| Redis RDB/AOF | 持久化 | 内置 | Redis | 内存数据持久化 |
| go-mysql-transfer | 同步 | 是 | MySQL→ES/Redis/Kafka | 实时数据同步 |
| Canal | 同步 | 是 | MySQL | 阿里巴巴 binlog 解析 |
| Debezium | CDC | 是 | 多数据库 | 分布式变更数据捕获 |

## 按场景推荐

### Schema 变更（在线 DDL）

生产环境需要修改大表结构，不能锁表。

- **首选**：[[gh-ost]] — GitHub 出品，无触发器，可暂停/恢复
- **Percona 用户**：pt-online-schema-change — 成熟稳定，需创建触发器
- **MySQL 8.0+**：原生 `INSTANT`/`INPLACE` 算法（部分场景无需工具）

### 数据库迁移管理

团队开发中需要版本化追踪数据库 schema 变更。

- **Java 项目**：Flyway 或 Liquibase — 与 Spring Boot 集成完善
- **轻量/多语言**：dbmate — 纯 SQL 迁移文件，语言无关
- **Rails/Node**：Active Record 迁移 / Sequelize migrations

### 数据备份

定期备份保障数据安全。

- **MySQL**：
  - 逻辑备份：mysqldump（小库）
  - 物理热备：Percona XtraBackup（大库、不影响业务）
- **PostgreSQL**：pg_dump / pg_basebackup
- **Redis**：RDB 快照 + AOF 日志
- **MongoDB**：mongodump / 副本集 oplog

### 数据同步 / CDC

数据库之间实时或准实时数据同步。

- **MySQL → 搜索引擎/缓存**：Canal、go-mysql-transfer
- **异构数据库**：Debezium（Kafka Connect 生态）
- **云厂商**：阿里云 DTS、AWS DMS

## 选型决策树

```
需求类型？
  ├─ 在线改表结构 → 大表？
  │                   ├─ 是 → gh-ost / pt-online-schema-change
  │                   └─ 否 → 原生 DDL
  ├─ 版本化迁移管理 → Java 生态？
  │                     ├─ 是 → Flyway / Liquibase
  │                     └─ 否 → dbmate / 框架内置
  ├─ 数据备份 → 物理备份允许？
  │             ├─ 是 → XtraBackup / pg_basebackup
  │             └─ 否 → mysqldump / pg_dump
  └─ 实时同步 → Kafka 生态？
                ├─ 是 → Debezium
                └─ 否 → Canal / 自研脚本
```
