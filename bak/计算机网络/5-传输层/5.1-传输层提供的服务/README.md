# 5.1 传输层提供的服务

## 传输层的功能

- 逻辑通信
- 复用分用
- 差错检测
- 提供两种不同的协议，面向连接的 TCP 和无连接的 UDP

## 传输层的寻址和端口(Port)

- 端口的作用
- 端口号
- 服务器使用的端口号
  - 熟知端口号（0-1023）IANA
  - 登记端口号（1024-49151）
- 客户端使用的端口号
  - 短暂端口号 / 临时端口号
- 熟知端口号及使用的协议
  - FTP (File Transfer Protocol，文件传输协议)
    - 端口号: 21
    - 使用的协议：TCP
  - TELNET (远程登录协议)
    - 端口号: 23
    - 使用的协议：TCP
  - SMTP(Simple Mail Transfer Protocol, 简单邮件传输协议)
    - SMTP 用于发送文件
    - 端口号: 25
    - 使用的协议：TCP
  - DNS(Domain Name System, 域名系统)
    - 端口: 53
    - 使用的协议：UDP
  - TFTP(Trivial File Transfer Protocol, 简单文件传输协议)
    - 端口号: 69
    - 使用的协议：UDP
  - HTTP | 超文本传输协议
    - 端口号：80
    - 使用的协议：TCP
  - POP3 | Post Office Protocol | 邮局协议
    - 用于接收文件
    - 端口号：110
    - 使用的协议：TCP
  - SNTP | Simple Network Time Protocol | 简单网络时间协议
    - 用途：用来同步因特网上的时钟
    - 端口号：161
    - 使用的协议：UDP
- 套接字 Socket = {IP 地址; 端口号}

## 无连接服务 面向连接服务

- TCP
- UDP

## 习题

    - 13 若用户程序使用UDP进行数据传输，则应用层协议必须承担可靠性方面的全部工作
