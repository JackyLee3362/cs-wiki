# 408 小知识

计算机网络

- Ad hoc network Ad Hoc network 自组网络
- Async Asynchronous 异步
- C/S Custom/Service 客户/服务端
- DIFS DCF Inter Frame Space 分布式协调 IFS
- DS Distribution System 基本服务区
- FDDI Fiber Distributed Data interface IEEE 802.8 光纤分布式数据接口
- Hop Count Hop Count 跳数
- IANA Internet Assigned Numbers Authority 互联网地址指派机构
- IFS Inter Frame Space 帧间间隔
- IGMP Internet Group Management Protocol 因特网组管理协议
- 和 IP 组播有关
- LLC Logical Link Control 逻辑链路控制子层
- MIME Multipurpose Internet Mail Extensions 多用途互联网邮件拓展类型
- MSS Maximum Segment Size 最大报文段长度
- OSI/RM Open System Interconnect Reference Model 开放式系统互连
- PIFS PCF Inter Frame Space 点协调 IFS
- Private Network Private Network 专用网
- Public Network Public Network 公用网
- RARP Reverse Address Resolution Protocol 反向地址传输协议
- RTO Retransmission Time-Out
- RTS Request to send 请求发送
- SIFS Short Inter Frame Space 短 IFS
- Socket Socket 套接字
- SSID Service Set IDentifier
- SYN Synchronize Sequence Numbers 同步序列编号
- Sync Synchronous 同步
- TCU 环节口干线耦合器
- TLD Top Level Domain 顶级域名
- TR Token Ring, IEEE 802.5 令牌环
- URL uniform resource locator 统一资源定位符
- VLAN Virtual Local Area Network 虚拟局域网
- WDS Wide Distributed System 广域分布式系统
- WWW World Wide Web

基带 Baseband

- 概念
  - 信源发出的没有经过调制（进行频谱搬移和变换）的原始电信号所固有的频带（频率带宽），称为基本频带，简称基带
- 基带信号 Baseband Signal
  - 信源（信息源，也称发终端）发出的没有经过调制（进行频谱搬移和变换）的原始电信号，其特点是频率较低，信号频谱从零频附近开始，具有低通形式
- 基带传输
  - 在信道中直接传送基带信号时，称为基带传输。进行基带传输的系统称为基带传输系统。传输介质的整个信道被一个基带信号占用.基带传输不需要调制解调器，设备化费小，具有速率高和误码率低等优点，适合短距离的数据输，传输距离在 100 米内，在音频市话、计算机网络通信中被广泛采用。如从计算机到监视器、打印机等外设的信号就是基带传输的。大多数的局域网使用基带传输，如以太网、令牌环网。
  - 在有线信道中，直接用电传打字机进行通信时传输的信号就是基带信号。一个企业、工厂，就可以采用这种方式将大量终端连接到主计算机。基带数据传输速率为 0 ～ 10 Mb／s，更典型的是 1Mb／s ～ 2.5Mb／s，通常用于传输数字信息

频带

- 对基带信号调制后所占用的频率带宽（一个信号所占有的从最低的频率到最高的频率之差）
- 频带传输：
  - 在信道中直接传送频带信号时，称为频带传输。可以远距离传输，它的缺点是速率低，误码率高
  - 一般说的频带传输是数字基带信号经调制变换，成为能在公用电话线上传输的模拟信号，模拟信号经模拟传输媒体传送到接收端后，再还原成原来信号的传输
  - 这种频带传输不仅克服了目前许多长途电话线路不能直接传输基带信号的缺点，而且能够实现多路复用，从而提高了通信线路的利用率
  - 但是频带传输在发送端和接收端都要设置调制解调器，将基带信号变换为通带信号再传输。频带传输的优点是可以利于现有的大量模拟信道（如模拟电话交换网）通信，价格便宜，容易实现.家庭用户拨号上网就属于这一类通信
- 宽带传输 Broadband：
  - 是相对一般说的频带传输而言的**宽频带传输**
  - 宽带是指比音频带宽更宽的频带，它包括大部分电磁波频谱
  - 使用这种宽频带传输的系统，称为宽带传输系统
  - 其通过借助频带传输，可以将链路容量分解成两个或更多的信道，每个信道可以携带不同的信号，这就是宽带传输。宽带传输中的所有信道都可以同时发送信号。如 CATV、ISDN 等。传输的频带很宽在>=128kbps
  - 宽带是传输模拟信号，数据传输速率范围为 0 ～ 400Mb／s，而通常使用的传输速率是 5Mb／s ～ 10 Mb／s。它可以容纳全部广播，并可进行高速数据传输。宽带传输系统多是模拟信号传输系统

