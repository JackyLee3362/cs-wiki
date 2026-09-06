---
type: basic-note
title: js.阅读材料
author: JackyLee
create_time: 2025-09-21
update_time:
tags:
description:
---

## 项目

todo-vue 项目

- [mdn/todo-vue: Sample todo app built with the Vue framework](https://github.com/mdn/todo-vue)

vue-native-admin

- [zclzone/isme-nest-serve: Vue Naive Admin 2.0 的后端服务，使用 Nestjs + TypeOrm + MySql + Redis 搭建，实现了 JWT 认证、菜单管理、RBAC 权限控等制核心功能](https://github.com/zclzone/isme-nest-serve)

dragula

- [徐小夕 的想法: 安利一款 22.1k 的可视化拖拽排序项目 | dragula 是一个强大且兼容性极好的拖拽排序库 - 知乎](https://www.zhihu.com/pin/1861008899668336640)
- [GitHub - bevacqua/dragula: :ok_hand: Drag and drop so simple it hurts](https://github.com/bevacqua/dragula)

## 参考资料


- [圆胖肿 - Node.js 熄火了吗？ - 知乎](https://www.zhihu.com/question/622524997/answer/3475317006)

  - 概要: 最早 Google 做 v8 的那个人，叫做 lars bak，这个人同时也是 java hotspot 的作者 然后到了 Google 之后，就做出了 v8，为什么做 v8 呢？因为他们那个组，就是做 web 技术优化的 最重要的一个成果就是 v8，其中用的大量优化技术跟 java 的 hotspot 重叠，所以 Google 和 oracle 在这件事上又闹上了一次公堂 此为题外，回到他的工作，他们那个组就是做 web 技术优化的 但是做着做着，做到了瓶颈，也就是实在是优化不下去了 怎么办呢？ 于是他们决定，去他…
  - 点赞: 650

- [方应杭 - 为什么 javascript 的语法那么烂 - 知乎](https://www.zhihu.com/question/30664585/answer/3479832347)

  - 概要: 只要你忽略 JS 曾经是热门考点但现在被唾弃的喜欢自我提升的 var 只要处在 class 之外就无人能猜到其值的 this 很少有人能理解的 ==有效数字超过 17 位就会丢数据的 number（还好有 bigint）各种智障的隐式转换过时的 require（还好有 ESM）看起来是数组实际上是对象而且还存在稀疏数组的 Array（还好有 lodash）抄袭自 Java 非常难用的 Date（还好有 dayjs）功能很不全但每年都在更新的 Object 和 RegExp 默认并不完美支持 unicode …
  - 点赞: 214

- [尤雨溪 - 为什么 Vue 3 设计了那么多重复功能的 API？ - 知乎](https://www.zhihu.com/question/1933969813643989014/answer/1935432735381525060)

  - 概要: 简单来说就是历史兼容，Vue 2 是 2016 年发布的，到今天九年，只有一次 breaking change 的机会。生产环境里成千上万的 app 在跑，所以 3.x 即使一个新 API 是为了彻底代替旧 API 而存在，旧 API 也不能删，因为一定有谁的 app 依赖了这些旧 API。 Semantic versioning 意味着除非出 Vue 4，不然不能删任何旧 API。要是出 Vue 4，肯定会出来一批骂娘的，说又更新，学不动了，旧 API 好好的非要给他们增加工作量；要是 minor 里面…
  - 点赞: 1703

- [方应杭 - 为什么我认为 Vue3 不再需要三方的 store，pinia，直接使用 reactive 对象就行？ - 知乎](https://www.zhihu.com/question/604896048/answer/3069136597)
  - 概要: Pinia 文档原文摘抄： 为什么你应该使用 Pinia？ Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能…但是很遗憾的是，英文文…
  - 点赞: 260
- [Learn to code with Scrimba](https://scrimba.com/learn-vuex-c01s/~05)

- [Rick - 后端可以直接从 cookie 里取到 token，为什么前端还要 token 设置到 Authorization？ - 知乎](https://www.zhihu.com/question/558219586/answer/116867134686)

  - 概要: 为了防止 CSRF 攻击。 HTTP 默认携带 Cookie，而 Authorization 头则不是，需要前端添加。 当出现恶意脚本伪造请求的时候，如果是在 Cookie 里面，直接获得用户授权 而如果在 Authorization 头里，首先它得拿得到用户 Token，那基本上不可能，因为跨域没法拿到存在 localStorage 里面的 token。
  - 点赞: 198

- [无人知晓的顶端 - 你见过最烂代码是什么 - 知乎](https://www.zhihu.com/question/306452885/answer/2584585081)

  - 概要: 之前查出来有个 bug，和下面这个代码类似，查出来的时候小伙伴都惊呆了 &#39;ο&#39;==&#39;o&#39; // 这是 false
  - 点赞: 218

- [LeaferJS 发布：开源、性能强悍的 2D 图形库 - 知乎](https://zhuanlan.zhihu.com/p/640465168)