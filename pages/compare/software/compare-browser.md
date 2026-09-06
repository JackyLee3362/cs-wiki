---
title: Browser Comparison
date: 2025-03-02
draft: false
author: JackyLee
tags:
  - 浏览器
  - 选型
categories:
  - 应用软件
comment: true
---

## 浏览器概览

### PC 端

| 浏览器              | 内核                | 开源 | 平台         | 核心特点                                  |  隐私评分  |
| :------------------ | :------------------ | :--: | :----------- | :---------------------------------------- | :--------: |
| [[chrome]]          | Blink (Chromium)    | 部分 | 全平台       | 生态最丰富，开发者工具最强，性能领先      |    ⭐⭐    |
| [[edge]]            | Blink (Chromium)    | 部分 | 全平台       | Windows 集成最深，IE 兼容模式，垂直标签页 |   ⭐⭐⭐   |
| [[firefox]]         | Gecko (Quantum)     |  ✅  | 全平台       | 唯一独立内核，隐私优先，容器标签页        |  ⭐⭐⭐⭐  |
| [[brave]]           | Blink (Chromium)    |  ✅  | 全平台       | 内置广告拦截，Tor 模式，无遥测            | ⭐⭐⭐⭐⭐ |
| [[safari]]          | WebKit              | 部分 | Apple        | Apple 平台续航最佳，系统集成最深          |  ⭐⭐⭐⭐  |
| [[vivaldi]]         | Blink (Chromium)    | 部分 | 桌面+Android | 极致自定义，内置邮件/RSS/笔记             |  ⭐⭐⭐⭐  |
| [[mullvad-browser]] | Gecko (Firefox ESR) |  ✅  | 桌面         | 反指纹追踪，Tor 技术，无遥测              | ⭐⭐⭐⭐⭐ |
| Zen Browser         | Gecko (Firefox)     |  ✅  | 桌面         | 侧边栏标签页，极简设计                    |  ⭐⭐⭐⭐  |
| Thorium             | Blink (Chromium)    |  ✅  | 桌面         | 去谷歌化编译版，极致速度                  |   ⭐⭐⭐   |

### 移动端

| 浏览器    | 内核           | 平台        | 核心特点                               | 体积     |
| :-------- | :------------- | :---------- | :------------------------------------- | :------- |
| [[alook]] | WebKit/Blink   | iOS/Android | 三无设计（无新闻/推送/广告），视频倍速 | 中等     |
| [[via]]   | System WebView | Android     | 不足 1MB，高度可定制，脚本支持         | 极小     |
| Safari    | WebKit         | iOS/iPadOS  | 系统默认，续航最佳，与生态无缝集成     | 系统内置 |
| Chrome    | Blink          | 全平台      | 同步最完善，扩展丰富                   | 较大     |
| Firefox   | Gecko          | 全平台      | 支持扩展，隐私保护                     | 中等     |

## 按场景推荐

### 前端开发与调试

推荐 **Chrome** 或 **Edge**。两者开发者工具最完善，Chrome 生态最广，Edge 在 Windows 上更省资源且具备 IE 兼容模式。

### 隐私与去谷歌化

推荐 **Firefox**、**Brave** 或 **Mullvad Browser**。Firefox 是唯一独立内核的主流选择；Brave 开箱即用隐私保护最强；Mullvad Browser 面向极致匿名需求。

### Windows 开箱即用

推荐 **Edge**。与 Windows 深度集成，垂直标签页原生支持，IE 兼容模式对企业用户不可或缺。

### Apple 生态用户

推荐 **Safari**。在 Mac 和 iOS 上续航最佳，与 iCloud、Handoff、钥匙串无缝协作。

### 高级用户与重度定制

推荐 **Vivaldi** 或 **Firefox**。Vivaldi 可自定义几乎所有界面元素，内置邮件/RSS/笔记；Firefox 的 about:config 提供数百项高级配置。

### 老旧设备 / 追求极简

移动端推荐 **Via**（Android，不足 1MB）或 **Alook**（iOS/Android，三无设计）。桌面端推荐 **Zen Browser** 或轻量化的 Firefox 分支。

### 企业环境

推荐 **Edge**（IE 兼容模式）或 **Chrome**（企业策略管理完善）。需要隔离和安全的场景可考虑 **Mullvad Browser**。

## 插件与扩展

浏览器扩展可极大增强功能，详见 [[compare-browser-plugin]]。

## 开源浏览器项目

- [Ladybird](https://github.com/LadybirdBrowser/ladybird)：从零开发的独立浏览器引擎
- [Servo](https://servo.org/)：Mozilla 开发的 Rust 编写引擎
- [miniblink](https://zhuanlan.zhihu.com/p/22611497)：最小化的 Chromium 内核封装

## 参考资料

- [有没有谁能推荐几个 PC 浏览器？](https://www.zhihu.com/question/3249703153/answer/70155192096) #todo
- [Mullvad 浏览器介绍](https://www.zhihu.com/question/56766597/answer/3440997206) #todo
- [有哪些值得推荐的轻量级 WebKit 浏览器？](https://www.zhihu.com/question/22540456/answer/471128974) #todo
- [搜索引擎实用语法](https://zhuanlan.zhihu.com/p/349614983) #todo
- [为什么有人爱 Firefox 胜过 Chrome？](https://www.zhihu.com/question/325600788/answer/3238497330) #todo
- [自主研发一款浏览器内核的难度到底有多大？](https://www.zhihu.com/question/290564335/answer/472165753) #todo
- [Microsoft Edge 中的键盘快捷方式](https://support.microsoft.com/zh-cn/microsoft-edge/microsoft-edge-%E4%B8%AD%E7%9A%84%E9%94%AE%E7%9B%98%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F-50d3edab-30d9-c7e4-21ce-37fe2713cfad) #todo
- [vimium-c README](https://github.com/gdh1995/vimium-c/blob/master/README-zh.md) #todo
- [浏览器内核真的很复杂吗？](https://www.zhihu.com/question/290767285/answer/2720277101) #todo
- [如何看待 QQ 扫描读取所有浏览器的历史记录？](https://www.zhihu.com/question/439768601/answer/1682468108) #todo
- [大家都喜欢用什么浏览器？](https://www.zhihu.com/question/640562303/answer/1898403081688954761) #todo
- [14.3k star 的视觉驱动浏览器自动化框架](https://www.zhihu.com/pin/1952455195943482223) #todo
- [能不能推荐个简洁的电脑浏览器？](https://www.zhihu.com/question/1955743397655577283/answer/1959284656001229256) #todo
- [Edge 浏览器的评价是否在逐渐下降？](https://www.zhihu.com/question/637540819/answer/130585545409) #todo
- [再见 Chrome！内置 13000+ 指令，极简浏览器开源了](https://zhuanlan.zhihu.com/p/1983482525633504308) #todo
