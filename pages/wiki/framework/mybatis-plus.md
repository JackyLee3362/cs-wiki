---
title: MyBatis-Plus
description: MyBatis 增强工具核心特性
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - orm
  - 数据库
categories:
  - 后端开发
comment: true
---

> MyBatis-Plus（简称 MP）是基于 MyBatis 的增强工具，旨在简化开发、提高效率，只做增强不做改变。

## 核心特性

- **无侵入**：对现有工程无影响
- **强大的 CRUD**：内置通用 Mapper，继承 `BaseMapper` 即可获得完整 CRUD
- **Lambda 支持**：类型安全的查询条件编写
- **主键自动生成**：支持多种主键策略
- **内置分页插件**：物理分页，无需手写 count 和 limit
- **性能分析插件**：输出 SQL 执行时间
- **全局拦截**：通用字段自动填充（如 create_time、update_time）

## 快速开始

```java
@Mapper
public interface UserDao extends BaseMapper<User> {
    // 无需编写任何方法，BaseMapper 已提供 CRUD
}
```

## 核心功能

### 查询构造器

| 构造器 | 适用场景 |
|--------|----------|
| `QueryWrapper` | 普通条件构造 |
| `LambdaQueryWrapper` | Lambda 类型安全条件 |
| `UpdateWrapper` | 更新条件 + 设置字段 |

### 常用特性

- **逻辑删除**：通过 `@TableLogic` 注解实现标记删除
- **乐观锁**：通过 `@Version` 注解实现 CAS 锁
- **代码生成器**：根据数据库表自动生成 Entity、Mapper、Service、Controller

## 与 MyBatis 的关系

MP 是 MyBatis 的搭档而非替代品，底层依然是 MyBatis，可以在 MP 中写原生 MyBatis 的 SQL。

## 参考资料

- [MyBatis-Plus 官网](https://mp.baomidou.com/) #todo
- [MyBatis-Plus 代码生成器](https://mp.baomidou.com/guide/generator.html) #todo
- [MyBatis-Plus 乐观锁插件](https://mp.baomidou.com/guide/interceptor-optimistic-locker.html) #todo
- [MyBatis-Plus Wrapper 条件构造器](https://mp.baomidou.com/guide/wrapper.html) #todo
- [MyBatis-Plus CRUD 接口](https://mp.baomidou.com/guide/crud-interface.html) #todo
- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
