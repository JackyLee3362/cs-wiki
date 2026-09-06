---
type: basic-note
title: awesome-cmake
author: JackyLee
create_time: 2025-12-24
update_time:
tags:
description:
---

## 构建工具

- [Makefile 怎么入门？ - 知乎](https://www.zhihu.com/question/517645746/answer/2974581991)
- [gcc、clang、make、cmake、makefile、CMakeLists.txt 概念学习 - 知乎](https://zhuanlan.zhihu.com/p/64373941)
- [GCC、CMake、CMakelist、Make、Makefile、Ninja 啥关系？一图讲透！ - 知乎](https://zhuanlan.zhihu.com/p/638986464)
- [程序喵大人 - cmake 有没有好的学习教程？ - 知乎](https://www.zhihu.com/question/65511949/answer/1971345155337466934)
  - 概要: 直接上手呀，看这个开源项目： https://github.com/TheLartians/ModernCppStarter 。用这套模板能干什么？ 一次 clone，解决 90% 构建痛点： ✅ 自动配置 CMake 编译环境 ✅ 自带测试框架（GoogleTest） ✅ 自带 clang-format 自动格式化 ✅ 可选集成 clang-tidy 静态分析 ✅ 支持跨平台构建（Linux/macOS/Windows） ✅ 支持 Doxygen 自动生成文档 ✅ 支持 CPack 打包生成安装包 ✅ 支持 GitHub Actions CI/CD（自动编译 &amp; 测试） ✅ 可选接入 Conan/Vcpkg 包…
  - 点赞: 68
  
## 编译器

- [简述 LLVM 与 Clang 及其关系 – 蔓草札记](https://xuhehuan.com/2738.html)
- [自由技艺 - 详解三大编译器：gcc、llvm 和 clang - 知乎](https://zhuanlan.zhihu.com/p/357803433)
  - 概要: 编译器一般构成传统的编译器通常分为三个部分，前端（frontEnd），优化器（Optimizer）和后端（backEnd）. 在编译过程中，前端主要负责词法和语法分析，将源代码转化为抽象语法树；优化器则是在前端的基础上，对得到的中间代码进行优化，使代码更加高效；后端则是将已经优化的中间代码转化为针对各自平台的机器代码。 GCCGCC（GNU Compiler Collection，GNU 编译器套装），是一套由 GNU 开发的编程语言编译器。GCC 原名为 GNU C …
  - 点赞: 1801
- [编译船夫 - 深入研究Clang（一）Clang和LLVM的关系及整体架构 - 知乎](https://zhuanlan.zhihu.com/p/26223459)
  - 概要: Clang和LLVM的关系 Clang和LLVM到底是什么关系，这是在研究Clang的过程中所不可避免的一个问题。如果要搞清楚Clang和LLVM之间的关系，首先先要知道宏观的LLVM和微观的LLVM。 宏观的LLVM，指的是整个的LLVM的框架，它肯定包含了Clang，因为Clang是LLVM的框架的一部分，是它的一个C/C++的前端。虽然这个前端占的比重比较大，但是它依然只是个前端，LLVM框架可以有很多个前端和很多个后端，只要你想继续扩展。 微观的LLVM指的是LLVM…
  - 点赞: 78

## 参考资料
