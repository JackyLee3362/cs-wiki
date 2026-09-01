---
title: latex
description:
date: 2022-03-13
update_date:
  - 2025-02-26
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

# latex 命令行编译

[文章](https://www.jianshu.com/p/21e236c82654)

## 查看版本

```shell
tex -v
latex -v
xelatex -v
```

## 编译

```shell
# 用latex编译
latex demo.tex # 生成 demo.dvi
dvipdfmx demo.dvi # 转换成 pdf

# 用xelatex编译
xelatex demo.tex

# 用pdflatex编译
pdflatex demo.tex

# 删除中间文件
del *.aux *.dvi *.log
```

## 宏包管理

```shell
tlmgr info ctex # 查看ctex
## 包都在D:\Program Files\texlive\2021\texmf-dist\tex\latex路径下
```

## 查看宏包

```shell
texdoc ctex

texdoc lshort    # 英文版
texdoc lshort-zh # 中文版
```

## latex 引用美化

美化 1:使用 `\small`让「参考文献」章节字号变小

[^Latex \bibliographystyle+修改字体字号的大小\_printbibliography 参考文献 字体大小-CSDN 博客]: [Latex \bibliographystyle+修改字体字号的大小\_printbibliography 参考文献 字体大小-CSDN 博客](https://blog.csdn.net/Anne033/article/details/117086343)

美化 2: 使用该命令，将引用字号变小，且位于右上角，之后的 ref 都用这个 `upcite`，

```latex
\newcommand{\upcite}[1]{\textsuperscript{\textsuperscript{\cite{#1}}}}
```

- [有没有 LaTeX“编程”规范？ - 知乎](https://www.zhihu.com/question/8239276228/answer/103448004359)

---

> 数学公示

## 运算符 Arithmetic

$$
1+2-3 \times 4 \div 5 \pm 6 \mid 7 \sim 8
$$

$$
\int y\mathrm{d}t
$$

## 级数运算

$$
\sum_1^n\frac{1}{x^2},\prod_{i=0}^n{1 \over {x^2}}
$$

## 根号

$$
\sqrt[3]{9},\sqrt{16}
$$

## 等号

$$
\leq \geq \neq \approx \equiv
$$

## 符号帽 Hat

$$
\hat x, \overline x, \dot x, \vec a
$$

## 字体 Font

$$
\pmb{abc} \ {\rm def} \ \mathrm{ghi}\ \mathbf{jkl}\ \boldsymbol{mno}\\
$$

## 集合

$$
x \in \{3,4,5\},\emptyset \in \notin \subset \supset \subseteq \supseteq \cup \cap
$$

## 标签 Tag

$$
e^{\pi i}+1=0\tag{Euler's formula}
$$

## 分数 Fraction

$$
\frac{1}{2x+1}={1\over{2x+1}}
$$

## 括号 Brackets

$$
\left(\frac {1}{2}\right)^2 x\in \{3,4\}\ x\in \left\{\frac{1}{2},4,5\right\}
$$

## 空格 Blank

$$
a\quad b; a\qquad b;
$$

$$
a\ b; a\;b;a\,b;a\!b
$$

## 三角函数 Trigonometric Function

$$
\sin30^\circ \cos \tan \cot \sec \csc \bot \angle
$$

## 微积分 Differential & Integral

$$
\partial x
$$

$$
\lim_{n\rightarrow+\infty}\frac{1}{n(n+1)}
$$

$$
\left. \frac{du}{dx} \right| _ {x=0}
$$

$$
\int_0^{x+1}t^2
$$

$$
\int \iint \iiint \oint \oiint \oiiint \nabla
$$

## 对数函数 logarithm

$$
\log \lg \ln
$$

## 矩阵 Matrix

$$
\begin{smallmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{smallmatrix}
\begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
  \end{bmatrix}

\begin{Bmatrix}
    1  &  0  & 0 \\
   -5  &  2  & 3 \\
    3  &  3  & 5
\end{Bmatrix}

\left|
\begin{array}{ccc}
    1  &  \cdots  & 0 \\
   \vdots  &  \ddots  & 3 \\
    3  &  3  & 5
\end{array}
\right|
\left[
\begin{array}{cc|c}
    1  &  3  & 0 \\
   -5  &  2  & 3 \\
    3  &  3  & 5
\end{array}
\right]
\
f(x)=\begin{cases}
\frac 1{b-a} & a<x<b \\
0 & \rm others
\end{cases}
$$

## 箭头 Arrow

$$
\uparrow \downarrow \leftarrow \rightarrow \Uparrow \Downarrow \Leftarrow \Rightarrow \longleftarrow \longrightarrow \Longleftarrow \Longrightarrow\Leftrightarrow\Longleftrightarrow
$$

## 逻辑符号 Logic Symbols

$$
\# \$ \%\&\_
$$

$$
\because \therefore \forall \exists
$$

## 大符号 Big Symbols

$$
\bigodot \bigotimes \coprod
$$

$$
\bigcap \bigcup \bigvee \bigwedge \biguplus \bigsqcup
$$

## 其他符号

$$
\hbar \ast \C \hbar
$$

$$
\overline{a+b+c+d}\underline{a+b+c+d}\overbrace{a+\underbrace{b+c}_{1.0}+d}^{2.0}\hat{y} \check{y} \breve{y}
$$

$$
\lfloor x \rfloor \\
\lceil y \rceil
$$

---

> 阅读材料

## 介绍

[Latex写算法的伪代码排版\_latex 算法 or and-CSDN博客](https://blog.csdn.net/lwb102063/article/details/53046265)
[用LaTeX优雅地书写伪代码——Algorithm2e简明指南](https://www.zhihu.com/tardis/zm/art/166418214?source_id=1003)
[科研神器Latex：algorithm2e算法常用技巧小结-CSDN博客](https://blog.csdn.net/qq_43486745/article/details/124344365)
[Algorithm2e writing simple pseudocode with multiple functions - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/280008/algorithm2e-writing-simple-pseudocode-with-multiple-functions)
[3.4: Calculating Power- Banzhaf Power Index - Mathematics LibreTexts](<https://math.libretexts.org/Bookshelves/Applied_Mathematics/Math_in_Society_(Lippman)/03%3A_Weighted_Voting/3.04%3A_Calculating_Power-__Banzhaf_Power_Index>)
[在线LaTeX公式编辑器-编辑器](https://www.latexlive.com/)
[lshort-zh-cn/src/chap at master · CTeX-org/lshort-zh-cn](https://github.com/CTeX-org/lshort-zh-cn/tree/master/src/chap)
[从零开始用beamer做学术报告幻灯片 | 墘青](https://alexander-qi.github.io/2019/teachbeamer/)
[如何使用beamer制作学术会议、学术演讲的幻灯片slides?附模板。 - 知乎](https://zhuanlan.zhihu.com/p/266399513)
[LaTeX Beamer introduction / Quick-start guide - LaTeX Beamer](https://latex-beamer.com/quick-start/)
[LaTex的使用（一）：图片的插入及排版方法\_latex图片排版-CSDN博客](https://blog.csdn.net/qq_31347869/article/details/103832190)
[LaTeX技巧884：如何用caption宏包格式化图表标题和子标题 - LaTeX工作室](https://www.latexstudio.net/archives/8652.html)
[Automata Drawing Library - PGF/TikZ Manual](https://tikz.dev/library-automata)
[05LaTeX学习系列之---TeX的命令行操作 - 简书](https://www.jianshu.com/p/21e236c82654)
[LaTeX安装 & 宏包升级 - 知乎](https://zhuanlan.zhihu.com/p/210303123)
[VSCode Latex Workshop 设置 XeLatex 编译\_vscode xelatex-CSDN博客](https://blog.csdn.net/Haulyn5/article/details/124128533)
[google/latexify_py: A library to generate LaTeX expression from Python code.](https://github.com/google/latexify_py)

## 设置字体

- [LaTeX 中文字体配置基础指南 - 知乎](https://zhuanlan.zhihu.com/p/538459335)

## 项目

- [c834606877/ECNU-Paper-Template: 华东师范大学(ECNU) 硕士 研究生 毕业论文 LaTeX模板](https://github.com/c834606877/ECNU-Paper-Template?tab=readme-ov-file)
- [vscode中，Latex 如何利用 Todo Tree 添加标记\_latex todo-CSDN博客](https://blog.csdn.net/m0_37586991/article/details/104239568)

## 参考资料

- [怎么提高latex编译速度？ - 知乎](https://www.zhihu.com/question/638341670/answer/3423695096)
- [LaTeX制作Beamer(一) - 知乎](https://zhuanlan.zhihu.com/p/36868831)
- [LaTeX中如何画出这种图？ - 知乎](https://www.zhihu.com/question/559510767/answer/2719118789)
- [LaTeX 代码有没有统一的规范？ - 知乎](https://www.zhihu.com/question/23172542/answer/102482424510)
- [vscode配置LateX环境为何如此麻烦，而typora如此轻便？ - 知乎](https://www.zhihu.com/question/5122624113/answer/54234788185)
- [LaTeX 代码有没有统一的规范？ - 甚远 的回答 - 知乎](https://www.zhihu.com/question/23172542/answer/102482424510)
- [latex+vscode写论文过程中的坑（IEEE）\_vscode ieee latex-CSDN博客](https://blog.csdn.net/z5z5z5z56/article/details/128183772)

---

## 项目

- [Wilson-ZHANG/ECNU_CS_SEI_Latex_Thesis_Template: LaTeX Template for Doctor (Master) Thesis of ECNU](https://github.com/Wilson-ZHANG/ECNU_CS_SEI_Latex_Thesis_Template)
