---
title: Spring Tx Roles
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Transaction Roles

这节中我们重点要理解两个概念，分别是`事务管理员`和`事务协调员`。

1. 未开启 Spring 事务之前:

![1630248794837](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021784.png)

- AccountDao 的 outMoney 因为是修改操作，会开启一个事务 T1
- AccountDao 的 inMoney 因为是修改操作，会开启一个事务 T2
- AccountService 的 transfer 没有事务，
  - 运行过程中如果没有抛出异常，则 T1 和 T2 都正常提交，数据正确
  - 如果在两个方法中间抛出异常，T1 因为执行成功提交事务，T2 因为抛异常不会被执行
  - 就会导致数据出现错误

2. 开启 Spring 的事务管理后

![1630249111055](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021785.png)

- transfer 上添加了@Transactional 注解，在该方法上就会有一个事务 T
- AccountDao 的 outMoney 方法的事务 T1 加入到 transfer 的事务 T 中
- AccountDao 的 inMoney 方法的事务 T2 加入到 transfer 的事务 T 中
- 这样就保证他们在同一个事务中，当业务层中出现异常，整个事务就会回滚，保证数据的准确性。

通过上面例子的分析，我们就可以得到如下概念:

- 事务管理员：发起事务方，在 Spring 中通常指代业务层开启事务的方法
- 事务协调员：加入事务方，在 Spring 中通常指代数据层方法，也可以是业务层方法

==注意:==

目前的事务管理是基于`DataSourceTransactionManager`和`SqlSessionFactoryBean`使用的是同一个数据源。
