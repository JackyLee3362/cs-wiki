---
title: copyparty
description:
date: 2026-09-01
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 顶部状态栏

1. **两条横线**：切换左侧树形导航面板 / 面包屑路径导航
2. **🧯灭火器 unpost**：撤销 / 删除刚刚误上传的文件，撤回上传
3. **🚀火箭 uploader‑big**：打开高级上传面板（就是上一张截图的并行上传设置界面）
4. **🎈气球 uploader‑tiny**：极简轻量上传弹窗
   > 🚀和🎈是两种上传界面，火箭 = 完整上传控制面板，气球 = 简易上传窗口
5. **📂黄色文件夹 mkdir**：在当前目录新建文件夹
6. **📝纸笔 new‑md**：直接在网页新建 Markdown 文档
7. **📟示波器（绿色点阵屏）**：实时传输速度 / 网络监控面板，查看上传下载速率、连接状态
8. **📯喇叭 notify**：开启 / 关闭网页通知（上传完成、收到文件提醒）
9. **⚙️齿轮 settings**：打开 Copyparty 网页端全部设置选项

## ### ✅软件：copyparty（自托管文件上传服务 up2k 上传界面）

`parallel uploads` = **并行上传块数量**（当前 1，加减号修改并发数）
4 个按钮含义：

1. 🏃跑步小人：**Continue analysis（继续分析）**
   > 上传一个文件的同时，后台继续扫描 / 解析其余待上传文件，不会卡住等待当前上传完成。黄色 = 开启，深色 = 关闭
2. 🥔土豆：**Potato Mode（土豆模式）**
   > 简化上传 UI，降低 CPU 占用，适合手机 / 低性能设备上传，关掉花哨动画与预览。黄色 = 开启
3. 🎲骰子：随机模式（Randomize order，打乱上传顺序）
   > 打乱文件上传队列顺序；深色代表关闭
4. 🛡️蓝色盾牌：**Overwrite mode 覆盖策略**
   > Never overwrite：绝不直接覆盖已有文件，重命名新文件避免丢失。黄色 = 开启
