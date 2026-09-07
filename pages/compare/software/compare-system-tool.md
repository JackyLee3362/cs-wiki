---
title: System Utilities
description: 系统实用工具对比
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - system
  - utility
  - 系统工具
categories:
  - 应用软件
comment: true
---

> 系统实用工具覆盖软件卸载、进程管理、文件去重、系统备份、硬件监控、系统安全加固等场景，是维护操作系统健康运行的基础软件。

## 工具概览

| 工具 | 类型 | 开源 | 价格 | 平台 | 核心特点 |
| :--- | :--- | :--: | :--- | :--- | :--- |
| [GeekUninstaller](https://geekuninstaller.com) | 软件卸载 | ❌ | 免费 | Windows | 彻底卸载软件，清除残留文件和注册表，仅 6MB |
| [f.lux](https://justgetflux.com) | 护眼工具 | ❌ | 免费 | 全平台 | 根据时间自动调节屏幕色温，过滤蓝光 |
| [Process Hacker](https://processhacker.sourceforge.io/) | 进程管理 | ✅ | 免费 | Windows | 高级任务管理器，查看进程行为和网络连接 |
| [Ninite](https://ninite.com/) | 批量安装 | ❌ | 免费 | Windows | 一次性静默安装 60+ 常用软件，跳过广告和捆绑 |
| [Hardentools](https://github.com/securitywithoutborders/hardentools) | 安全加固 | ✅ | 免费 | Windows | 激进减少系统攻击面，面向个人用户 |
| [CompactGUI](https://github.com/IridiumIO/CompactGUI) | 无损压缩 | ✅ | 免费 | Windows | 调用 Windows 内置 compact.exe 压缩文件/文件夹 |
| [FreeFileSync](https://freefilesync.org/) | 文件同步 | ✅ | 免费 | 全平台 | 文件夹比较与同步，支持双向和镜像同步 |
| [Duplicate Cleaner](https://www.digitalvolcano.co.uk/duplicatecleaner.html) | 重复文件清理 | ❌ | 免费+付费 | Windows | 查找和删除重复文件，支持相似图片匹配 |
| [Unlocker](https://unlocker.en.softonic.com/) | 文件解锁 | ❌ | 免费 | Windows | 查看和终止占用文件的进程，删除顽固文件 |
| [MacType](https://www.mactype.net/) | 字体渲染 | ❌ | 免费 | Windows | 模拟 macOS 华丽的字体渲染效果 |
| [GPU-Z](https://www.techpowerup.com/gpuz/) | 显卡信息 | ❌ | 免费 | Windows | 显卡详细参数和性能监控 |
| [AIDA64 Extreme](https://www.aida64.com/) | 硬件检测 | ❌ | 付费 | Windows | 系统性能测试和硬件全面监控 |
| [MSI Afterburner](https://www.msi.com/Landing/afterburner) | 显卡超频 | ❌ | 免费 | Windows | 自定义超频、电压、风扇曲线，自带监控 |
| [OpenWrt](https://openwrt.org/) | 路由器固件 | ✅ | 免费 | 嵌入式 | 开源路由器固件，支持插件扩展和多拨 |
| [NVIDIA App](https://www.nvidia.com/en-us/software/nvidia-app/) | 显卡管理 | ❌ | 免费 | Windows | 替代 GeForce Experience，管理驱动和设置 |

## 按场景推荐

### 软件卸载与清理

需要彻底卸载软件并清理残留时，**GeekUninstaller** 是 Windows 上的首选工具，体积仅 6MB 却能深度扫描注册表和残留文件。配合 **Duplicate Cleaner** 清理重复文件，**Unlocker** 处理被占用的顽固文件，可保持系统整洁。

### 系统安全加固

希望进一步减少 Windows 攻击面的个人用户，可以使用 **Hardentools** 进行激进的安全调整（如禁用 PowerShell、cmd.exe 等）。注意不建议在企业环境使用，且不要禁用 Windows Defender 实时保护。

### 磁盘空间管理

Windows 10+ 用户可使用 **CompactGUI** 对不常用的文件夹进行无损压缩，不改变文件哈希且不影响软件运行。需要备份和同步重要文件夹时，**FreeFileSync** 是开源跨平台的选择。

### 硬件监控与超频

显卡玩家推荐 **GPU-Z** 查看详细参数，**MSI Afterburner** 进行超频和风扇曲线调整。需要全面硬件检测时，**AIDA64 Extreme** 功能最强（付费）。NVIDIA 显卡用户可以用 **NVIDIA App** 替代 GeForce Experience 管理驱动。

### 路由器与网络

想要解锁路由器更多功能的用户，**OpenWrt** 是开源固件的标准选择，支持校园网认证插件、多线多拨（mwan3）、流量监控等高级功能。

### 护眼与字体

长时间使用电脑的用户推荐 **f.lux**，根据时间自动调节色温，比系统自带的夜间模式功能更强。Windows 用户喜欢 macOS 字体渲染效果的，可使用 **MacType**。

## 参考资料

- [你最满意的 10 款 PC 软件是什么？ - 知乎](https://www.zhihu.com/question/469450888/answer/1938543161803776240) #todo
- [Windows 有哪些神级软件？ - 知乎](https://www.zhihu.com/question/465494790/answer/1964267688378492275) #todo
- [有哪些好用的开源软件？ - 知乎](https://www.zhihu.com/question/56766597/answer/3440997206) #todo
- [有什么软件官方已经停更了或者公司已经倒闭了，但是你还在用并且觉得很好用的？ - 知乎](https://www.zhihu.com/question/571445355/answer/2806467777) #todo
- [GifCam：小巧强大的 GIF 录屏工具 - 知乎](https://www.zhihu.com/question/411922752/answer/1566762726) #todo
- [GitHub 上有什么嵌入式方面的项目？ - 知乎](https://www.zhihu.com/question/27835930/answer/1170042059) #todo
- [阳光课代表 的想法: tiny-gpu – GPU 入门教程 - 知乎](https://www.zhihu.com/pin/1766984245606744065) #todo
- [Geek 猫 - 你的低成本爱好是什么？ - 知乎](https://www.zhihu.com/question/1897959255778231029/answer/1938626308251824399) #todo
- [Hank - 一个人能做出什么开源项目？ - 知乎](https://www.zhihu.com/question/47684138/answer/12808142134) #todo
- [嵌入式大杂烩 - 嵌入式状态机架构 - 知乎](https://zhuanlan.zhihu.com/p/1989260059155399873) #todo
