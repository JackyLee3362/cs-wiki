---
title: awesome-db-client
description: 数据库客户端对比
date: 2025-11-02
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 开源项目

- [阿司匹林石膏汤 - 有哪些令人窒息的骚操作？ - 知乎](https://www.zhihu.com/question/65657700/answer/697568641)
  - 概要: 群里看到的 建议全行业共享数据库 [图片]
  - 点赞: 1466

- [零一猴子 - 数据库不就是增删改查一些数据吗？研发一个数据库到底难在哪了？ - 知乎](https://www.zhihu.com/question/1895821971356381601/answer/1918389907941982546)
  - 概要: 开发数据库可太容易，不就 CURD 么，10 行不到就解决了： #!/bin/bash db_set () { echo &#34;$1,$2&#34; >> database } db_get () { grep &#34;^$1,&#34; database | sed -e &#34;s/^$1,//&#34; | tail -n 1 }底层用一个纯文本存储，追加写入数据，每次查询只用查看文件中最后一次出现的键就行。 不过好像没支持删除。哦，有了，我加一个标记就行，然后查的时候，如果发现了删除标记，就说明删除了。 #!/bin/bash db_set() { echo &#34;$1,$2&#34; >> database }…
  - 点赞: 931

## DBEaver

- [GISER - 分享一个 DBeaver 支持导入导出 Shapefile 的版本 - 知乎](https://zhuanlan.zhihu.com/p/1976328899517507442)
  - 概要: 今天跟大家分享一个让我工作效率翻倍的发现——DBeaver 现在可以直接导入导出 Shapefile 了！ 是在咸鱼上发现的，【闲鱼】 https://m.tb.cn/h.SybScky?tk=LBgffMibkUV HU591 点击链接直接打开作为一个经常需要在各种 vpn 环境连接数据库和 GIS 软件之间来回倒数据的人，真的是我得痛点。再也不用为了导个.shp 文件专门打开一个庞大的 GIS 软件，然后在各种格式转换中耗费时间了。 我的真实使用体验： 1. 无缝衔接：在 DBeaver 里连接好我的 PostGIS 数据库，然后直…
  - 点赞: 1

## DuckDB

- [gylenn - duckdb 的性能如何？ - 知乎](https://www.zhihu.com/question/593801515/answer/120850147815)
  - 概要: MySQL 一千二百多万行，再插入时，插一条都让我等几十分钟。 我不想成数据库专家，只想开箱即用，于是换了 mongodb，mongodb 吞内存，但无论插入还是查询仅需几秒，至多不超 20 秒。语法简单，学习成本很划算，花小钱总比花时间有性价比，于是 ram 升级至 128g 目前准备探索 duckdb，据说玩数据比较节省学习成本，虽只能单机但性能比 mongodb 都高，内存要求比 mongodb 低很多，又不用成为数据库专家，还可以用 parquet 文档，貌似不错。 据说用…
  - 点赞: 34

## mysql

## levelDb

- [Leveldb 源码阅读 - 知乎](https://zhuanlan.zhihu.com/p/811970982)

## Simple DB

- simple db 一个数据库课程大作业: [awelm/simpledb: A simple database built from scratch that has some the basic RDBMS features (SQL query parser, transactions, query optimizer)](https://github.com/awelm/simpledb)➕2024-10-17 20:33:00

## 数据湖验证

- [Iceberg 02：基于 MinIO、PostgreSQL、Spark、Iceberg 的数据湖搭建与验证 - 知乎](https://zhuanlan.zhihu.com/p/1969004537684661586)

## pgsql

- [江小北 - java 使用 pgsql 好用吗？和 mysql 区别大吗？ - 知乎](https://www.zhihu.com/question/1898329571994076532/answer/1900245240125841837)
  - 概要: 这年头想用 PG（PostgreSQL）的小伙伴，一定是见过大风大浪，或者被 MySQL 给伤透了心。 先说结论：PG 是真香，但也真能打人，吃得了苦中苦，方为 PG 上人。先下个狠话：谁适合 PG？谁就该滚回 MySQL？简单粗暴讲： 业务复杂，表多、字段多、SQL 花里胡哨、子查询爆炸？PG 安排上，稳得一批。要玩金融、GIS、数据分析、大量事务、ACID 死磕？PG，王者。要玩简单增删改查、页面 CRUD、拼命赶工，成本最低优先？兄弟回头看看 MySQL，养活亿级公…
  - 点赞: 163

## 参考资料

- [IfElseZhang - 如何理解关系型数据库的常见设计范式？ - 知乎](https://www.zhihu.com/question/24696366/answer/1975977273988497428)
  - 概要: 本文回溯 关系模型、1NF、2NF、3NF 以及 BCNF 等概念被提出时的论文，通过最原始的信息帮助读者理解各个概念的定义及初衷。关系模型及其重要的范式由 E.F.Codd 数据库泰斗于上世纪七十年代提出，相关论文如下： 1970 年，《A Relational Model of Data for Large Shared Data Banks》提出了关系模型，并定义了“第一范式”(1NF)[1]；1971 年，《Further Normalization of The Data Base Relational Model》定义了“第二范式”(2NF…
  - 点赞: 6
