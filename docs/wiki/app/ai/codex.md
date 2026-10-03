---
title: codex
description:
date: 2026-08-19
update_date: 2026-10-03
draft: true
author: JackyLee
tags:
  - wiki
  - app/gui
categories:
comment: true
---

## 识别 skills 的目录

1. 系统内置 skill
   - ~/.codex/skills/.system/

2. 本地 agents skill
   - ~/.agents/skills/

3. 插件缓存里的 bundled skills
   - ~/.codex/plugins/cache/openai-bundled/

4. 插件缓存里的 primary-runtime skills
   - ~/plugins/cache/openai-primary-runtime/

## 远程控制

Remote 让手机或其他设备管理主机上的 Codex 任务，文件与命令仍在主机执行。官方支持 macOS 和 Windows；可用性受功能开放范围与工作区权限影响。

1. 更新桌面与手机应用，在主机「Settings → Connections → Control this Mac or PC」选择「Set up / Add」。
2. 完成账号验证，手机扫描二维码；两端使用同一 ChatGPT 账号与工作区，每台控制设备与主机分别配对。
3. 主机保持在线、唤醒并运行桌面应用；Windows 上执行 Computer Use 还需保持会话解锁。

开启时报错先重启桌面应用再试；仍失败需按具体报错排查账号验证或工作区权限。退出登录会关闭远程控制，重新登录后需再次开启，但原配对保留。上述是官方排障方法，不代表已验证具体故障。

## 参考资料

- [Codex 官网](https://developers.openai.com/learn/codex)
- [Codex 源码](https://github.com/openai/codex)
- [远程连接官方文档](https://learn.chatgpt.com/docs/remote-connections)
