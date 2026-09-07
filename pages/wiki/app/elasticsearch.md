---
title: Elasticsearch
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
> Elasticsearch 是一个分布式、RESTful 风格的搜索和分析引擎，基于 Apache Lucene 构建，属于 Elastic Stack 的核心组件。

## 核心信息

- **开发商**：Elastic NV
- **类型**：分布式搜索引擎 / 文档型数据库
- **开源**：SSPL / Elastic License（2021 年后变更）
- **平台**：全平台（Java）
- **官网**：[elastic.co](https://www.elastic.co/)

## 主要特点

- **全文搜索**：基于倒排索引，毫秒级响应复杂全文查询
- **分布式**：天然支持水平扩展，自动分片和副本
- **近实时**：数据写入后约 1 秒即可搜索（NRT）
- **RESTful API**：HTTP + JSON 接口，易于集成
- **聚合分析**：强大的聚合框架，支持复杂数据统计
- **生态丰富**：配合 Logstash（数据采集）和 Kibana（可视化）构成 ELK Stack

## 适用场景

- 站内搜索引擎（电商、论坛、文档）
- 日志分析和监控（ELK Stack）
- 实时数据分析仪表盘
- 安全信息和事件管理（SIEM）
- 地理空间数据查询

## 数据模型

- **索引（Index）**：类似数据库
- **类型（Type）**：类似表（7.x 后废弃）
- **文档（Document）**：JSON 格式的一条记录
- **映射（Mapping）**：字段类型定义

## 同类工具

见 [[mongodb]]、[[clickhouse]]、[[mysql]]。
