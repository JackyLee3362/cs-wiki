---
title: jps
date: 2025-09-05
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

显示当前用户的 JVM 进程状态。

更多信息: [The jps Command](https://docs.oracle.com/en/java/javase/20/docs/specs/man/jps.html)

```sh
# 列出所有 JVM 进程：
jps

# 列出所有 JVM 进程，只打印进程号：
jps -q

# 显示传递给进程的参数：
jps -m

# 显示所有进程的完整软件包名称：
jps -l

# 显示传递给 JVM 的参数：
jps -v
```

## 参考资料
