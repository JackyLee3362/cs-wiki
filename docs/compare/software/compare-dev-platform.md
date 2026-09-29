---
title: Dev Platform & Tools
description: 开发平台与工具对比
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - dev
  - platform
  - 开发工具
categories:
  - 应用软件
comment: true
---

> 开发平台与工具覆盖本地环境管理、应用部署、静态托管、Bug 追踪、SQL 实验等场景，提升开发全流程效率。

## 工具概览

| 工具 | 类型 | 开源 | 价格 | 平台 | 核心特点 |
| :--- | :--- | :--: | :--- | :--- | :--- |
| [ServBay](https://servbay.com/) | 本地开发环境 | ❌ | 免费+增值 | macOS / Windows | 图形化管理多语言版本，内置 Nginx/Caddy/MySQL/Redis |
| [Fly.io](https://fly.io/) | 全球部署平台 | ❌ | 按需付费 | 云端 | 基于 Firecracker 微型 VM，全球 30+ 地区部署 |
| [Tiiny Host](https://tiiny.host/) | 静态托管 | ❌ | 免费+增值 | 网页 | 上传 zip 即发布，支持自定义域名和密码保护 |
| [SQL Playground](https://www.sqlplayground.io/) | SQL 沙箱 | ❌ | 免费 | 网页 | 在线即写即得 MySQL/PostgreSQL，支持分享 |
| [Jam.dev](https://jam.dev/) | Bug 报告 | ❌ | 免费+增值 | 浏览器插件 | 一键抓取控制台日志、网络请求、操作回放 |
| [Productboard](https://www.productboard.com/) | 产品管理 | ❌ | 付费 | 网页 | 汇集用户反馈，需求优先级排序，路线图可视化 |
| [Vercel](https://vercel.com/) | 前端部署 | ❌ | 免费+增值 | 云端 | 前端框架原生支持，Edge Network，Serverless |
| [Netlify](https://www.netlify.com/) | 静态托管 | ❌ | 免费+增值 | 云端 | 持续部署，表单处理，Edge Functions |
| [GitHub Pages](https://pages.github.com/) | 静态托管 | ❌ | 免费 | 云端 | 与 GitHub 仓库集成，适合文档与个人站点 |
| [Coolify](https://coolify.io/) | 自托管 PaaS | ✅ | 免费 | 自托管 | Heroku/Vercel 开源替代，支持多服务器部署 |
| [LocalStack](https://localstack.cloud/) | 本地 AWS | ❌ | 免费+增值 | 桌面 | 本地模拟 AWS 云服务，离线开发与测试 |

## 按场景推荐

### 本地开发环境管理

经常需要在本地同时运行多个语言版本和服务的开发者，**ServBay** 是 macOS 和 Windows 上的图形化选择，支持 Python/Java/PHP/Node.js 多版本共存和一键切换，内置数据库和缓存服务。

### 全球部署与边缘计算

需要让应用在全球范围低延迟访问时，**Fly.io** 将应用和数据库部署到离用户最近的节点，基于 Firecracker 冷启动极快。前端项目首选 **Vercel**（Next.js 生态最佳）或 **Netlify**（功能均衡）。

### 自托管与私有部署

希望自建部署平台又不想被云厂商绑定时，**Coolify** 是开源 PaaS 方案，支持 Docker 化应用的多服务器部署和自动 SSL。

### Bug 追踪与复现

收到"在我这儿是好的"式 Bug 报告时，**Jam.dev** 浏览器插件可自动打包控制台日志、网络请求、录屏和操作回放，直接发送到 Jira/Linear，大幅提升沟通效率。

### SQL 快速验证

不想为了一条 SQL 查询启动本地数据库客户端时，**SQL Playground** 提供在线 MySQL/PostgreSQL 沙箱，即时看到执行结果和数据结构图，且支持生成分享链接。

### 产品需求管理

产品路线图的规划与优先级排序，**Productboard** 将用户反馈汇集一处，通过数据驱动的方式排列需求优先级并生成可视化路线图。

## 其他工具

- [PayloadCMS - 开源无头 CMS / Next.js 后端框架](https://github.com/payloadcms/payload) #todo
- [Dozzle - 容器实时日志查看器](https://github.com/amir20/dozzle) #todo
- [Open WebUI - Ollama / OpenAI 友好的 AI 界面](https://github.com/open-webui/open-webui) #todo
- [DevToys - 开发者瑞士军刀](https://github.com/DevToys-app/DevToys) #todo
- [ArchiveBox - 一键保存任何内容，私有互联网档案馆](https://zhuanlan.zhihu.com/p/1984313955217327884) #todo
- [How-To-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) #todo

## 参考资料

- [2025 年程序员必备的开发工具有哪些？ - 知乎](https://www.zhihu.com/question/1936060302715232651/answer/1941184986238679035) #todo
- [有哪些好用的开源软件？ - 知乎](https://www.zhihu.com/question/56766597/answer/2298732073) #todo
- [常用电脑软件有哪些更好的替代品？ - 知乎](https://www.zhihu.com/question/66493608/answer/1931653730224300251) #todo
- [独立开发者宝藏库 - 知乎](https://www.zhihu.com/pin/1929629217794032519?native=0) #todo
- [The Twelve-Factor App](https://12factor.net/) #todo
