---
title: tampermonkey
date: 2024-10-19
draft: true
author: JackyLee
tags:
  - app/gui
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## Intro 介绍

### 第一个简单的版本

缺点是有可能会不小心改变内容

```js
// ==UserScript==
// @name         CSDN免登录复制
// @version      2024-10-19
// @description  try to take over the world!
// @author       JackyLee
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://g.csdnimg.cn/static/logo/favicon32.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let codes = document.querySelectorAll("code");
    //遍历循环代码块
    codes.forEach(c=>{
        //代码块可编辑
        c.contentEditable = "true";
    });
    #content_views > pre:nth-child(7)
})();
```

### 知乎屏蔽词脚本

- [在知乎上泡这么久，工作、生活、工资还是没有起色是什么原因？ - 知乎](https://www.zhihu.com/question/1920892831981106398/answer/1930304825150669292)
- [三无用户 - 在知乎上泡这么久，工作、生活、工资还是没有起色是什么原因？ - 知乎](https://www.zhihu.com/question/1920892831981106398/answer/1928760410783343183)

## 参考资料

- [手写油猴脚本，几分钟学会新技能\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1yT411L7n7/?spm_id_from=333.337.search-card.all.click&vd_source=ffe13c57aa3e9ee91266df09d77a3e35)
- [CSDN 免登录复制 - 源代码](https://greasyfork.org/zh-CN/scripts/411919-csdn%E5%85%8D%E7%99%BB%E5%BD%95%E5%A4%8D%E5%88%B6/code#google_vignette)
- [有哪些超神的油猴脚本？ - 知乎](https://www.zhihu.com/question/22210090/answer/1147889178)
- [有哪些超神的油猴脚本？ - 知乎](https://www.zhihu.com/question/22210090/answer/25508124551)
