# 4.3 IPv4

## IPv4 分组

- ~网际互联协议 IP 协议 Internet Protocol
- IPv4 即现在普遍使用的 IP（版本 4）协议
- IPv6
- 基本单元：IP 分组 / IP 数据报
- IPv4 分组格式
- 版本
- 首部长度：最常用的首部长度是 20B
- 总长度
- 标识
- 标志
- 片偏移
- 生存时间 TTL Time to Live
- 协议
- 首部校验和：只检验分组的首部，而不校验数据部分
- 源地址字段
- 目的地址字段
- 一种 8 片首饰：总长度 1B，片偏移 8B，首部长度 4B
- IP 数据报分片
- MTU 最大传输单元 Maximum Transmission Unit
  - 以太网 MTU 不超过：1500B
  - 广域网 MTU 不超过：576B
- 标志位
  - MF 位（More Fragment）= 1 时 表示还有后续的片
  - DF 位（Don't Fragment） = 0 时 表示数据报可以被分片
- 网络层转发分组的流程
- 直接交付
- 间接交付
- 注意：得到下一跳 IP 路由器的 IP 地址后并不是直接将该地址填入待发送的数据报，而是将该 IP 地址转换成 MAC 地址（通过 ARP），将其放到 MAC 帧首部中，然后根据这个 MAC 地址找到下一跳路由器。在不同网络中传送时，MAC 帧中的源地址和目的地址要发生变化，但是网桥在转发帧时，不改变帧的源地址，请注意区分 知识点

## IPv4 地址与 NAT

- IP 地址的结构 = {<网络号>, <主机号>}
  - A 类：1 - 126
  - B 类：128 - 191
  - C 类：192 - 223
  - D 类：224 - 239
  - E 类：240 - 255
  - 特殊 IP 地址
    - 主机号全 0：网络本身
    - 主机号全 1：广播地址
    - 127.x.x.x ：环回自检地址 Loopback Test，目的地址为环回自检地址的 IP 数据报永远不会出现在网络上
    - 0.0.0.0：本网络上的本主机
    - 255.255.255.255 ：整个 TCP/IP 网络的广播地址（受限广播地址）
  - 常用的三种类别 IP 地址的使用范围
- 网络地址转换 NAT Network Address Translation
  - NAT 工作在哪一层 ：传输层 ，因为它要查看端口号，而端口号是在传输层的
  - 私有 IP 地址网段
    - A 类网段 1 个：10.0.0.0 - 10.255.255.255
    - B 类网段 16 个：172.16.0.0 - 172.31.255.255
    - C 类网段 256 个：192.168.0.0 - 192.168.255.255
  - 专用互联网：采用私有 IP 地址（可重用地址）在互联网络称为专用互联网或本地互联网
- 子网划分与子网掩码、CIDR
- 子网划分
  - IP 地址的结构 = {<网络号>, <子网号>, <主机号>}
- 子网掩码
- 无类别域间路由选择 CIDR Classless Inter-Domain Routing
  - IP 地址的结构 = {<网络前缀>, <主机号>}
  - 一个 CIDR 地址快可以表示很多地址，这种地址的聚合称为路由聚合
  - 最长前缀匹配（最佳匹配）
- IP 地址是 A.用的地址，硬件地址是 B. 用的地址?→A.网络层，B. 数据链路层

## ARP DHCP ICMP

- NAT
  - 由于 NAT 能看到端口，所以工作在传输层
- 地址解析协议 ARP, Address Resolution Protocol
  - 网络层协议
- 动态主机配置协议 DHCP, Dynamic Host Configuration Protocol
  - DHCP 应用层协议
  - DHCP 基于 UDP 协议
  - 工作原理（什么模型）C/S Model
  - 相关
    - 提供报文
    - 租用期
- ICMP, Internet Control Message Protocol 网际控制报文协议
  - ICMP 是网络层的协议
  - 使用 ICMP 的目的：提高 IP 数据报交付成功的机会
  - ICMP 差错报告报文 ↓
    - 终点不可达
    - 源点抑制
    - 时间超过
    - 参数问题
    - 改变路由（重定向）
  - ICMP 询问报文 ↓
    - 回答请求和回答报文（常用）
    - 时间戳请求和回答报文（常用）
    - 掩码地址请求和回答报文
    - 路由器询问和通告报文

## 习题

- 2 以下关于 IP 分组结构的描述中，判断正误
  A IPv4 分组头的长度是可变的
  B 协议字段表示 IP 版本，值为 4 表示 IPv4
  C 分组头长度字段以 4B 为单位，总长度字段以字节为单位
  D 生存时间字段值表示一个分组可以经过的最多的跳数
  答案 →B 错误，不是协议字段，是版本字段
- 5 IP 分组中的检验字段检查范围是
  A 整个 IP 分组
  B 仅检查分组首部
  C 仅检查数据部分
  D 以上皆检查
  答案 →B
- 9 关于 IP 分组分片的基本方法的描述中，判断正误
  A IP 分组长度大于 MTU 时，就必须对其进行分片
  B DF = 1，分组长度又超过 MTU 时，则丢弃该分组，不需要向源主机报告
  C 分片的 MF 值为 1 表示接收到的分片不是最后一个分片
  D 属于同一原始 IP 分组的分片具有相同的标识符 →B 错误，需要向源主机发送 ICMP 差错报文
- 19 把 IP 网络划分成子网，这样做的好处是?→ 减少广播域大小，子网之间的数据传输需要通过路由器
- 21【2010】某网络的 IP 地址空间为 192.168.5.0/24，采用定长子网划分，子网掩码为 255.255.255.248，则该网络中的最大子网个数、每个子网内的最大可分配地址个数分别是 →32 ，6
- 22 一台主机有两个 IP 地址，一个地址是 192.168.11.25，另一个地址可能是
  A 192.168.11.0
  B 192.168.11.26
  C 192.168.13.25
  D 192.168.11.24→C，如果一台主机有两个或两个以上的 IP 地址，那么说明这台主机属于两个或两个以上的逻辑网络。值得注意的是，在同一时刻一个合法 IP 地址只能分配给一台主机，否则就会引起 IP 地址冲突。IP 地址 192.168.11.25 属于 C 类 IP 地址，所以 ABD 属于同一个逻辑网络，只有 C 的网络号不同，表明它在不同的逻辑网络
- 23 CIDR 技术的作用是什么?→ 把小的网络汇聚成大的超网
- 32 【2012】某主机的 IP 地址为 180.80.77.55，子网掩码为 255.255.252.0。若该主机向其所在子网发送广播分组，则目的地址可以是
  A 180.80.76.0
  B 180.80.76.255
  C 180.80.77.255
  D 180.80.79.255→D
- 35 37 ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/KSjslXOz--QAkrVuUkQA_6r5GFzsQcXJXgYNNJdJsBuX4r2xkJnSvS59bVkSTJ0IrgoX3n_0YsDK4ZFplINZOivAL_y7vJJbCIWkX7Oxs8NhgRmg29KmDwPAFL8V0i-r.png)
- 【2016】如图，假设 H1 与 H2 的默认网关和子网掩码分别配置是 192.168.3.1 和 255.255.255.128，H3 和 H4 的默认网关和子网掩码均分别配置是 192.168.3.254 和 255.255.255.128，则下列现象可能发生的是
  A H1 不能与 H2 进行正常通信
  B H2 和 H4 不能访问 Internet
  C H1 不能与 H3 进行正常 IP 通信
  D H3 不能与 H4 进行正常 IP 通信 →C
- 【2016】假设连接 R1、R2 和 R3 之间的点对点链路使用地址 201.1.3.x/30，当 H3 访问 Web 服务器 S 时，R2 转发出去的封装 HTTP 请求报文的 IP 分组时源 IP 地址和目的 IP 地址，他们分别是
  A 192.168.3.251 130.18.10.1
  B 192.168.3.251 201.1.3.9
  C 201.1.3.8 130.18.10.1
  D 201.1.3.10 130.18.10.1
- 36 【2017】下列 IP 地址中，只能作为 IP 分组的源 IP 地址但不能作为目的 IP 地址的是
  A 0.0.0.0
  B 127.0.0.1
  C 200.10.10.3
  D 255.255.255.255→A
- 40 略 不是很懂为什么不新建一个 → 因为 NAT 的表项需要管理员添加，这样才能控制一个内网到外网的网络连接
- 42【2012】ARP 的功能是
  A 根据 IP 地址查询 MAC 地址
  B 根据 MAC 地址查询 IP 地址
  C 根据域名查询 IP 地址
  D 更具 IP 地址查询域名 →A
- 44 主机发送 IP 数据报给主机 B，途中经过了 5 个路由器，共使用了 几次 ARP?→6 次
- 48 若路由器 R 因为拥塞丢弃 IP 分组，则此时 R 可向发出该 IP 分组的源主机发送的 ICMP 报文类型是什么，其他三个又是什么?→ 源点抑制，其他分别是目的不可达，时间超过，参数问题，改变路由（重定向）
- 50 【2012】在 TCP/IP 体系结构中，直接为 ICMP 提供服务的协议是 →IP
- 52 【2018】某路由表中有转发接口相同的 4 条路由表项，其目的网络地址分别是 35.230.32.0/21、35.230.40.0/21、35.230.48.0/21、35.230.56.0/21，将该 4 条路由聚合后的目的网络地址是 →35.230.32.0/19
- 53【2018】路由器 R 通过以太网交换机 S1 和 S2 连接两个网络，R 的接口、主机 H1 和 H2 的 IP 地址与 MAC 地址如下图所示。若 H1 向 H2 发送一个 IP 分组 IP，则 H1 发出的封装 P 的以太网帧的目的 MAC 地址、H2 收到的封装 P 的以太网帧的源 MAC 地址分别是
  ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/9a1Yu4XR1Uc93RRbBHcrHdOyDUaOT61syQ-dfBY_dj61vhbkWboiSvhaWdmmdnvR0IgPHdfwGGbUkzY1xT51lR2WJjHAxSrIwoBpiviG5eGl4zThIzXu2GbGeBLauXES.png)→xxxx51 ，61
  解析：ARP 用于解决同一个局域网上的主机或路由器的 IP 地址和硬件地址的映射问题。如果所要找的主机和源主机不再用一个局域网上，那么就要通过 ARP 找到一个位于本局域网上的某个路由器的硬件地址，然后把分组发送给这个路由器，让这个路由器把分组转发给下一个网络。剩下的工作就由下一个网络来做，尽管 ARP 请求分组时广播发送的，但 ARP 响应分组时普通的单播，即从一个源地址发送到一个目的地址
- 54 若将 101.200.16.0/20 划分为 5 个子网，则可能的最小子网的可分配 IP 地址数是?→254
- z-7 略
- z-8 略
- z-10 略
- 综合题 12 【2009】
  - ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/jETgMJ_-0h_UApps31OXUX-dme_9149nzC3HHnatfr6DuyWbK8vUBf0TBOeoXLJNvOEOhdsd3EebYJy3TOTN-yFRUwq1FFQMoEK-aRsFUi9a2lBP9G2wJTX1jrtUVHM4.png)→ 看书 172 页
- z-13
- z-14
- 综合题 15 - ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/H6pq6RAA3Brb_KkFBI602U_dyVQwl2aysb6WP8dYWz9KG2BFfivJt53i8C4C_85MZf7d1EsijKXOneAUF47snhiKxEnxpEnUeuJ1CWH-WlVV2iK5AXdiaKpafxLw7-4W.png)→ 答案
  A. 111.123.15.5 ~ 111.123.15.254
  源 IP 地址 0.0.0.0；目的 IP 地址 111.123.15.255
  B. 目的 MAC 地址 FF-FF-FF-FF-FF-FF；00-a1-a1-a1-a1-a1-a1
  C. 可以访问 WWW 服务器但不能访问 Internet，因为和 WWW 服务器属于同一个网段，但是默认网关配置错误
- 综合题 16 【2018】 - ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/aejJ0iqb2LXLZiXbZ0_lP2sMtxyoZm7aAj8PblksFSyoZSuf0VOcvVSflMo5JHbi_iKADbt71ACDbBH2TD5s8YtAFOamDTER4Vrnnp4pOr_WNZu0z-3cVIs9MU04l3fw.png)→ 答案
  A. 192.168.1.127；192.168.1.128，128-2（全 0 和全 1）-80（已分配）-1（路由器）=79 台
  B. 1500 = 20 + 1480 = (20 + 776) + ( 20+ 704)，片偏移是 97
- 综合题 17【2020】 - ![](local://D:/OneDrive/Documents/2021/RemNote/publish-cs/files/xybmiJO0l4g_UNPSxj1glaEqUi6JWnrWkmC328J2sG5QoD4qOtWF63HB3X5wo_Hmz7QUrj23k1zEFxuJZctHfjL4Q2BoJg8twX24BLXGaasyi7gqmWgaMtB0MSWvhofU.png)→ 答案
  A. 外网 IP 地址 203.10.2.2 80；内网 IP 地址 192.168.1.2 80
  B. H2 发送：源 IP 地址 192.168.1.2 目的 IP 地址 203.10.2.2
  经过 R3 转发后：源 IP 地址 203.10.2.6 目的 IP 地址 203.10.2.2
  经过 R2 转发后：源 IP 地址 203.10.2.6 目的 IP 地址 192.168.1.2
