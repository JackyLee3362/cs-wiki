---
title: Redis 常见面试知识点
sidebar_position: 2
description: Redis 数据类型、缓存一致性、持久化、分布式锁和故障排查。
---

以 Redis Open Source 的常见使用方式为背景，具体命令、编码和线程模型需要结合版本。回答缓存问题时，先说明数据源、允许的陈旧时间和失效后的处理方式。

## 1. 常用数据类型怎么选？

| 类型 | 常见场景 | 注意点 |
| --- | --- | --- |
| String | 缓存值、计数器 | 对象序列化后通常需要整体读取 |
| Hash | 对象字段 | 注意字段数量和大对象问题 |
| List | 有序列表、简单队列 | 可靠消费还需要确认和重试设计 |
| Set | 去重、成员判断 | 大集合运算需评估阻塞成本 |
| Sorted Set | 排行榜、按分数检索 | 相同分数的成员仍有排序规则 |
| Stream | 事件流、消费组 | 确认、待处理消息和重复消费需自行处理 |

底层编码可能随版本、元素数量和元素大小变化，不宜把一种编码背成永远成立的实现。参见 [Redis 数据类型](https://redis.io/docs/latest/develop/data-types/)。

## 2. 为什么快？是不是单线程？

内存访问、适合业务的数据结构以及减少常见命令执行过程中的并发协调，都是性能来源。但 Redis 并非整个进程只有一个线程：网络 I/O、后台任务等与命令执行应分别讨论，具体实现受版本影响。

**工作场景**：慢命令、大键、长 Lua 脚本仍可能阻塞其他请求。不能用「Redis 很快」代替容量评估。

## 3. 缓存穿透、击穿和雪崩

| 问题 | 现象 | 常见处理 |
| --- | --- | --- |
| 穿透 | 不存在的数据反复访问数据库 | 参数校验、短期空值缓存、布隆过滤器 |
| 击穿 | 热点键失效，大量请求同时回源 | 合并同键请求、互斥重建、允许时返回旧值 |
| 雪崩 | 大量键同时失效或缓存集群不可用 | TTL 加抖动、分批预热、限流与降级 |

布隆过滤器可能误判「存在」；使用时还要保证新增数据及时纳入过滤器。空值缓存的 TTL 需要兼顾减压和新数据可见性。随机 TTL 只能缓解集中到期，不能解决整套缓存不可用。

## 4. 缓存与数据库如何保持一致？

常见 Cache Aside：读请求先查缓存，未命中再读数据库并回填；更新时先提交数据库，再删除缓存。

这种做法仍有竞态：读请求取到旧值后暂停，写请求更新数据库并删缓存，旧读请求随后把旧值写回。删除失败也是独立问题。

**回答重点**：先明确一致性要求，再组合 TTL、可靠失效事件、失败重试、版本控制等措施。延迟双删只能缩小部分窗口，不能证明强一致；特别关键的读路径可直接查询权威数据源。

## 5. RDB 与 AOF

RDB 保存时间点快照，AOF 记录写操作。RDB 的恢复点取决于快照时机；AOF 的耐久程度取决于刷盘策略，`everysec` 通常存在约一秒的数据丢失窗口，不能视为绝对上限。

后台快照和 AOF 重写会消耗 CPU、I/O，并可能因写时复制增加内存压力。持久化文件也需要独立备份和恢复演练。参见 [Redis 持久化](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/)。

## 6. 过期与内存淘汰有什么区别？

过期由 TTL 决定，Redis 通过访问检查和后台周期检查等方式清理；内存淘汰是在达到内存限制时，按策略选择移除对象或拒绝相关写入。

**追问**：设置了 TTL 就不会内存不足吗？不会；还要考虑写入速率、大键、复制缓冲和持久化开销。选择 LRU、LFU 或 `noeviction` 前，应明确数据是否可丢、是否可重建。

## 7. Redis 分布式锁需要哪些条件？

单实例常见加锁形式：

```text
SET lock:order:123 <每次加锁生成的唯一令牌> NX PX 30000
```

检查成功后才能执行业务。解锁必须原子地比较令牌并删除，避免误删其他持有者的锁；常见兼容写法是 Lua：

```lua
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
```

锁到期不等于旧持有者停止执行。续租、主从切换和网络暂停都需要讨论；对不能重复写入的业务，应通过唯一约束、条件更新或由资源端校验的 fencing token 兜底。唯一随机令牌只标识持有者，不是单调递增的 fencing token。参见 [分布式锁](https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/)。

## 8. MULTI、WATCH、Lua 与 Pipeline

`MULTI/EXEC` 将命令排队并连续执行，但不是关系数据库式的自动回滚事务：执行期某条命令失败，不会撤销已成功的命令。`WATCH` 用于检测被观察键在提交前是否发生变化。

Lua 可把读取、判断、写入组合成不可被其他命令插入的执行过程，但脚本报错也不自动撤销之前的写入。Pipeline 主要减少往返开销，本身不提供事务隔离。参见 [Redis 事务](https://redis.io/docs/latest/develop/using-commands/transactions/)。

## 9. 主从、Sentinel 与 Cluster

复制提供副本；Sentinel 面向非 Cluster 部署提供监控和故障转移；Cluster 把数据分布在 16384 个哈希槽上，并支持分片故障转移。

多键命令、事务或脚本通常要求相关键位于同一槽，可用 hash tag 控制，但集中太多键会形成热点。异步复制和故障转移可能丢失已确认写入，高可用不等于强一致。参见 [Cluster 规范](https://redis.io/docs/latest/operate/oss_and_stack/reference/cluster-spec/)和[复制说明](https://redis.io/docs/latest/operate/oss_and_stack/management/replication/)。

## 10. Redis 延迟突然升高怎么查？

先分清客户端连接等待、网络耗时与服务端执行耗时，再结合 `INFO`、`SLOWLOG GET`、CPU、内存、网络和持久化时段定位。慢日志主要反映命令执行时间，不能覆盖全部端到端延迟。

**大键**关注字节数或成员数，**热键**关注访问频率。用渐进扫描代替在线全量 `KEYS *`；即使使用 SCAN，也要限制扫描节奏，并接受重复返回等语义。热点可考虑本地缓存、请求合并或业务拆分，同时评估一致性成本。

## 参考资料

- [Redis 内存淘汰](https://redis.io/docs/latest/develop/reference/eviction/)
- [SLOWLOG GET](https://redis.io/docs/latest/commands/slowlog-get/)
- [SCAN](https://redis.io/docs/latest/commands/scan/)
