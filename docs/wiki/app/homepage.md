---
title: Homepage
description: 自托管服务入口与状态看板的安装和基本配置
date: 2026-08-27
update_date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
---

Homepage 将自托管服务链接、状态和服务小组件集中在一个页面；服务分组与布局主要通过 YAML 配置。选型见[自托管导航与仪表盘对比](docs/compare/service/compare-homepage.md)。

## 安装与启动

先创建 `config` 目录，再保存以下 `compose.yaml`。此例只供本机访问，不需要 Docker 集成。

```yaml
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    ports:
      - "3000:3000"
    volumes:
      - ./config:/app/config
    environment:
      HOMEPAGE_ALLOWED_HOSTS: "localhost:3000"
    restart: unless-stopped
```

```bash
mkdir -p config
docker compose up -d
docker compose ps
```

打开 `http://localhost:3000`。从其他域名或 IP 访问时，把实际访问的主机名（必要时包含端口）加入 `HOMEPAGE_ALLOWED_HOSTS`；它是主机名校验，不是登录认证。

## 添加服务

在 `config/services.yaml` 中按分组添加链接。保存后刷新页面即可检查结果。

```yaml
- 常用服务:
    - 文件服务:
        href: https://files.example.com
        description: 文件入口
    - 监控面板:
        href: https://monitor.example.com
        description: 运行状态
```

`config/settings.yaml` 管理页面标题、布局等全局选项；`config/widgets.yaml` 管理日期、天气等信息组件。服务 API 小组件直接配置在对应的 `services.yaml` 条目中，所需凭据不要提交到仓库，可按官方规则通过 `HOMEPAGE_VAR_` 或 `HOMEPAGE_FILE_` 环境变量引用。

## 使用边界

- 只有链接导航时不要挂载 Docker socket。需要容器状态集成时再按官方 Docker 集成文档配置；直接挂载 socket 即使标为只读也会增加权限风险。
- 公开访问时应配置认证及 HTTPS。新版 Homepage 支持密码或 OIDC 认证，仍建议结合反向代理或 VPN；具体变量以当前官方安装文档为准。

## 参考资料

- [gethomepage/homepage](https://github.com/gethomepage/homepage) #todo
- [Docker Installation - Homepage](https://gethomepage.dev/installation/docker/) #todo
- [服务配置](https://gethomepage.dev/configs/services/)
- [安装与认证](https://gethomepage.dev/installation/)
