---
title: Mullvad Browser
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - app/gui
  - 浏览器
categories:
  - 应用软件
comment: true
---

> [!info]
> Mullvad Browser 是由 Mullvad VPN 与 Tor 项目联合开发的隐私浏览器，基于 Firefox ESR。

## 核心信息

- **开发商**：Mullvad + Tor Project
- **内核**：Gecko（Firefox ESR）
- **开源**：完全开源
- **平台**：Windows、macOS、Linux
- **官网**：[mullvad.net/browser](https://mullvad.net/en/browser)

## 主要特点

- **反指纹追踪**：默认启用所有 Tor 浏览器的反指纹技术，让所有用户看起来一样
- **不信任系统根证书**：默认不信任第三方根证书，防止中间人攻击
- **无遥测**：移除所有 Mozilla 遥测和崩溃报告
- **内置 uBlock Origin**：开箱即用的广告和跟踪拦截
- **隐私优先**：每个会话结束后清除 Cookie 和网站数据

## 注意

- 默认不信任企业根证书，某些企业环境可能需要手动调整 `about:config` 中的 `security.enterprise_roots.enabled`
- 主要面向高隐私需求用户，日常使用可能需要调整部分严格设置

## 适用场景

- 需要最大程度匿名和反追踪的用户
- 调查记者、活动家等高隐私需求群体
- 配合 VPN 使用的隐私最大化方案

## 同类工具

见 [[firefox]]、[[brave]]、[[tor-browser]]。
