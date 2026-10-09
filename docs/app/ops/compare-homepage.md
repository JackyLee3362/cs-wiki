---
title: 自部署服务首页对比
description: 按服务入口、资讯聚合和配置方式选择自部署服务首页
date: 2026-08-27
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
categories:
cover:
comment: true
---

这些工具都能做浏览器首页，但侧重点不同：

- 管理自托管服务选 Homepage；
- 阅读 RSS 和资讯选 Glance；
- 偏好可视化编辑选 Homarr 或 Dashy；
- 只要简洁入口选 Homer 或 Flame

| 工具                                            | 主要用途                                            | 配置方式              | 更适合                                 |
| ----------------------------------------------- | --------------------------------------------------- | --------------------- | -------------------------------------- |
| [Homepage](docs/app/ops/homepage.md)           | 服务链接、状态及服务 API 小组件                     | 多个 YAML 文件        | 自托管服务集中入口，愿意用文件维护配置 |
| [Glance](https://github.com/glanceapp/glance)   | RSS、社区内容、视频、天气等信息流，也可展示容器状态 | YAML 文件             | 每天浏览多个信息源的个人首页           |
| [Dashy](docs/app/ops/dashy.md)                 | 服务入口、状态、主题与多页面                        | YAML 或页面内编辑器   | 希望同时有丰富自定义和可视化编辑       |
| [Homarr](https://github.com/homarr-labs/homarr) | 服务入口与应用集成                                  | 拖拽式界面，无需 YAML | 偏好图形化布置、多用户登录             |
| [Flame](https://github.com/pawelmalak/flame)    | 应用与书签入口                                      | 页面内编辑器          | 只需要轻量的导航页                     |
| [Homer](https://github.com/bastienwirtz/homer)  | 静态服务导航页                                      | 单个 YAML 文件        | 希望用静态站点托管、降低运行维护       |

Homepage 和 Glance 都支持小组件，但设计重心不同：Homepage 先组织“有哪些服务、运行得怎样”，
Glance 先组织“今天要看哪些信息”。

如果只想保存网址，不需要动态数据，Homer 更简单；
如果主要想在浏览器中拖放和编辑，则优先试 Homarr。

以上是依据项目公开功能定位的选型建议，实际集成能力需按目标服务逐项核对。

## 参考资料

- [glanceapp/glance: A self-hosted dashboard that puts all your feeds in one place](https://github.com/glanceapp/glance) #todo
- [pawelmalak/flame: Flame is self-hosted startpage for your server. Easily manage your apps and bookmarks with built-in editors.](https://github.com/pawelmalak/flame) #todo
- [bastienwirtz/homer: A very simple static homepage for your server.](https://github.com/bastienwirtz/homer) #todo
- [ajnart/homarr: Customizable browser's home page to interact with your homeserver's Docker containers (e.g. Sonarr/Radarr)](https://github.com/ajnart/homarr) #todo
- [Homarr 当前仓库](https://github.com/homarr-labs/homarr)
- [Dashy 仓库](https://github.com/Lissy93/dashy)
