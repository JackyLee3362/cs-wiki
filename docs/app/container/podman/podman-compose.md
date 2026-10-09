---
title: Podman Compose
description: 使用外部 Compose provider 管理多容器服务
date: 2026-10-03
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
---

`podman compose` 是调用外部 Compose provider 的包装命令，并不是独立的 Compose 实现。先安装兼容 provider，再在包含 `compose.yaml` 的目录检查版本并启动。

```sh
podman compose version
podman compose up -d
podman compose ps
podman compose down
```

Podman 提供 `podman compose` 包装命令，实际调用外部 provider；也可直接使用 Python 实现的 `podman-compose`：

```sh
# 通过已安装的外部 provider 运行
podman compose up -d
podman compose down

# 第三方 podman-compose
pipx install podman-compose
podman-compose up -d
```

若同时安装多个 provider，`podman compose` 可能优先选择 `docker-compose`；需要指定实现时设置 `PODMAN_COMPOSE_PROVIDER`，并用 `podman compose --help` 查看所选 provider 支持的选项。Windows/macOS 还需先启动 `podman machine`。

## 参考资料

- [Podman compose 官方手册](https://docs.podman.io/en/latest/markdown/podman-compose.1.html)
- [Podman 基础](docs/app/container/podman/index.md)
