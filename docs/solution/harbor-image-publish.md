---
title: Harbor：私有镜像推送与验证
description: 通过项目权限和机器人账户发布容器镜像。
---

目标：把应用镜像推到团队私有仓库。依赖已配置 HTTPS 的 [Harbor](docs/wiki/app/harbor.md) 和 Docker 客户端；域名、项目和账户均为示例，未连接实际仓库验证。

选型见[容器镜像仓库对比](docs/compare/service/compare-container-registry.md)。

## 发布流程

1. 创建私有项目 `demo`，建立具有 Pull Repository 和 Push Repository 权限的项目机器人账户，并设置有效期。
2. 在包含 Dockerfile 的应用目录构建镜像；登录时交互输入机器人 secret：

```sh
docker build -t app:1.0 .
docker login registry.example.com -u '<robot-account>'
docker tag app:1.0 registry.example.com/demo/app:1.0
docker push registry.example.com/demo/app:1.0
```

将 `<robot-account>` 替换为 Harbor 显示的完整账户名；单引号避免名称中的 `$` 被 shell 展开。机器人权限说明见[官方文档](https://goharbor.io/docs/2.14.0/working-with-projects/project-configuration/create-robot-accounts/)。

3. 在另一台受信任客户端登录后验证拉取；只需拉取的客户端使用独立只读账户：

```sh
docker pull registry.example.com/demo/app:1.0
docker image inspect registry.example.com/demo/app:1.0 --format '{{json .RepoDigests}}'
```

核对返回的 digest 与发布记录一致。需要固定版本时，按实际 digest 部署：

```sh
docker pull 'registry.example.com/demo/app@sha256:<digest>'
```

## 常见失败

- 证书不受信任：正确配置证书链，并让 Docker daemon 信任签发 CA，避免长期使用不安全仓库配置。
- 无权推送：检查项目是否存在、镜像名前缀及机器人权限；登录成功不代表有推送权限。
- 标签无法覆盖：检查不可变标签策略，优先发布新版本标签。

参考：[官方镜像推拉说明](https://goharbor.io/docs/2.14.0/working-with-projects/working-with-images/pulling-pushing-images/)。
