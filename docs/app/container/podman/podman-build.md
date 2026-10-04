---
title: Podman build
description: 使用 Containerfile 构建与验证镜像
date: 2026-10-03
update_date:
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
---

`podman build` 使用 `Containerfile` 或 `Dockerfile` 和构建上下文生成镜像，底层复用 Buildah 的构建能力。`COPY` 读取的是上下文中的文件；末尾的 `.` 表示当前目录，不是镜像名称。以下示例在空目录中执行。

`Containerfile`：

```dockerfile
FROM docker.io/library/alpine:latest
COPY hello.txt /hello.txt
CMD ["cat", "/hello.txt"]
```

```sh
printf 'Hello Podman\n' > hello.txt
podman build -f Containerfile -t localhost/hello:demo .
podman images localhost/hello
podman run --rm localhost/hello:demo
```

`-t` 指定本地镜像名和标签；`localhost/` 表示本地命名空间，构建完成不会自动推送。若要推送，需另行登录仓库并使用完整仓库地址。Windows/macOS 要先启动 `podman machine`。

构建上下文要尽量小：在目录下放 `.containerignore` 排除无关文件；若同时存在 `.containerignore` 与 `.dockerignore`，Podman 优先使用前者。不要把 `.env`、私钥或令牌复制进镜像。构建时需要凭据可用 `podman build --secret` 与 `RUN --mount=type=secret`，不要用 `ARG` 传秘密。

排查旧基础镜像时使用 `podman build --pull=always -t localhost/hello:demo .`；`--no-cache` 只禁用已有构建缓存，不等于重新拉取基础镜像。正式构建宜固定基础镜像版本或 digest。跨架构构建可使用 `--platform`，但含 `RUN` 的构建在非本机架构上通常需要模拟执行环境。

## 参考资料

- [Podman build 官方手册](https://docs.podman.io/en/latest/markdown/podman-build.1.html)
- [Podman 基础](docs/app/docker/podman/index.md)
