# 3.6 局域网 LAN

## 局域网的基本概念和体系结构

- 局域网的特性由三个要素决定
  - 拓扑性质
  - 传输介质
  - 介质访问控制
- 三种特殊的局域网
  - 以太网 IEEE 802.3，逻辑拓扑是总线形，物理拓扑是星形结构
  - 令牌环 TR IEEE 802.5
  - 光纤分布式数字接口 FDDI IEEE 802.8

## 以太网与 IEEE 802.3

- 以太网的传输介质与网卡
  - 10BASE5
    - 传输媒体：基带同轴电缆（粗缆）
    - 编码：曼彻斯特编码
    - 拓扑结构：总线形
    - 最大段长：500 m
    - 最多结点数目：100
  - 10BASE2
    - 传输媒体：基带同轴电缆（细缆）
    - 编码：曼彻斯特编码
    - 拓扑结构：总线形
    - 最大段长：185 m
    - 最多结点数目：30
  - 10BASE-T
    - 传输媒体：非屏蔽双绞线
    - 编码：曼彻斯特编码
    - 拓扑结构：星形
    - 最大段长：100 m
    - 最多结点数目：2
  - 10BASE-FL
    - 传输媒体：光纤对（850nm）
    - 编码：曼彻斯特编码
    - 拓扑结构：点对点
    - 最大段长：2000 m
    - 最多结点数目：2
  - 网络适配器 Adapter 网络接口卡 NIC Network Interface Card
- 以太网的 MAC 帧
  - （前导码 8B）+目的地址 6B+源地址 6B+类型 2B+数据 46~1500B+FCS4B
  - 首部和尾部长度是 18B
  - 格式：帧控制 2B + 生存周期 ID2B + 接收端 RA + 发送端 TA + 目的地址 DA + 序列控制 2B+ 源地址 SA（不一定准确）
- 高速以太网
  - 100BASE-T 以太网
    - 材料：双绞线
    - 速率：100Mb/s
    - 拓扑结构：星形
    - 通信方式：全双工/半双工
    - 全双工模式下使用 CDMA/CD 吗 ：不使用
    - Mac 帧格式仍然按照 802.3 标准规定，保持最短帧长不变，帧间间隔从 9.6μs 变为 0.96μs
  - 吉比特以太网
    - 材料：光纤 或 4 对 UDP5 类线
    - 速率：1 Gb/s
    - 通信方式：全双工 / 半双工
  - 10 吉比特以太网
    - 材料：光纤
    - 速度：10 Gb/s
    - 通信方式：全双工

## IEEE 802.11

- 有固定基础设施无线局域网
  - 接入点 AP Access Point
  - 基本服务集 BSS Basic Service Set
  - 基本服务集标识符 BSSID Basic Service Set IDentifier
  - 基站 base station
  - 服务集标识符 SSID Service Set IDentifier
  - 分配系统 DS
  - 拓展的服务集 ESS Extended Service Set
  - 门桥 Portal
  - IEEE 802.11 数据帧有 4 种子类型
    - IBSS independent basic service set
    - From AP
    - To AP
    - WDS
  - DA Destination Address 目的地址
  - SA Source Address 源地址
  - RA Receive Address 接收地址
  - IBSS Independent Basic Service Set
- 无固定基础设施移动自组织网络
  - 又称自组网络 Ad Hoc network

## 令牌环网

- 环节口干线耦合器 TCU

## 习题

- 5 5 类无屏蔽双绞线 UTP 所能支持的最大长度为?→100m
- 5 放大器放大的是模拟信号，中继器放大的是数字信号，以太网通常采用{基带传输
- 6 网卡实现的主要功能在哪个层次?→ 物理层和数据链路层
- 9 在以太网中，大量的广播信息会降低整个网络性能的原因是 → 网络中的每台计算机都必须处理广播信息
- 9 「广播信息被路由器自动路由到每个网段」→ 错误
- 10 同一局域网中的两个设备具有相同的静态 MAC 地址时，会发生 → 在网络上的两个设备都不能正常通信
- 11 IEEE 802.3 标准规定，若采用同轴电缆作为传输介质，在无中继的情况下，传输介质的最大长度不能超过?→500m
- 14 IEEE 802.3 标准定义的以太网中，实现「给帧加序号」功能的层次是 → 逻辑链路控制子层 LCC
- 16 无线局域网不使用 CSMA/CD 而使用 CSMA/CA 的原因是 → 无线局域网不需要在发送过程中进行冲突检测
- 17 【2017】在下图所示的网络中，若主机 H 发送一个封装访问 Internet 的 IP 分组的 IEEE802.11 数据帧 F，则帧 F 的地址 1、地址 2 和地址 3 分别是 → 答案
  b - a - c
  To AP 子类型
  地址 1——RA（BSSID）Receiver Address
  地址 2——SA Source Address
  地址 3——DA Destination Address
  [查看文章](https://blog.csdn.net/chengwenyao18/article/details/7176090?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)
- 22 【2019】100BaseT 快速以太网使用的导向传输介质是 → 双绞线
