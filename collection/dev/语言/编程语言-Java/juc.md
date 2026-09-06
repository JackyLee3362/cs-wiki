---
type: basic-note
title: juc
author: JackyLee
create_time: 2025-12-13
update_time:
tags:
description:
---

- [非墨 - Java中ThreadLocal的实际用途是啥？ - 知乎](https://www.zhihu.com/question/341005993/answer/1965545736826488150)
  - 概要: [图片] 飞线。 当需要跨多层传递状态时，ThreadLocal 就能用上了。以常规 HTTP 应用为例，通常（不谈特例）有个线程池，当请求进来时，会分配一个线程来处理。在这种多线程的模式下，如果单次请求内你需要共享状态，或者不得不跨多级传递参数，只用普通 static 的属性显然不行，那会导致串台，把 A 请求里的覆盖到了 B 请求里。而 ThreadLocal 会按线程进行隔离，用于共享和跨级传递就再合适不过了。 最典型的例子是会话。显然，你可以…
  - 点赞: 25

## 参考资料
