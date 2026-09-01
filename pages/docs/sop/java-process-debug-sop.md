---
title: java-process-debug-sop
description: JVM 调试步骤
date: 2025-11-03
update_date:
draft: true
author: JackyLee
tags:
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

jvm 分析步骤

```sh
# 步骤1: 查询进程
jps -l

# 步骤2: 查询 VM 选项
jcmd <PID> VM.flags
jcmd <PID> VM.system_properties

# 步骤3: 监视 jvm 内存和垃圾回收
jstat -gc <PID> 5000 10

# 使用 jstack 生成线程堆栈信息
jstack <PID>
# 或者 jcmd <PID> Thread.print

# 使用 jmap 生成堆转储文件
jmap -dump:file=heapdump.hprof <PID>

# 使用 Eclipse Memory Analyze (MAT) 或者 VisualVM 进行分析
```

## 参考资料

- [使用 JDK 自带工具进行 JVM 内存分析之旅-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2410627)
