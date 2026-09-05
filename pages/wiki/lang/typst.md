---
title: typst-基础
description:
date: 2025-02-26
update_date:
  - 2025-03-03
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 介绍

## 通用设置

```typ
#set page(
  // ...
)
#set par(
  // ...
)
```

## 语法

```typ
#let d = (:)
#d.insert("a", 1)
#repr(d)

#let a = ("regular")
#type(a) // 字符串
#let a = ("regular", )
#type(a) // 列表
```

## 图目录和表目录

```typ
#outline(target: figure.where(kind: image))
#outline(target: figure.where(kind: table))
```

### 设置 figure 标题

```typ
// 标题斜体
#show figure.caption: emph

#figure(
  rect[Hello],
  caption: [I am emphasized!],
)

// 表格标题在上
#show figure.where(
  kind: table
): set figure.caption(position: top)
```

## 样式

主要有 set 规则和 show 规则

### show-set 规则

- [Reference Function – Typst Documentation](https://typst.app/docs/reference/model/ref/) 中的 Customization 很好的例子

### show 规则

### 中文粗体

- [中文没有加粗 | Typst 中文社区导航](https://typst-doc-cn.github.io/guide/FAQ/chinese-bold.html)

## 字体

```typ
#set text(font: "SimHei")
#set text(font: "SimSong")
#set text(font: "Times New Roman")
```

## 包发布

- [typst/packages: Packages for Typst.](https://github.com/typst/packages?tab=readme-ov-file#templates)
- [typst-thesis-template/typst.toml at main · mrtz-j/typst-thesis-template](https://github.com/mrtz-j/typst-thesis-template/blob/main/typst.toml)
- 参考这里面的 template 文件结构 [psl-thesis/template/main.typ at main · sdiebolt/psl-thesis](https://github.com/sdiebolt/psl-thesis/blob/main/template/main.typ)
- 使用typship dev 发布：[sjfhsjfh/typship: A Typst package CLI tool](https://github.com/sjfhsjfh/typship)

## 参考资料

- [universal-hit-thesis – Typst Universe](https://typst.app/universe/package/universal-hit-thesis/)

---

> FAQ

## FAQ

- [写中文文档时，如何去掉源码中换行导致的空格？ | Typst 中文社区导航](https://typst-doc-cn.github.io/guide/FAQ/chinese-remove-space.html)

### 列表数字对齐不一致

```typst
#set enum(
  numbering: it => {
    text(baseline: 0.19em, numbering("1.", it))
  },
  indent: 2em,
)

#set list(
  marker: it => {
    text([•], baseline: 0.19em)
  }
)
```

### 设置图表开头

```typst
// #set figure(supplement: [图])
#show figure.where(): set figure(supplement: [图])
#show figure.where(kind: table): set figure(supplement: [表])
#show figure.where(kind: raw): set figure(supplement: [代码])
```

### 设置段前段后

```typst
#show heading.where(level: 1): set block(below: 10em)
```

### block

```typst
#set heading(numbering: "1")

#block([= 你好], above: 2em, fill: red)
#block([== 你好lihao], above: 2em, fill: green, height: 10em, inset: 2em, outset: 2em)
```

### Block、Grid 、Stack 和 Rect 的区别

|                       | Block  | Grid   | Stack | Rect |
| --------------------- | ------ | ------ | ----- | ---- |
| 在 Typst 哪个目录下？ | Layout | Layout |       |      |
|                       |        |        |       |      |
|                       |        |        |       |      |

### 子图

- [subpar – Typst Universe](https://typst.app/universe/package/subpar)

### 图目录和表目录

- [Table of Figures : r/typst](https://www.reddit.com/r/typst/comments/18r6b2m/table_of_figures/)

### 公式

公式加 bar

```typst
#show math.equation: set text(font: "STIX Two Math", size: 12pt)
#let overU = $ limits(U)^(#line(start: (1pt,0pt),end: (8pt,0pt), stroke: 0.7pt) #h(0.6pt) \ #v(-6.3pt) ) $
#set page(width: auto, height: auto)

$
  "overline(\"very long text\")"& : overline("very long text")\
  "overline(x)"&: overline(x)\
  "overU"&:overU\
  "macron(x)"&: macron(x)\
$
```

- [typst 教程（二）数学公式编辑 | 官网 math API 一步到位 - 知乎](https://zhuanlan.zhihu.com/p/643860286)
- [LaTeX-to-typst Cheat Sheet](https://qwinsi.github.io/tex2typst-webapp/cheat-sheet.html#fonts)

### 伪代码

- [lovelace – Typst Universe](https://typst.app/universe/package/lovelace)

### ifigure 和 subpar 不兼容的问题

- 提交到 github 上了
- 目前的解决方案就是将源码复制到本地，然后修改

![20250306031200-2025-03-06](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250306031200-2025-03-06.png)

![20250306031146-2025-03-06](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250306031146-2025-03-06.png)

### 表格行列合并的问题

- 内置 table 可以实现
- 或者使用三方库

### 查看当前状态

```typst
#set text(lang: "de")
// 查看当前语言
#context text.lang
// 查看当前字体
#context text.font
// 查看当前字重
#context text.weight

// 查看当前 counter
#set heading(numbering: "1.")
= Introduction
#lorem(5)

#context counter(heading).get()

= Background
#lorem(5)

#context counter(heading).get()
```

### 设置 header

- [hydra – Typst Universe](https://typst.app/universe/package/hydra)

### include 和 import 区别

- [The Raindrop-Blue Book (Typst 中文教程)](https://typst-doc-cn.github.io/tutorial/intermediate/modulize-modules.html)

### 样式导入问题

- [Why is the template function I wrote not working properly? - Questions - Typst Forum](https://forum.typst.app/t/why-is-the-template-function-i-wrote-not-working-properly/1042)

### i-figure 与 subpar

- [如何实现子图？子图与 i-figured 编号冲突怎么办？ | Typst 中文社区导航](https://typst-doc-cn.github.io/guide/FAQ/sub-figure.html)

### 表格合并问题

---

> 阅读材料

## 官方

- [Typst](https://typst.app/)
- [Typst Universe](https://typst.app/universe)
- [typst/typst: A new markup-based typesetting system that is powerful and easy to learn.](https://github.com/typst/typst)

## 知乎回答

- [如何看待 typst? - 知乎](https://www.zhihu.com/question/591143170/answer/3304601296)
- [如何看待 typst? - 知乎](https://www.zhihu.com/question/591143170/answer/2953618467)
- [如何看待 typst? - 知乎](https://www.zhihu.com/question/591143170/answer/2949290734)
- [Typst 中文用户使用体验 - 知乎](https://zhuanlan.zhihu.com/p/669097092)
- [Typst 中文用户使用体验](https://zhuanlan.zhihu.com/p/669097092)
- [let/set/show confusion : r/typst](https://www.reddit.com/r/typst/comments/18ycvqz/letsetshow_confusion/)

## 模板

- [werifu/HUST-typst-template: 华科毕业论文（本科）的 typst 模板](https://github.com/werifu/HUST-typst-template)
- [pku-typst/pkuthss-typst: Typst template for dissertations in Peking University (PKU).](https://github.com/pku-typst/pkuthss-typst)
  该模板较新，且文件少，容易学习。
- [011 - Typst 的序号标注指南：从入门到精通 - 知乎](https://zhuanlan.zhihu.com/p/677147856)
- [awesome-typst/README_ZH.md at main · qjcg/awesome-typst](https://github.com/qjcg/awesome-typst/blob/main/README_ZH.md)

## 教程

- [The Raindrop-Blue Book (Typst中文教程)](https://typst-doc-cn.github.io/tutorial/introduction.html)
- [中文用户指南 – Typst 中文文档](https://typst-doc-cn.github.io/docs/chinese/)
- [About - Typst Examples Book](https://sitandr.github.io/typst-examples-book/book/)
- [awesome-typst/README_ZH.md at main · qjcg/awesome-typst](https://github.com/qjcg/awesome-typst/blob/main/README_ZH.md)

## 社区

- [Typst 中文社区导航](https://typst-doc-cn.github.io/guide/)
- [面向 Word 用户的快速入门向导 | Typst 中文社区导航](https://typst-doc-cn.github.io/guide/word.html)

## 第三方库

- [Touying in Typst | Touying](https://touying-typ.github.io/zh/)

## 参考资料

- [如何看待 typst](https://www.zhihu.com/question/591143170/answer/2948938842)
- [Typst 中文社区导航](https://typst-doc-cn.github.io/guide/)
