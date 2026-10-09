---
title: 自部署收藏夹服务对比：Karakeep、Linkwarden 与其他开源工具
description: 比较收藏类型、网页留存、协作权限和服务器维护成本。
date: 2026-10-03
draft: false
---

**按需求初筛：多类型收藏和自动整理选 Karakeep；网页多格式留存与团队集合管理选 Linkwarden；简单链接收藏选 linkding。** 以下依据官方资料整理，未进行部署性能实测；实际功能以安装版本为准。

## Karakeep 与 Linkwarden

Karakeep 原名 Hoarder，定位是保存链接、笔记、图片和 PDF 的资料库；Linkwarden 以收藏、阅读、批注和网页留存为核心。两者功能已有明显重叠，选型应看实际工作流。[Karakeep 项目说明](https://github.com/karakeep-app/karakeep)、[Linkwarden 项目说明](https://github.com/linkwarden/linkwarden)。

| 维度 | Karakeep | Linkwarden |
| --- | --- | --- |
| 内容组织 | 列表、标签，统一收纳多种内容 | 集合、子集合、标签，围绕链接组织资料 |
| 自动整理 | AI 标签与摘要、OCR、规则引擎 | 可选 AI 标签，结合集合整理 |
| 网页留存 | 支持完整页面归档 | 自动保存截图、PDF、单文件 HTML，留存形式更直观 |
| 阅读与检索 | 全文及语义搜索、高亮、移动端离线阅读 | 全文搜索、阅读视图、高亮和批注 |
| 协作 | 支持共同维护列表 | 支持集合协作、成员权限和公开分享 |
| 收集入口 | 浏览器扩展、移动应用、API、RSS | 浏览器扩展、移动应用、API、RSS |
| 适合优先试用的场景 | 链接、图片、笔记混合收藏，减少手工整理 | 希望保留网页副本，并为多人组织共享集合 |

不能再用「Karakeep 有 AI、Linkwarden 没有」或「Karakeep 只能个人使用」区分。两者也都有通过 floccus 同步浏览器书签的集成，需单独配置；安装普通收藏扩展不等于自动双向同步。[Karakeep 功能列表](https://github.com/karakeep-app/karakeep)、[Linkwarden 功能列表](https://github.com/linkwarden/linkwarden)。

## 服务器部署与备份

以下是官方 Compose 示例的组件划分，不是资源占用排名：

| 工具 | 典型组件 | 备份重点 |
| --- | --- | --- |
| Karakeep | 应用、Chrome 抓取服务、Meilisearch | 应用数据卷、附件、配置与恢复所需密钥；搜索数据按恢复方案保留或重建 |
| Linkwarden | 应用、PostgreSQL、Meilisearch | 一致性的数据库备份、留存文件与上传附件、配置和恢复所需密钥 |

来源：[Karakeep Compose](https://github.com/karakeep-app/karakeep/blob/main/docker/docker-compose.yml)、[Linkwarden Compose](https://github.com/linkwarden/linkwarden/blob/main/docker-compose.yml)。部署时使用对应发布版本的配置，避免混用主分支配置和旧镜像。

- 批量抓取会增加浏览器的 CPU、内存占用；截图、PDF 和附件会持续增加磁盘用量。用同一批真实网页测量，不凭容器数量判断轻重。
- 书签导出通常不等于完整备份，需确认是否包含附件、快照、批注和权限；数据库与文件必须能一起恢复。
- 自部署不代表内容不出服务器：启用云端 AI 或外部归档服务前，核对发送的数据范围。

## 其他开源选择

| 工具 | 核心用途 | 选择边界 |
| --- | --- | --- |
| [linkding](https://github.com/sissbruecker/linkding) | 简洁链接库，标签、笔记、分享与 HTML 导入导出 | 希望降低日常整理与维护复杂度时优先试用 |
| [wallabag](https://github.com/wallabag/wallabag) | 提取正文、保存文章、稍后阅读 | 阅读优先；正文提取不能等同于原页面布局归档 |
| [Shaarli](https://github.com/shaarli/Shaarli) | 个人链接分享与收藏，PHP、无需数据库服务 | 适合简单个人链接库，复杂协作需求应另行核对 |

linkding 也支持页面归档：服务端自动快照使用 `latest-plus` 镜像及无头 Chromium；也可从浏览器通过 SingleFile 上传。因此「轻量」需要区分基础书签功能和启用抓取后的资源成本。见[官方归档说明](https://linkding.link/archiving/)。

## 试用时只检查这四件事

1. 用普通文章、中文长文、动态页面和 PDF 测试收藏、检索及离线副本；有链接不代表抓取成功。
2. 登录后页面单独测试：服务器通常没有浏览器的登录态，不能默认保存得到相同内容。
3. 导入少量旧书签，检查文件夹、标签、重复链接；协作场景用第二个账户验证权限。
4. 导出并恢复一次数据库与附件，再决定正式迁移；只验证容器能启动还不够。

## 部署文档

- [Karakeep Docker 部署](https://docs.karakeep.app/installation/docker/)
- [Linkwarden 自部署](https://docs.linkwarden.app/self-hosting/installation/)
- [linkding 安装](https://linkding.link/installation/)
- [wallabag 文档](https://doc.wallabag.org/)
- [Shaarli 文档](https://shaarli.readthedocs.io/en/master/)
