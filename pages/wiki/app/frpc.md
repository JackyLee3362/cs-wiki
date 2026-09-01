---
title: frpc
description:
date: 2026-08-29
update_date:
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

## docker-compose

```yml
version: '3'
services:
  frpc:
    image: /frpc:0.32.1
    restart: always
    network_mode: "host"
    volumes:
      - ./config:/etc/frp
      - ./log:/var/log
```