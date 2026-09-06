---
title: Spring MVC Frontend Env
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Env Setup

- 创建一个 Web 的 Maven 项目
- pom.xml 添加 SSM 整合所需 jar 包
- 创建对应的配置类
- 编写 Controller、Service 接口、Service 实现类、Dao 接口和模型类
- resources 下提供 jdbc.properties 配置文件

内容参考前面的项目或者直接使用前面的项目进行本节内容的学习。

最终创建好的项目结构如下:

![1630661781776](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020834.png)

1. 将`资料\SSM功能页面`下面的静态资源拷贝到 webapp 下。

![1630663662691](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020835.png)

2. 因为添加了静态资源，SpringMVC 会拦截，所有需要在 SpringConfig 的配置类中将静态资源进行放行。

- 新建 SpringMvcSupport

  ```java
  @Configuration
  public class SpringMvcSupport extends WebMvcConfigurationSupport {
      @Override
      protected void addResourceHandlers(ResourceHandlerRegistry registry) {
          registry.addResourceHandler("/pages/**").addResourceLocations("/pages/");
          registry.addResourceHandler("/css/**").addResourceLocations("/css/");
          registry.addResourceHandler("/js/**").addResourceLocations("/js/");
          registry.addResourceHandler("/plugins/**").addResourceLocations("/plugins/");
      }
  }
  ```

- 在 SpringMvcConfig 中扫描 SpringMvcSupport

  ```java
  @Configuration
  @ComponentScan({"com.itheima.controller","com.itheima.config"})
  @EnableWebMvc
  public class SpringMvcConfig {
  }
  ```

接下来我们就需要将所有的列表查询、新增、修改、删除等功能一个个来实现下。
