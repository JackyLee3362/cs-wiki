---
title: gh-ost
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - app/tool
  - 数据库
categories:
  - 开发工具
comment: true
---

> [!info]
> gh-ost（GitHub Online Schema Transformer）是 GitHub 开源的 MySQL 在线 schema 变更工具，用于不锁表地修改表结构。

## 核心信息

- **开发商**：GitHub
- **开源**：MIT 协议
- **平台**：Linux、macOS
- **官网**：[github.com/github/gh-ost](https://github.com/github/gh-ost)

## 主要特点

- **无锁变更**：通过触发器-less 的复制方式实现，无需在表上创建触发器
- **可暂停/恢复**：变更过程中可随时暂停，降低主库负载
- **可动态调整**：支持运行时调整复制速率，避免高峰期影响
- **自动切换**：完成后自动原子性切换新旧表
- **回滚支持**：中途出现问题可随时安全中止

## 工作原理

1. 创建与源表结构相同的影子表（ghost table）
2. 在影子表上执行 ALTER 语句
3. 增量复制源表数据到影子表
4. 应用 binlog 中的变更保持同步
5. 锁表瞬间切换表名

## 适用场景

- 大表的在线 DDL 操作（如加字段、加索引）
- 高可用 MySQL 集群的 schema 变更
- 触发器使用受限的环境

## 与 pt-online-schema-change 对比

| 特性 | gh-ost | pt-online-schema-change |
|------|--------|------------------------|
| 触发器 | 不需要 | 需要 |
| 暂停/恢复 | 支持 | 不支持 |
| 运行时调整 | 支持 | 不支持 |
| 社区维护 | GitHub 官方 | Percona |
