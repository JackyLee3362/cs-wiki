---
title: JDBC Overview
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# JDBC Overview

Java DataBase Connectivity Java 数据库连接
是使用 Java 语言操作关系型数据库的一套 API

![alt](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244724.png)

我们开发的同一套 Java 代码是无法操作不同的关系型数据库，因为每一个关系型数据库的底层实现细节都不一样。
sun 公司就指定了一套标准接口（JDBC），JDBC 中定义了所有操作关系型数据库的规则。
接口是无法直接使用的，需要使用接口的实现类，而这套实现类（称为驱动）就由各自的数据库厂商给出。

## 1.2 JDBC 本质

- 官方（sun 公司）定义的一套操作所有关系型数据库的规则，即接口
- 各个数据库厂商去实现这套接口，提供数据库驱动 jar 包
- 我们可以使用这套接口（JDBC）编程，真正执行的代码是驱动 jar 包中的实现类

### 1.3 JDBC 好处

- 各数据库厂商使用相同的接口，Java 代码不需要针对不同数据库分别开发
- 可随时替换底层数据库，访问数据库的 Java 代码基本不变

以后编写操作数据库的代码只需要面向 JDBC（接口），
操作哪儿个关系型数据库就需要导入该数据库的驱动包，
如需要操作 MySQL 数据库，就需要再项目中导入 MySQL 数据库的驱动包。
如`mysql-connector-java-5.1.48.jar`就是 MySQL 驱动包
