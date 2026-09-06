---
title: SSM Flow Analysis
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Flow Analysis

(1) 创建工程

- 创建一个 Maven 的 web 工程
- pom.xml 添加 SSM 需要的依赖 jar 包
- 编写 Web 项目的入口配置类，实现`AbstractAnnotationConfigDispatcherServletInitializer`重写以下方法
  - getRootConfigClasses() ：返回 Spring 的配置类->需要==SpringConfig==配置类
  - getServletConfigClasses() ：返回 SpringMVC 的配置类->需要==SpringMvcConfig==配置类
  - getServletMappings() : 设置 SpringMVC 请求拦截路径规则
  - getServletFilters() ：设置过滤器，解决 POST 请求中文乱码问题

(2)SSM 整合[==重点是各个配置的编写==]

- SpringConfig
  - 标识该类为配置类 @Configuration
  - 扫描 Service 所在的包 @ComponentScan
  - 在 Service 层要管理事务 @EnableTransactionManagement
  - 读取外部的 properties 配置文件 @PropertySource
  - 整合 Mybatis 需要引入 Mybatis 相关配置类 @Import
    - 第三方数据源配置类 JdbcConfig
      - 构建 DataSource 数据源，DruidDataSouroce,需要注入数据库连接四要素， @Bean @Value
      - 构建平台事务管理器，DataSourceTransactionManager,@Bean
    - Mybatis 配置类 MybatisConfig
      - 构建 SqlSessionFactoryBean 并设置别名扫描与数据源，@Bean
      - 构建 MapperScannerConfigurer 并设置 DAO 层的包扫描
- SpringMvcConfig
  - 标识该类为配置类 @Configuration
  - 扫描 Controller 所在的包 @ComponentScan
  - 开启 SpringMVC 注解支持 @EnableWebMvc

(3)功能模块[与具体的业务模块有关]

- 创建数据库表
- 根据数据库表创建对应的模型类
- 通过 Dao 层完成数据库表的增删改查(接口+自动代理)
- 编写 Service 层[Service 接口+实现类]
  - @Service
  - @Transactional
  - 整合 Junit 对业务层进行单元测试
    - @RunWith
    - @ContextConfiguration
    - @Test
- 编写 Controller 层
  - 接收请求 @RequestMapping @GetMapping @PostMapping @PutMapping @DeleteMapping
  - 接收数据 简单、POJO、嵌套 POJO、集合、数组、JSON 数据类型
    - @RequestParam
    - @PathVariable
    - @RequestBody
  - 转发业务层
    - @Autowired
  - 响应结果
    - @ResponseBody
