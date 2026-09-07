---
title: Vue.js
description: Vue.js 前端框架核心概念
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - javascript
  - vue
  - 前端
categories:
  - 编程语言
comment: true
---

> Vue.js 是一款渐进式 JavaScript 框架，用于构建用户界面，以数据驱动和组件化的思想设计。

## 常用指令

| 指令 | 作用 |
|------|------|
| `v-bind` | 绑定 HTML 属性 |
| `v-model` | 双向数据绑定 |
| `v-on` / `@` | 事件绑定 |
| `v-if` / `v-else-if` / `v-else` | 条件渲染（ DOM 级）|
| `v-show` | 条件显示（ CSS display 级）|
| `v-for` | 列表渲染 |

## 生命周期

Vue 2 生命周期钩子：

```
beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeDestroy → destroyed
```

## npm 与 Vue CLI

```sh
# 配置淘宝镜像
npm config set registry https://registry.npm.taobao.org

# 安装脚手架
npm install -g @vue/cli

# 创建项目
vue create vue-project01

# 图形化界面
vue ui

# 构建（输出到 dist 目录）
npm run build
```

## 参考资料

- [Vue.js 2 官方文档](https://v2.cn.vuejs.org/v2/guide/installation.html) #todo
- [黑马程序员 JavaWeb 开发教程](https://www.bilibili.com/video/BV1m84y1w7Tb) #todo
- [你为什么选择 React 而不选择 Vue？ - 知乎](https://www.zhihu.com/question/294210442/answer/3453828000) #todo
