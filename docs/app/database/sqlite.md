---
title: SQLite
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - wiki
  - app/gui
  - 数据库
categories:
  - 应用软件
comment: true
update_date: 2026-10-09
---

## 安装与验证

应用可直接嵌入 SQLite 库；交互执行 SQL 则需要 sqlite3 命令行程序。

```sh
# Ubuntu / Debian
sudo apt update
sudo apt install sqlite3
sqlite3 --version
```

Windows 从 [官方下载页](https://sqlite.org/download.html)选择对应架构的 sqlite-tools 压缩包，解压后在该目录运行 sqlite3.exe，或将目录加入 PATH。

## 创建数据库与基本查询

```sh
sqlite3 demo.db
```

在交互终端输入：

```sql
CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL
);
INSERT INTO notes (title) VALUES ('第一篇笔记');
SELECT id, title FROM notes;
```

SQL 语句以分号结束；以下点命令不需要分号，必须单独输入：

```text
.headers on
.mode column
.tables
.schema notes
.backup demo-backup.db
.quit
```

首次写入后，数据库保存在 demo.db。运行中的数据库可通过 .backup 创建一致性备份；启用 WAL 时，不应只复制主数据库文件而忽略仍未合并的日志。


> [!info]
> SQLite 是一款轻量级、嵌入式的关系型数据库，零配置、零服务器，广泛应用于移动应用、浏览器和嵌入式系统。

## 核心信息

- **开发商**：SQLite Consortium（D. Richard Hipp 主导）
- **类型**：嵌入式关系型数据库
- **协议**：公有领域（Public Domain）
- **平台**：全平台（C 库形式嵌入）
- **官网**：[sqlite.org](https://www.sqlite.org/)

## 主要特点

- **零配置**：无需安装、无需服务器进程、无需配置文件
- **单文件存储**：整个数据库存储在一个 `.db` 文件中，便于迁移和备份
- **极轻量**：完整库仅约 1MB，运行时内存占用低
- **事务安全**：支持 ACID，完全兼容 SQL92 标准
- **跨平台**：C 语言编写，可移植到几乎所有操作系统

## 适用场景

- 移动应用本地数据存储（iOS、Android 默认使用）
- 桌面应用（如浏览器、邮件客户端）
- 嵌入式设备和 IoT
- 中小型网站的轻量级后端
- 数据分析的临时缓存

## 不适用场景

- 高并发写入（写锁为库级，不适合大量并发写）
- 大规模分布式系统
- 需要复杂权限管理的场景

## 同类工具

见 [mysql](docs/app/database/mysql/index.md)、[postgresql](docs/app/database/postgresql.md)、[duckdb](docs/app/database/duckdb.md)。

## 参考资料

### 官方资源

- [官网](https://sqlite.org/)
- [GitHub 源码镜像（官方）](https://github.com/sqlite/sqlite)
- [官方文档](https://sqlite.org/docs.html)
- [官方源码仓库（Fossil）](https://sqlite.org/src)

### 相关文章

- [Python](docs/app/devtools/python.md)

### 其他参考链接

- [sqlite.org](https://www.sqlite.org/) #todo
- [SQLite 命令行手册](https://sqlite.org/cli.html) #todo
- [官方下载](https://sqlite.org/download.html) #todo
