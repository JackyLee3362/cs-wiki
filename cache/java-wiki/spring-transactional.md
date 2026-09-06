---
title: Spring @Transactional
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring @Transactional

### @Transactional

位于 Service 层上 / 类 / 接口

只有出现 `RuntimeException` 才会出现回滚，否则不会

要想设置成普通异常也回滚

可以变成 `@Transactional(rollbackFor=Exception.call)`

另一个属性

propagation

事务传播行为：指的就是当一个事务方法被另一个事务方法调用时，这个事务方法应该如何进行事务控制
