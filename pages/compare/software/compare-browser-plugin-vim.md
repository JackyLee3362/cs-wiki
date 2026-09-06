---
title: Browser Vim Plugin Comparison
date: 2025-03-03
draft: false
author: JackyLee
tags:
  - 浏览器
  - 插件
  - Vim
  - 选型
categories:
  - 应用软件
comment: true
---

## 产品概览

| 插件 | Stars | 特点 | 推荐度 |
|:---|:---:|:---|:---:|
| [Vimium](https://github.com/philc/vimium) | 25K | 最经典的 Vim 浏览器插件，功能稳定 | ⭐⭐⭐⭐ |
| [Vimium C](https://github.com/gdh1995/vimium-c) | 4K | Vimium 增强版，支持搜索框、快捷键自定义、更多命令 | ⭐⭐⭐⭐⭐ |
| [Surfingkeys](https://github.com/brookhong/Surfingkeys) | 5K | 功能最丰富，可自定义配置，但学习曲线较陡 | ⭐⭐⭐⭐ |

## 详细对比

| 特性 | Vimium | Vimium C | Surfingkeys |
|:---|:---|:---|:---|
| 安装即用 | ✅ 默认配置完善 | ✅ 默认配置完善 | ⚠️ 建议自定义配置 |
| 快捷键自定义 | 有限 | 较丰富 | 极丰富 |
| 搜索/OmniBar | 基础 | 增强型，支持多引擎 | 增强型 |
| 配置复杂度 | 低 | 低 | 高 |
| 稳定性 | 高 | 高 | 中 |
| 更新维护 | 较慢 | 活跃 | 活跃 |

## 推荐

- **新手**：选择 **Vimium C**，默认配置已足够强大，无需额外配置
- **Vim 老手**：选择 **Surfingkeys**，配置灵活度最高，可实现几乎任何键盘操作
- **追求稳定**：选择原版 **Vimium**，历经多年验证，极少出现兼容问题

## Surfingkeys 配置示例

```js
const { map, unmap, mapkey } = api;

// Tab 切换
map("H", "E");  // 上一个标签页
map("L", "R");  // 下一个标签页

// 页面滚动
map("J", "d");  // 向下半页
map("K", "u");  // 向上半页

// 前进/后退
map("gl", "F"); // 前进
map("gh", "B"); // 后退

// OmniSearch
map("o", "t");
unmap("t");

settings.scrollStepSize = 360;
```

## 参考资料

- [Surfingkeys 实用向推荐 - 少数派](https://sspai.com/post/63692)
- [Example Configurations · Surfingkeys Wiki](https://github.com/brookhong/Surfingkeys/wiki/Example-Configurations)
- [Vimium 快捷键列表](https://www.cnblogs.com/daysme/p/7821438.html)
