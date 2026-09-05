---
title: awesome-db-server
description:
date: 2026-08-20
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 数据库项目以及简单介绍

### awesome-db

- [numetriclabz/awesome-db: A curated list of amazingly awesome database libraries, resources and shiny things by https://www.numetriclabz.com/](https://github.com/numetriclabz/awesome-db)

### mysql-server

- [mysql/mysql-server: MySQL Server, the world's most popular open source database, and MySQL Cluster, a real-time, open source transactional database.](https://github.com/mysql/mysql-server)

### sqlite

- [sqlite/sqlite: Official Git mirror of the SQLite source tree](https://github.com/sqlite/sqlite)

### redis

- [redis/redis: Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, Streams, HyperLogLogs, Bitmaps.](https://github.com/redis/redis)

### leveldb

Goolge 的项目

- [google/leveldb: LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values.](https://github.com/google/leveldb)

### elasticsearch

- [elastic/elasticsearch: Free and Open Source, Distributed, RESTful Search Engine](https://github.com/elastic/elasticsearch)

### 数据库 SimpleDB

- [dstibrany/SimpleDB: SimpleDB implementation for MIT 6.830](https://github.com/dstibrany/SimpleDB)

## 参考资料

- [angels - 不会写复杂的 SQL，该怎么学习？ - 知乎](https://www.zhihu.com/question/327369469/answer/3414157727)
  - 概要: 我教你怎么写，用二个表就可以写出让你灵魂出窍头皮发麻的 SQL。但是 SQL 写复杂不是目的，解决问题才是目的。 搞个业务需求，我杜撰一个吧。有客户表和客户订单表，我们要查出客户的信息并带上客户最后订单的订单重量。一个客户会有多个订单，只能出现最后一个订单的重量，其它的不要。 这需要二张表，客户表，客户订单表。我们看看以这二张表能写多复杂的查询。中间绝对不加任何表了。 先看表结构：表的主键我都用 GUID，外键使用…
  - 点赞: 185

- [廖雪峰 - 怎么实现一个简单的数据库系统？ - 知乎](https://www.zhihu.com/question/26802517/answer/1967294120377705186)
  - 概要: 现代数据库系统太复杂了，各个子系统加起来比操作系统还复杂，而且操作系统的复杂度是分散的，IO、内存分配、调度是基本分开的，数据库的存储、锁、事务、执行器都是紧密结合在一起的，所以要实现一个简单的数据库系统，最好还是确定几个最最基本的需求： 1.B+Tree 实现存储； 2.Atomic 事务支持； 3.CopyOnWrite 并发支持； 4.最简单的索引+查询（不做优化的那种） 不推荐啃 sqlite 更不推荐啃 postgres。 自己实现 demo 我推荐这本书： …
  - 点赞: 57
