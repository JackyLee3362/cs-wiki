---
title: regex
description: 正则表达式
date: 2024-10-08
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 贪婪匹配

```js
/(.*?)/;
```

## 先行断言 (lookahead)

- `(?=pattern)` 零宽正向先行断言(zero-width positive lookahead assertion)
- `(?!pattern)` 零宽负向先行断言(zero-width negative lookahead assertion)

## 后行断言 (lookbehind)

- `(?<=pattern)` 零宽正向后行断言(zero-width positive lookbehind assertion)
- `(?<!pattern)` 零宽负向后行断言(zero-width negative lookbehind assertion)

## 参考文献

- [正则表达式的先行断言(lookahead)和后行断言(lookbehind) | 菜鸟教程](https://www.runoob.com/w3cnote/reg-lookahead-lookbehind.html)
- [你是如何学会正则表达式的？ - 知乎](https://www.zhihu.com/question/48219401/answer/742444326)
- [你是如何学会正则表达式的？ - 知乎](https://www.zhihu.com/question/48219401/answer/785452193)
- [markdown 转 html 用十几行正则就可以为什么要搞那么复杂？ - 知乎](https://www.zhihu.com/question/443343954/answer/3376236160)

## 应用

- [regdict](https://app.nestattacked.com/regdict/): 一个根据正则查单词的网站
