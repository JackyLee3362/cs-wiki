---
title: grep
date: 2025-04-28
draft: true
author: JackyLee
tags:
categories:
  - 命令行
comment: true
---

```sh
xxx | grep "<待过滤的字符串>"
```

```sh
grep "待过滤的字符串" 待过滤文件
```

## 如果过长，设置过滤条数

```sh
# 只匹配最开始 N 条
grep xxx | head -n N

# 只匹配最后 N 条
grep xxx | tail -n N
```

## 参考资料

- [Linux 文本处理三剑客：grep、sed 和 awk - 知乎](https://zhuanlan.zhihu.com/p/110983126)
