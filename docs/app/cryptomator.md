---
title: Cryptomator
description: 为云盘文件提供客户端加密。
---

Cryptomator 将文件内容和名称加密后存入保险库，解锁时通过虚拟磁盘访问明文；云盘客户端负责同步密文，Cryptomator 本身不负责同步。

## 基本使用

1. 从官网下载桌面客户端，在云盘同步目录中新建保险库。
2. 设置独立密码，离线保存恢复密钥。
3. 解锁后，只在虚拟磁盘中读写文件；完成后锁定，等待云盘同步完成。

## 关键边界

- 文件大小、时间戳等元数据并未全部隐藏；已解锁文件和应用生成的临时明文也不受完整保护。见[安全边界](https://docs.cryptomator.org/security/security-target/)。
- 改密码不会重新加密全部文件，旧密钥文件的历史副本仍需考虑；密钥泄露后应迁移到新保险库。见[密码与恢复密钥](https://docs.cryptomator.org/desktop/password-and-recovery-key/)。
- 同步会传播删除和损坏，需要单独备份完整保险库，不能只保存恢复密钥。

## 参考资料

- [官网与下载](https://cryptomator.org/)
- [源码](https://github.com/cryptomator/cryptomator)
- [官方入门](https://docs.cryptomator.org/desktop/getting-started/)
- [加密同步与恢复检查](docs/solution/cryptomator-encrypted-sync.md)
