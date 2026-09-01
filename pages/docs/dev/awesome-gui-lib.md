---
title: awesome-gui-lib
description:
date: 2025-11-01
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## Flutter

- [Flutter 为什么没有一款好用的 UI 框架？ - 知乎](https://www.zhihu.com/question/655754543/answer/3503034923)
- [flutter 是否可以只写一次代码，同时编译到 win 桌面，linux 桌面，Android，IOS？ - 知乎](https://www.zhihu.com/question/585022914/answer/3333708618)
- [flutter 是否可以只写一次代码，同时编译到 win 桌面，linux 桌面，Android，IOS？ - 知乎](https://www.zhihu.com/question/585022914/answer/2990968544)

## Rust-GUI slint + gpui

- [你觉得这些 Rust GUI 库哪个更有前途？ - 知乎](https://www.zhihu.com/question/1955562978989568411/answer/1968979747489943979?share_code=xwJvGm06eLl8&utm_psn=1969327184645722961)

## 参考资料

- [Avalonia UI – Open-Source .NET XAML Framework | WPF & MAUI Alternative](https://avaloniaui.net/)

- [Kason - 有没有 GUI 框架开发难度小，资源消耗又不多，而且又跨平台？ - 知乎](https://www.zhihu.com/question/622397540/answer/1897712389056614631)
  - 概要: 作为一名 Web 开发者，多年来一直挺想用 Web 技术去开发桌面软件的，尝试过 eletron 和 tauri，配合 Vue/React 这些框架，只能说，确实香。但是，这种基于 WebView 的方案，内存消耗确实不低，包体积又大（使用系统 webview 可以减少体积，但是可能会存在一些兼容性问题）。 受到 ReactNative/Flutter 这些框架的启发，于是产生了自己打造一款支持 js/css 的 GUI 框架。（为什么不直接使用 RN/Flutter 呢，主要是不太喜欢 RN 这种架构，感觉兼容性问题会…
  - 点赞: 102

- [小康 2022 - tkinter 可以做出多复杂的界面？ - 知乎](https://www.zhihu.com/question/30665278/answer/107033034798)
  - 概要: 无意间看到这个问题，那我就顺便宣传一下我手搓的基于 tkinter 二次开发的微型 UI 框架吧（现名 maliang，原名 tkintertools），纯 Python + 标准库开发的，可以在无任何第三方依赖包的情况下使用（当然，加了一些第三方包会有更好的效果）：注：控件纯手搓， Canvas 绘制，无任何资源文件（如图片），无任何必需的第三方依赖包（打包超级小，10~11MB 左右），Python 纯度 100%，tkinter 纯度 100%，跨平台（Windows，macOS，Lin…
  - 点赞: 533

- [cat billy - Python 有哪些实用的界面设计库？ - 知乎](https://www.zhihu.com/question/12691658443/answer/120078981105)
  - 概要: 试试 DearPyGui 吧，按照它自己的介绍，是“一个现代、快速且强大的 Python GUI 框架”。 安装十分方便，一个 pip 命令即可，按照官网的 “Example Window” 例子，也十分简单易懂 import dearpygui.dearpygui as dpg def save_callback(): print(&#34;Save Clicked&#34;) dpg.create_context() dpg.create_viewport() dpg.setup_dearpygui() with dpg.window(label=&#34;Example Window&#34;): dpg.add_text(&#34;Hello world&#34;) dpg.add_button(labe…
  - 点赞: 30

- [什么语言最适合做 GUI？ - 知乎](https://www.zhihu.com/question/276815517/answer/2357232999)

PyQt-Fluent-Widgets 工具

- [zhiyiYo/PyQt-Fluent-Widgets: A fluent design widgets library based on C++ Qt/PyQt/PySide. Make Qt Great Again.](https://github.com/zhiyiYo/PyQt-Fluent-Widgets)

- [eros wade - 2024 做 gui 推荐什么语言？ - 知乎](https://www.zhihu.com/question/656610441/answer/3523124948)
  - 概要: 不好意思, 2024 年,我只推荐 IMGUI. QT 不想再装了..太大. 只是做测试程序, IMGUI 是真的直接粗暴.
  - 点赞: 28

- [知乎用户 Hfcr4Y - 有没有 GUI 框架开发难度小，资源消耗又不多，而且又跨平台？ - 知乎](https://www.zhihu.com/question/622397540/answer/1918312689312178519)
  - 概要: 作为一个非专业程序员与 C++爱好者，我主要用 C++写点小工具，在尝试过多种 GUI 框架后，我推荐 WebUI 。对于使用 C++进行工具类、小应用开发来说，我个人认为这是目前最值得尝试的解决方案。1. 为什么推荐 WebUI？轻量： 简单项目打包后仅 200-300KB 开发效率高：页面部分使用前端技术，开发效率显著高于 Qt 等传统框架跨平台：原生支持 Windows/Linux/macOS，编译配置简单语言友好： 核心是 C/C++，除 C/C++外，官方也提供其他语言如 Pyt…
  - 点赞: 45

- [杜自牧 - 不限制语言，客户端GUI开发用什么好？ - 知乎](https://www.zhihu.com/question/7262377916/answer/1896130538290529642)
  - 概要: 大体上你们能想到的，google microsoft都想到了。 1）flutter /flet /avolonia flutter是google提出的跨平台方案，这里的跨平台是web win linux ios android wasm。是野心最大的一个。不过目前只能用dart语言。 flutter /flet /avolonia这三个是一个东西，底层都是flutter的绘图引擎。 avalonia底层是skia绘图引擎跟老版本flutter底层一样的，无非是能用c#语言而已。 flutter已经更新绘图引擎成impeller了。 不同的是flet是适配…
  - 点赞: 92

## 废弃
