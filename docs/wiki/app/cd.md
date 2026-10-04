---
title: cd
description:
date: 2026-10-04
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## FAQ

### 关于使用 `sudo cd` 失败的原因

因为 cd 是 shell 的内建命令（builtin），不是一个可执行文件

```sh
man cd
# 执行这个命令后，就可以看到很多内置命令
```
