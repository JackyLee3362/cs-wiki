---
title: spring-mvc-anno-note
description:
date: 2025-12-10
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

### 知识点 1：@Controller

| 名称 | @Controller                      |
| ---- | -------------------------------- |
| 类型 | 类注解                           |
| 位置 | SpringMVC 控制器类定义上方       |
| 作用 | 设定 SpringMVC 的核心控制器 bean |

### 知识点 2：@RequestMapping

| 名称     | @RequestMapping                  |
| -------- | -------------------------------- |
| 类型     | 类注解或方法注解                 |
| 位置     | SpringMVC 控制器类或方法定义上方 |
| 作用     | 设置当前控制器方法请求访问路径   |
| 相关属性 | value(默认)，请求访问路径        |

### 知识点 3：@ResponseBody

| 名称 | @ResponseBody                                    |
| ---- | ------------------------------------------------ |
| 类型 | 类注解或方法注解                                 |
| 位置 | SpringMVC 控制器类或方法定义上方                 |
| 作用 | 设置当前控制器方法响应内容为当前返回值，无需解析 |

### 知识点 4：@ComponentScan

| 名称       | @ComponentScan                                                               |
| ---------- | ---------------------------------------------------------------------------- |
| 类型       | 类注解                                                                       |
| 位置       | 类定义上方                                                                   |
| 作用       | 设置 spring 配置类扫描路径，用于加载使用注解格式定义的 bean                  |
| 相关属性 1 | excludeFilters:排除扫描路径中加载的 bean,需要指定类别(type)和具体项(classes) |
| 相关属性 2 | includeFilters:加载指定的 bean，需要指定类别(type)和具体项(classes)          |

## 参考资料
