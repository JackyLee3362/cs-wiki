---
title: Android Tools
description: Android 实用工具与应用对比
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - android
  - mobile
  - 安卓工具
categories:
  - 应用软件
comment: true
---

> Android 工具涵盖去广告、系统优化、投屏、权限管理、扫描等场景，部分需要 root 或 adb 配合。

## 工具概览

| 工具 | 类型 | 开源 | 价格 | 平台 | 核心特点 |
| :--- | :--- | :--: | :--- | :--- | :--- |
| [GKD](https://github.com/gkd-kit/gkd) | 跳广告 | ✅ | 免费 | Android | 规则订阅式跳开屏广告，李跳跳替代方案 |
| [SMSForwarder](https://github.com/pppscn/SmsForwarder) | 短信转发 | ✅ | 免费 | Android | 自动转发短信和通知到邮箱/企业微信/飞书机器人 |
| [一个木函](https://www.woobx.cn/) | 工具箱 | ❌ | 免费+增值 | Android | 内置数十种小工具，网页转应用、以图搜图等 |
| [VLC](https://www.videolan.org/vlc/) | 媒体播放 | ✅ | 免费 | 全平台 | 播放一切格式，支持网络串流与本地字幕 |
| [Sunshine](https://app.lizardbyte.dev/Sunshine/) | 串流服务端 | ✅ | 免费 | 桌面 | 配合 Moonlight 实现低延迟游戏串流与投屏 |
| [Moonlight](https://moonlight-stream.org/) | 串流客户端 | ✅ | 免费 | 全平台 | NVIDIA GameStream 替代，低延迟串流 |
| [Magisk](https://github.com/topjohnwu/Magisk) | Root 框架 | ✅ | 免费 | Android | 系统less root，模块生态强大，隐藏 root 检测 |
| [Shizuku](https://github.com/RikkaApps/Shizuku) | 权限代理 | ✅ | 免费 | Android | 无需 root 即可让应用调用系统级 API |
| [App Ops](https://github.com/RikkaApps/App-Ops-releases) | 权限管理 | ❌ | 免费+付费 | Android | 精细化应用权限管理，可关闭传感器权限 |
| [Shelter](https://gitea.angry.im/PeterCxy/Shelter) | 应用隔离 | ✅ | 免费 | Android | 工作资料隔离，双开应用，保护隐私 |
| [TVBox](https://github.com/o0HalfLife0o/TVBoxOS) | 电视盒子 | ✅ | 免费 | Android/TV | 开源电视盒子播放器，支持自定义源 |
| [布丁扫描](https://www.budingscan.com/) | 文档扫描 | ❌ | 免费 | Android/iOS | 国产免费扫描软件，效果清晰 |
| [汉王扫描王](https://www.hw99.com/) | 文档扫描 | ❌ | 免费 | Android/iOS | OCR 识别能力强，表格还原效果好 |

## 按场景推荐

### 跳开屏广告

**GKD** 是目前最活跃的开屏广告跳过工具，采用规则订阅机制，相比早期工具更灵活。配合 **一个木函** 中的相关工具，可进一步提升 Android 使用体验。

### 权限管理与隐私保护

不想 root 但需要精细控制应用权限，推荐 **Shizuku** + **App Ops** 组合，可关闭传感器权限、阻止后台行为。需要双开或隔离应用时，**Shelter** 是开源选择。

### 游戏串流与投屏

希望将电脑画面低延迟串流到手机或电视，推荐 **Sunshine**（电脑端）+ **Moonlight**（客户端）组合，延迟远低于传统投屏方案，适合游戏串流。

### Root 用户

已 root 用户首选 **Magisk** 作为 root 管理框架，支持模块扩展和隐藏 root 检测（如银行/游戏应用）。

### 文档扫描

免费扫描需求推荐 **布丁扫描** 或 **汉王扫描王**，两者均为国产免费方案，OCR 和表格识别效果优于系统自带相机。

## 参考资料

- [hmkcode/Android: Android related examples](https://github.com/hmkcode/Android) #todo
- [GoodWeather: 从零开发 Android 天气 APP - HelloGitHub](https://hellogithub.com/repository/cfec98db135b4ba58cb656be0e19339a) #todo

- [有什么软件官方已经停更了或者公司已经倒闭了，但是你还在用并且觉得很好用的？ - 知乎](https://www.zhihu.com/question/571445355/answer/3502491267) #todo
- [我国的电视厂家是怎么把自己玩死的？ - 知乎](https://www.zhihu.com/question/638050380/answer/3367766077) #todo
- [安卓（Android）是否有一些冷门但却逆天的手机应用（App）呢？ - 知乎](https://www.zhihu.com/question/55701954/answer/1963738413560739630) #todo
- [安卓（Android）是否有一些冷门但却逆天的手机应用（App）呢？ - 知乎](https://www.zhihu.com/question/55701954/answer/260507613) #todo
- [有哪些值得推荐的 Android 应用？ - 知乎](https://www.zhihu.com/question/19834652/answer/1969735796740318244) #todo
- [有哪些实用的冷知识？ - 知乎](https://www.zhihu.com/question/640923460/answer/1970648200638632514) #todo
- [手机会静默监听人的谈话吗？ - 知乎](https://www.zhihu.com/question/278139455/answer/1916438739007280000) #todo
- [为什么基本上所有电视的投屏软件都被乐播投屏垄断？ - 知乎](https://www.zhihu.com/question/509180200/answer/1957451689004079091) #todo
- [播放视频时，你肯定见过这个橙白色交通锥无数次——VLC 之父荣获欧洲自由软件奖！ - 知乎](https://zhuanlan.zhihu.com/p/1971638963606381671) #todo
