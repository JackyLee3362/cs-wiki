---
title: Signal
description: 默认端到端加密的开源即时通信软件。
---

Signal 是开源即时通信软件，支持私聊、群聊、文件发送及语音和视频通话，适合重视通信隐私的日常交流。消息与通话默认使用 Signal Protocol 端到端加密，服务端无法读取通信正文；双方都需要使用 Signal。

## 基本使用

1. 从[官网下载](https://signal.org/download/)手机端，用手机号注册；桌面端支持 Windows、macOS 和 Linux。
2. 在设置中创建用户名，通过用户名或二维码建立联系；在「隐私 → 手机号码」中分别设置号码可见性和能否通过号码找到自己。
3. 使用桌面端时，在手机「已连接的设备」中扫描桌面端二维码完成关联。

## 关键区别与坑点

- **用户名不替代注册手机号**：它用于建立联系时避免向对方提供号码，不等于匿名注册。见[号码隐私与用户名](https://support.signal.org/hc/en-us/articles/6712070553754-Phone-Number-Privacy-and-Usernames)。
- **加密保护通信内容，不阻止接收者留存**：对方仍可复制、截图或拍照；阅后即焚不能保证内容不被保存。
- **Signal PIN 不是聊天备份**：PIN 用于恢复个人资料、设置和联系人等信息，不能恢复聊天记录。见[PIN 说明](https://support.signal.org/hc/en-us/articles/360007059792-Signal-PIN)。
- **换机前先确认备份或迁移方式**：Secure Backups 需要主动启用并保管恢复密钥；Android 本地备份是另一套机制，不能混用。关联的桌面设备不能替手机恢复聊天记录。见[备份与恢复限制](https://support.signal.org/hc/en-us/articles/10075139325850-Troubleshooting-Signal-Secure-Backups)。

## 参考资料

- [官网](https://signal.org/)
- [官方源码](https://github.com/signalapp)：手机端、桌面端及服务端等项目。
- [官方帮助中心](https://support.signal.org/)
- [关联设备说明](https://support.signal.org/hc/en-us/articles/360007320551-Linked-Devices)
- [总览](docs/index.md)
