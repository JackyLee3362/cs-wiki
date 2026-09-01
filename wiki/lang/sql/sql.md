---
title: sql
description:
date: 2025-09-25
update_date:
  - 2025-10-22
  - 2025-11-21
  - 2026-03-19
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

SQL 五大分类

- [[sql-ddl]]: 数据定义语言（库、表、索引、结构）
- [[sql-dml]]: 数据操纵语言（增删改 行数据）
- [[sql-dql]]: 数据查询语言（select 查询）
- [[sql-dcl]]: 数据控制语言（权限）
- [[sql-tcl]]: 事务控制语言（事务提交回滚）

## 常用 SQL

### 查看数据长度是否符合要求

```sql
SELECT * FROM `{table_name}` WHERE LEN(`{index_name}`) == 10
```

## FAQ

### JSON 类型如何查找？

```sql
UPDATE products
SET properties = '
{
    "dimension": [1, 2, 3],
    "weight": 10,
    "manufacturer":{"name": "sony"}
}
'
WHERE product_id = 1
-------------------------
UPDATE products
SET properties = JSON_OBJECT(
    'weight', 10,
    'dimension', JSON_ARRAY(1, 2, 3),
    'manufacturer', JSON_OBJECT('name': 'sony')
)
WHERE product_id = 2
----------------------------
SELECT
    product_id,
    JSON_EXTRACT(properties, '$.weight') AS weight
FROM products
WHERE product_id = 1
---------------------------
SELECT
    product_id,
    properties -> '$.weight' AS weight, -- $ means current table
    properties -> '$.dimension[0]' AS dimension,
    properties -> '$.manufacturer',
    properties -> '$.manufacturer.name',
    properties ->> '$.manufacturer.name'
FROM products
-- WHERE product_id = 1
WHERE  properties ->> '$.manufacturer.name' = 'sony'
---------------------------
UPDATE products
SET properties = JSON_SET(
    properties,
    '$.weight', 20,
    '$.age', 10
)
WHERE product_id = 1
----------------------------
UPDATE products
SET properties = JSON_REMOVE(
    properties,
    '$.age'
)
WHERE product_id = 1
```

## 附录

### 数据类型

#### 字符串类型

| 类型       | 最大长度     | 说明                                                    |
| ---------- | ------------ | ------------------------------------------------------- |
| CHAR(x)    | 0‑255 字符   | 定长字符串，不足长度自动补空格；**x代表字符数不是字节** |
| VARCHAR    | 0‑65535 字节 | 变长字符串                                              |
| TINYTEXT   | 255 字节     | 短文本                                                  |
| TEXT       | 64KB         | 普通长文本                                              |
| MEDIUMTEXT | 16MB         | 中等大文本                                              |
| LONGTEXT   | 4GB          | 超大文本                                                |

#### 整数数值类型

| 类型      | 字节 | 有符号范围                                 | 无符号 UNSIGNED 范围     |
| --------- | ---- | ------------------------------------------ | ------------------------ |
| TINYINT   | 1    | -128 ~ 127                                 | 0 ~ 255                  |
| SMALLINT  | 2    | -32768 ~ 32767                             | 0 ~ 65535                |
| MEDIUMINT | 3    | -8388608 ~ 8388607                         | 0 ~ 16777215             |
| INT       | 4    | -2147483648 ~ 2147483647                   | 0 ~ 4294967295           |
| BIGINT    | 8    | -9223372036854775808 ~ 9223372036854775807 | 0 ~ 18446744073709551615 |

#### 浮点与定点类型

| 类型                                 | 字节 | 说明                                           |
| ------------------------------------ | ---- | ---------------------------------------------- |
| FLOAT                                | 4    | 单精度浮点数，存在精度丢失，不适合金额         |
| DOUBLE                               | 8    | 双精度浮点数，存在精度丢失                     |
| DECIMAL(p,s) / DEC / NUMERIC / FIXED | 可变 | 定点小数，**货币/金融必选**；例 `DECIMAL(9,2)` |

> 布尔：`BOOL / BOOLEAN` 本质是 TINYINT(1)，存储 1 / 0；可写 TRUE / FALSE。

#### 枚举、集合

| 类型             | 说明     | 建议     |
| ---------------- | -------- | -------- |
| ENUM(val1,val2…) | 单选枚举 | 尽量少用 |
| SET(val1,val2…)  | 多选集合 | 尽量少用 |

#### 日期时间类型

| 类型      | 字节 | 说明                       |
| --------- | ---- | -------------------------- |
| DATE      | 3    | 只存日期 `YYYY‑MM‑DD`      |
| TIME      | 3    | 只存时间 `HH:MM:SS`        |
| DATETIME  | 8    | 日期+时间，无2038限制      |
| TIMESTAMP | 4    | 时间戳，**2038年溢出问题** |
| YEAR      | 1    | 年份                       |

#### 二进制Blob类型

| 类型       | 最大容量 |
| ---------- | -------- |
| TINYBLOB   | 255 字节 |
| BLOB       | 64KB     |
| MEDIUMBLOB | 16MB     |
| LONGBLOB   | 4GB      |

#### JSON类型

| 类型 | 说明                                                                     |
| ---- | ------------------------------------------------------------------------ |
| JSON | 原生JSON数据类型，支持JSON函数查询操作，不要用TEXT代替JSON存储结构化数据 |

#### 补充示例SQL

```sql
-- boolean 底层存数字
UPDATE posts SET is_published = 1;
-- SET is_published = TRUE
-- SET is_published = FALSE

-- 枚举示例
CREATE TABLE t(
  size ENUM('small','medium','large')
);
```

> 重点记忆：
>
> 1. 金额货币必须使用 `DECIMAL`，禁止 FLOAT/DOUBLE
> 2. `CHAR(x)` x是**字符数**不是字节；varchar受行总字节65535限制
> 3. TIMESTAMP 4字节存在2038时间溢出，优先 DATETIME
> 4. ENUM / SET 业务上尽量避免，改选项需要DDL改表，耦合业务。

### 列属性

- DATATYPE:
  - INT
  - VARCHAR(50)
  - CHAR(50)
- PK:
  - PRIMARY KEY
- NN:
  - NOT NULLABLE
- AI:
  - AUTO INSERT
- DEFAULT/EXPRESSION:
  - NULL
  - '0'

## 参考资料

- [join on多个条件的理解\_sql join on 多个条件-CSDN博客](https://blog.csdn.net/weixin_44457814/article/details/106716384)
- [黎朝阳 - PostgreSQL 与 MySQL 相比，优势何在？ - 知乎](https://www.zhihu.com/question/20010554/answer/1938309828507313692)
  - 概要: 你可能遇到过这样的需求： 公司想实时看到一块区域的降雨分布，或者道路交通、空气质量等空间数据的变化。 数据不是静态的，而是源源不断地从传感器、接口或第三方 API 中推送进来。 更复杂的是，这些数据既要存下来方便分析，又要在 Web 地图上实时可视化出来，最好还能在 3D 场景里转一转。这时候，很多人的第一反应可能是： “找个现成的 GIS 平台呗。” 可真用起来才发现——要么功能不够定制化，要么价格不够友好，要么部署…
  - 点赞: 117

- [据说他姓 feng - 面试官灵魂拷问：为什么 SQL 语句不要过多的 join？ - 知乎](https://www.zhihu.com/question/585496172/answer/2997397469)
  - 概要: 有一个回答说得很对。。。 “面试官，你们没用过好用的数据库。你也不懂数据库。” 这不让那不让，动不动就大数据。。。动不动就照搬阿里巴巴的规范。。。 面试过几个互联网云原生原教旨主义者，张嘴闭嘴大数据，不管 3721 一律分库分表分布式。我问，你们表最大多少行？答曰 500w。500w 算个毛线大数据啊，连 HDD 的 MySQL 的性能蜕化点都够不着。 又譬如互联网人重视“效率”，说视图（view）每次查询效率很低，我问他怎么解决，他说…
  - 点赞: 4054
- [怎么实现一个简单的数据库系统？](https://www.zhihu.com/question/26802517/answer/1898314134744994702)
- [强哥叨逼叨 - 大家都是如何接触 PostgreSql 的 - 知乎](https://www.zhihu.com/question/1889038053630263641/answer/1933455744772055134)
  - 概要: 在处理 Postgres 数据库时，有一系列事情我发现它们让我的生活和同事的生活变得更加愉快。每件事本身都很小，但综合起来效果显著。 使用 UUID 作为主键 UUIDs 也有缺点 真正随机的 UUID 排序效果不好（这对索引也有影响）它们占用的空间比顺序 ID 更多（空间是你最便宜的资源）但我发现其缺点远远被优点所弥补 生成一个 UUID 时不需要与数据库进行协调。它们可以安全地对外共享。CREATE TABLE person( id uuid not null default g…
  - 点赞: 16
- [PostgreSQL 17 发布：摊牌了，我不装了！ - 知乎](https://zhuanlan.zhihu.com/p/732758503)
- [SQLite 的读写效率很高，有哪些使用其他数据库的理由？ - 知乎](https://www.zhihu.com/question/31417262/answer/2864492789)
- [阿里面试：为什么 MySQL 不建议使用 delete 删除数据？ - 知乎](https://www.zhihu.com/question/586845366/answer/18764783323)
- [SQLite 的文艺复兴 - 知乎](https://zhuanlan.zhihu.com/p/601510076)
- [图解 MySql 原理 - 知乎](https://zhuanlan.zhihu.com/p/586535564)
- [请问您见过最惊艳的 sql 查询语句是什么？ - 知乎](https://www.zhihu.com/question/384673958/answer/3073350200)
- [postgresql 也很强大，为何在中国大陆，mysql 成为主流，postgresql 屈居二线呢？ - 知乎](https://www.zhihu.com/question/31955622/answer/17264194602)
- [MySQL 中添加唯一约束和联合唯一约束 - 星朝 - 博客园](https://www.cnblogs.com/jpfss/p/12190750.html)
- [SQL 执行顺序 - 掘金](https://juejin.cn/post/6850418117764628487)
- [构建最快的嵌入式数据库——ClickHouse on Everything - 知乎](https://zhuanlan.zhihu.com/p/714851543)
- [请问您见过最惊艳的 sql 查询语句是什么？](https://www.zhihu.com/question/384673958/answer/3074538715)
