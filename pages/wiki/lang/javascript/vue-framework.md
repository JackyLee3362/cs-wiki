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

## Vue 3 设计决策

### API 重复功能的历史兼容原因

Vue 2 于 2016 年发布，生产环境中有成千上万的应用依赖其 API。Vue 3 引入新 API 时，旧 API 不能删除，因为一定有应用依赖这些旧 API。Semantic versioning 意味着除非出 Vue 4，不然不能删任何旧 API。因此 Vue 3 中会出现功能重复但设计目标不同的 API（如 Options API 与 Composition API）。

### 状态管理：Pinia vs 直接使用 reactive

Pinia 是 Vue 的官方状态管理库。虽然可以通过 `export const state = reactive({})` 在单页应用中共享全局状态，但这种方式在服务器端渲染（SSR）场景下会暴露安全漏洞。Pinia 提供了 SSR 安全的状态管理、Devtools 集成、模块热更新等生产环境必需的功能。

## 参考资料

- [Vue.js 2 官方文档](https://v2.cn.vuejs.org/v2/guide/installation.html) #todo
- [黑马程序员 JavaWeb 开发教程](https://www.bilibili.com/video/BV1m84y1w7Tb) #todo
- [你为什么选择 React 而不选择 Vue？ - 知乎](https://www.zhihu.com/question/294210442/answer/3453828000) #todo
- [尤雨溪 - 为什么 Vue 3 设计了那么多重复功能的 API？ - 知乎](https://www.zhihu.com/question/1933969813643989014/answer/1935432735381525060) #todo
- [方应杭 - 为什么我认为 Vue3 不再需要三方的 store，pinia，直接使用 reactive 对象就行？ - 知乎](https://www.zhihu.com/question/604896048/answer/3069136597) #todo
