---
title: openssl
description:
date: 2026-08-29
update_date:
draft: true
author: JackyLee
tags:
categories:
  - 命令行comment: true
---

## 生成随机 token

```sh
openssl rand -hex 32
```

```sh
openssl x509 -req -in xiaoxin.csr -CA rootca.crt -CAkey rootca.key -CAcreateserial -days 730 -sha512 -extfile xiaoxin.conf -extensions v3_req -out xiaoxin.crt
```
