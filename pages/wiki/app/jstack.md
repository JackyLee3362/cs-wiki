---
title: jstack
date: 2025-11-03
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

jstack - Java 栈跟踪工具。

- 更多信息: [jstack - manned.org](https://manned.org/jstack)

```sh
# 打印 Java 进程中所有线程的 Java 栈跟踪：
jstack java_进程号

# 打印混合模式（Java/C++）的栈跟踪：
jstack -m java_进程号

# 打印来自 Java 核心转储的栈跟踪：
jstack /usr/bin/java 文件.core
```

## 参考资料
