---
title: wsl
date: 2025-02-25
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

## 查看版本和信息

```bash
# 查看可安装的分发版
wsl --list --online
# 安装特定版本
wsl --install Debian
# 查看状态
wsl --status
# 登录：以root用户登录，密码123456
wsl -u root
# 如果想设置登录时默认镜像
wsl --set-default Debian
```

资源管理器打开 wsl 目录

```explore.exe
\\wsl.localhost\Ubuntu
```

备份与还原

```bash
# 导出
wsl --export 镜像名 路径
wsl --export centos D:/tmp/backup.tar
# 导入
wsl --import 镜像名 镜像放的位置 tar包所在路径
```

## FAQ

### 装 centos，镜像迁移，wsl 和 win 命令互相调用

[如何优雅的使用 WSL\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Ku4y1f7nq)

### 代理问题

```shell
# 第一步：wsl 找到 win 地址
cat /etc/resolv.conf
# 第二步：使用 clash 局域网
# 临时（记得clash要【允许使用局域网】）
export ALL_PROXY="http://172.19.80.1:7890"
# 如果需要永久
```

export ALL_PROXY="http://172.19.80.1:7890"

- [为 WSL2 一键设置代理 - RioTian](https://www.cnblogs.com/RioTian/p/17986762)
- [为 WSL2 一键设置代理 - 知乎](https://zhuanlan.zhihu.com/p/153124468)

但是又出现了新的问题，

- [解决"wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理" - JustInCase - 博客园](https://www.cnblogs.com/hg479/p/17869109.html)

### 修改密码问题

- [Windows10 WSL Ubuntu 忘记 root 密码如何重置 - 何大卫 - 博客园](https://www.cnblogs.com/heenhui2016/p/12916476.html)

## 参考资料

[设置 WSL 开发环境 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment)

- [在 Windows Terminal 与 WSL 2 下安装 Neovim - 知乎](https://zhuanlan.zhihu.com/p/434729349)
