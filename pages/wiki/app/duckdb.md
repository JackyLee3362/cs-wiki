---
title: DuckDB
date: 2026-09-05
draft: true
author: JackyLee
tags:
  - app/gui
  - 数据库
categories:
  - 应用软件
comment: true
---

> [!info]
> DuckDB 是一款嵌入式分析型数据库，专为 OLAP（在线分析处理）场景设计，被称为「分析型 SQLite」。

## 核心信息

- **开发商**：DuckDB Foundation
- **类型**：嵌入式分析型数据库（OLAP）
- **开源**：MIT 协议
- **平台**：全平台
- **官网**：[duckdb.org](https://duckdb.org/)

## 主要特点

- **零外部依赖**：单机运行，无服务端配置
- **高性能分析**：列式存储，向量化执行引擎，查询性能远超传统行式数据库
- **SQL 兼容**：支持标准 SQL，兼容 PostgreSQL 语法
- **数据互操作**：可直接查询 CSV、Parquet、JSON 文件，无需导入
- **内存友好**：比 Pandas 更快、内存占用更低
- **多种语言绑定**：Python、R、Java、Node.js、Go、Rust 等

## 适用场景

- 数据分析与探索（替代 Pandas）
- ETL 数据处理管道
- 单机大数据集分析（GB 到 TB 级）
- 数据科学工作流
- 边缘计算分析

## 与 SQLite 对比

| 特性                 | SQLite | DuckDB |
| -------------------- | ------ | ------ |
| 存储模型             | 行式   | 列式   |
| 优化目标             | OLTP   | OLAP   |
| 并发写入             | 库级锁 | 更好   |
| 分析查询             | 一般   | 极快   |
| CSV/Parquet 直接查询 | 不支持 | 支持   |

## 同类工具

见 [[sqlite]]、[[clickhouse]]、[[postgresql]]。
