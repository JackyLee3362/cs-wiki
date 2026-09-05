---
title: redis
date: 2024-10-14
update_date:
  - 2024-10-22
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 基础命令

- get
- prefixGet
- getCount(int)
- getCount(long)
- getCount(double)
- mapGet(hGet)
- setCard
- setMembers
- listGet
- listCount
- getItems
- getItemsCount
- prefixGetCount
- getKeyList
- mapGetAll

### redis 如何添加密码

配置文件的配置属性（取消注释）

```config
# ...
requirepass root
# ...
```

## 参考资料

- [Redis 配置文件中 bind 参数 | Bingo's Blog](https://bingozb.github.io/views/default/62.html#%E7%BD%91%E7%BB%9C%E6%8E%A5%E5%8F%A3)
- [如何高效深入的阅读 Redis 的源码？ - 知乎](https://www.zhihu.com/question/28677076/answer/1951003372)
- [旗木五五开 - 把 Redis 当作队列用，真的合适吗？ - 知乎](https://www.zhihu.com/question/595485413/answer/3317015495)
  - 概要: 我司用 redis 4 做队列，laravel 5.5 框架。 扛过了国内海外少说 40 亿 RMB 的支付流水。 扛过了买量投放 1 天 10 个亿的点击回调。 扛过了全部游戏上下线的上报、心跳上报。 至今也好好的。 别太较真，建议先上，性能瓶颈了再换。 别动不动就在那考虑各种极端情况，比如 redis 数据拿出来后的进程崩了？ 说不定你人不见了，系统还没崩呢。 很多时候你的担心是多余的，redis 的稳定性比你的写的可稳定太多了。 工作 10 年了，redis 崩了的情况至…
  - 点赞: 307
