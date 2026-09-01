---
title: awesome-browser-vim
description:
date: 2025-03-03
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 产品调研

- 25K 🌟 [philc/vimium: The hacker's browser.](https://github.com/philc/vimium)
- 04K 🌟 [gdh1995/vimium-c: A keyboard shortcut browser extension for keyboard-based navigation and tab operations with an advanced omnibar](https://github.com/gdh1995/vimium-c)
- 05K 🌟 [Surfingkeys/docs/API.md at master · brookhong/Surfingkeys](https://github.com/brookhong/Surfingkeys/blob/master/docs/API.md#mapkey)

## vimium

使用默认的

- [vimium快捷键列表 - 程序媛李李李李蕾 - 博客园](https://www.cnblogs.com/daysme/p/7821438.html)

## surfingkeys

### 配置

```js
const { map, unmap, mapkey } = api;
// 上个 tab
map("H", "E");
// unmap('E')

// 下个 tab
map("L", "R");
// unmap('R')

// 下半页
map("J", "gh");
// unmap('d')

// 上半页
map("K", "gl");
// unmap('u')

// OmniSearch
map("o", "t");
unmap("t");

// 前进 Forward 和返回 Backward
map("gl", "F");
map("gh", "B");

settings.scrollStepSize = 360;
```

### 选择可滚动的元素

使用 `;fs`，按住 `?` 就可以看到

- [Use easymotion to change scroll target · Issue #1053 · brookhong/Surfingkeys](https://github.com/brookhong/Surfingkeys/issues/1053)

## 参考资料

- [Surfingkeys 实用向推荐 - 少数派](https://sspai.com/post/63692)
- 实用配置：[Example Configurations · brookhong/Surfingkeys Wiki](https://github.com/brookhong/Surfingkeys/wiki/Example-Configurations)
