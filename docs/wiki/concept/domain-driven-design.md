---
title: Domain Driven Design
date: 2025-11-01
draft: false
author: JackyLee
tags:
  - 概念
  - DDD
categories:
  - 技术概念
comment: true
---

- [什么是 ddd 领域驱动架构，尽量说人话，回答要在 50 个字以内? - 知乎](https://www.zhihu.com/question/448211945/answer/3628534541)
- [为什么从 MVC 到 DDD，架构的本质是什么？ - 知乎](https://zhuanlan.zhihu.com/p/641299096)
- [领域驱动设计中的架构要素-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1352563)
- [ddd sample - github](https://github.com/citerus/dddsample-core)
- [python ddd - github](https://github.com/pgorecki/python-ddd)
- [教程 - bilibili](https://www.bilibili.com/video/BV11q4y1q74f?spm_id_from=333.788.videopod.sections&vd_source=ffe13c57aa3e9ee91266df09d77a3e35)

## 核心概念

### 限界上下文（Bounded Context）

限界上下文是 DDD 中划分业务边界的核心概念。同一个领域模型在不同上下文中可能有不同含义。

示例：
- **协作上下文**：论坛、共享日历、博客、即时消息、wiki、留言板等
- **身份与访问上下文**：用户认证和授权，可被其他上下文复用
- **敏捷管理上下文**：项目管理、需求跟踪等

### 聚合与聚合根

聚合 = 聚合根 + 上下文边界

- **聚合根（Aggregate Root）**：实体（Entity），是聚合的入口，仓储（Repository）只能操作聚合根
- 一个领域模型可以有多个聚合根
- 每个聚合根需要有一个 Repository

### 值对象（Value Object）

值对象没有唯一标识，由属性值决定其身份。常见值对象：

| 值对象 | 属性 |
|--------|------|
| 地址（Address）| 省、市、区、街道、邮编 |
| 金额（Money）| 币种、数值 |
| 时间段（Period）| 开始时间、结束时间 |
| 电话号码（PhoneNumber）| 国家区号、号码 |
| 坐标（Coordinate）| 经度、纬度 |
| 税率（TaxRate）| 税率百分比、税种 |

### 实体（Entity）

实体有唯一标识（ID），即使属性相同，ID 不同也是不同实体。

## 参考资料

- [DDD术语-聚合(Aggregate)、聚合根(AggregateRoot) - 博客园](https://www.cnblogs.com/junzi2099/p/13682086.html) #todo
- [阿里巴巴大淘宝技术 - 阿里技术专家详解 DDD 系列 第一讲](https://zhuanlan.zhihu.com/p/340911587) #todo
