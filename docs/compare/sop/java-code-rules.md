---
title: java-code-rules
description:
date: 2026-02-14
update_date:
  - 2025-12-15
  - 2026-02-14
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 编码规范

## 单侧规范

## 日志规范

## 工程结构规范

## 异常规范

异常分为业务异常、系统异常、参数异常三类

- 参数异常: 接口参数错误，比如 IllegalArgumentException、ValidationException 异常，通常定义在 application 层
- 业务异常: 定义为 BusinessException 异常，通常定义在 application 层或 domain 层
- 系统异常: 定义为 SystemException 异常，比如 SQLException、IOException 技术类的异常，通常定义在 application 层

- 参数异常 and 业务异常抛出后禁止二次包装
- 系统异常首次捕获时包装，传递过程中禁止二次包装
