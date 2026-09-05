---
title: jcmd
date: 2025-11-03
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

```sh
# 基本使用
jcmd <PID|main class> <command> [options]

# 执行一次 GC
jcmd PID GC.run

# 打印所有线程的堆栈
jcmd PID Thread.print

# 生成转储文件
jcmd PID GC.heap_dump <file-name>
```

help: 显示 jcmd 支持的命令列表，以及每个命令的简要描述。
VM.version: 显示 JVM 的版本信息。
VM.flags: 显示 JVM 的启动参数。
VM.system_properties: 显示 JVM 的系统属性。
Thread.print: 打印 Java 进程中所有线程的堆栈信息。
GC.run: 执行一次垃圾回收。
GC.heap_dump: 生成 Java 堆转储文件（heap dump）。

## 参考资料
