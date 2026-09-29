---
title: podman
description: 无守护进程、默认 rootless 的开源容器引擎，可作为 Docker 的替代品
date: 2026-09-01
update_date: 2026-09-11
draft: true
author: JackyLee
tags:
categories:
  - 命令行
comment: true
---

## 介绍

Podman 是 Red Hat 主导的开源容器引擎，可作为 Docker 的无守护进程替代品，命令基本兼容。核心特点：

- 无守护进程（daemonless）、默认 rootless
- 原生支持 pod，贴近 Kubernetes
- 支持 systemd / Quadlet 集成

## 与 Docker 的区别

| 维度         | Docker                        | Podman                    |
| ------------ | ----------------------------- | ------------------------- |
| 架构         | 客户端-守护进程（dockerd）    | 无守护进程，fork/exec     |
| 运行权限     | 默认 root（或加入 docker 组） | 默认 rootless             |
| 编排模型     | Docker Swarm / compose        | pod + Kubernetes 亲和     |
| systemd 集成 | 需额外配置                    | 原生生成 unit / Quadlet   |
| CLI 兼容     | 事实标准                      | 兼容 Docker CLI / compose |

## 安装

```sh
sudo dnf -y install podman

sudo apt-get update
sudo apt-get -y install podman
```

安装后验证：

```sh
podman --version
podman info
```

## 常用命令

Podman 与 Docker 命令高度一致，可直接对照：

| 操作          | Docker                  | Podman                  |
| ------------- | ----------------------- | ----------------------- |
| 拉取镜像      | `docker pull`           | `podman pull`           |
| 运行容器      | `docker run`            | `podman run`            |
| 列出容器      | `docker ps`             | `podman ps`             |
| 列出镜像      | `docker images`         | `podman images`         |
| 查看日志      | `docker logs`           | `podman logs`           |
| 进入容器      | `docker exec`           | `podman exec`           |
| 停止 / 启动   | `docker stop/start`     | `podman stop/start`     |
| 删除容器      | `docker rm`             | `podman rm`             |
| 删除镜像      | `docker rmi`            | `podman rmi`            |
| 查看详情      | `docker inspect`        | `podman inspect`        |
| 构建镜像      | `docker build`          | `podman build`          |
| 网络 / 存储卷 | `docker network/volume` | `podman network/volume` |

Fedora / RHEL 也可安装 `podman-docker`，它提供 `/usr/bin/docker` 的兼容 shim：

```sh
sudo dnf -y install podman-docker
```

## podman compose

Podman 内置 `podman compose`，也可使用 Python 实现的 `podman-compose`：

```sh
# 内置子命令
podman compose up -d
podman compose down

# 第三方 podman-compose
pipx install podman-compose
podman-compose up -d
```

## pod（Pod 概念）

Pod 是 Podman 相比 Docker 的差异化能力，可将多个容器放进同一个 pod，共享网络命名空间与端口：

```sh
# 创建 pod 并暴露端口
podman pod create --name mypod -p 8080:80

# 将容器加入 pod
podman run --pod mypod nginx

# 查看 / 管理 pod
podman pod ps
podman pod stop mypod
podman pod rm mypod
```

## 镜像仓库配置 registries.conf

`registries.conf` 控制短名镜像（如 `podman pull nginx`）的搜索仓库与镜像加速（mirror）：

```toml
# /etc/containers/registries.conf（root 用户）
# ~/.config/containers/registries.conf（rootless 用户）

# 短名搜索顺序
unqualified-search-registries = ["docker.io", "quay.io"]

# 为 docker.io 配置镜像加速
[[registry]]
prefix = "docker.io"
location = "docker.io"

[[registry.mirror]]
location = "docker.m.daocloud.io"

[[registry.mirror]]
location = "docker.1ms.run"
```

## 代理

### 临时变量

```sh
HTTP_PROXY=http://127.0.0.1:8888 HTTPS_PROXY=http://127.0.0.1:8888 NO_PROXY=127.0.0.1,192.168.0.0/16 podman pull docker.io/nginx
```

### 环境变量配置

```conf
# ssh 转发, 配合 vps 上 tinyproxy
# ssh -N -L 127.0.0.1:8888:127.0.0.1:8888 user@domain
export http_proxy="127.0.0.1:8888"
export httpx_proxy="127.0.0.1:8888"
export HTTP_PROXY="127.0.0.1:8888"
export HTTPS_PROXY="127.0.0.1:8888"
```

> 测试代理链路 `curl -x http://127.0.0.1:8888 https://ifconfig.me`

## rootless 与端口

rootless 模式下，非 root 用户默认无法绑定 1024 以下的特权端口（如 80 / 443），会遇到：

```sh
Error: rootlessport cannot expose privileged port 80, you can add 'net.ipv4.ip_unprivileged_port_start=80' to /etc/sysctl.conf ...
```

解决方式二选一：

```sh
# 方式一：放开非 root 绑定低端口（家庭服务器可直接用）
echo 'net.ipv4.ip_unprivileged_port_start=80' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# 方式二：改用 1024 以上的端口，再通过 caddy / nginx 反向代理
```

## 参考资料

- [Podman 官网](https://podman.io/)
- [Podman 官方文档](https://docs.podman.io/)
- [Podman 安装指南](https://podman.io/docs/installation)
- [podman-run 手册页](https://docs.podman.io/en/latest/markdown/podman-run.1.html)
- [containers/podman - GitHub](https://github.com/containers/podman)
- [[译]Docker和Podman的差异 - 飞狐的部落格](https://lucumt.info/post/docker/difference-between-docker-and-podman/)
- [24.podman-registries.conf配置文件 - 知乎](https://zhuanlan.zhihu.com/p/719978088) #todo
