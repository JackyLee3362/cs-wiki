---
title: JWT
description: JSON Web Token 认证机制
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 认证
categories:
  - 编程语言
comment: true
---

> JWT（JSON Web Token）是一种开放标准（RFC 7519），用于在网络应用间安全地传输信息。

## 核心概念

- **Header**：令牌类型和签名算法
- **Payload**：声明（claims），如用户 ID、过期时间
- **Signature**：对前两部分进行签名，确保数据未被篡改

## 与 Token + Redis 对比

| 方案 | 特点 | 适用场景 |
|------|------|----------|
| JWT | 无状态，服务端无需存储 | 分布式系统、微服务 |
| Token + Redis | 服务端控制会话，可强制下线 | 需要会话管理的场景 |

## 参考资料

- [jwt 与 token+redis，哪种方案更好用？ - 知乎](https://www.zhihu.com/question/274566992/answer/2912244660) #todo
