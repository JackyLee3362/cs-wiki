---
title: docker-inspect
description:
date: 2026-08-30
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 下载后查看版本

```sh
docker inspect -f '{{index .Config.Labels "org.opencontainers.image.version"}}' 镜像名
```
