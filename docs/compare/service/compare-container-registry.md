---
title: 容器镜像仓库对比：Harbor、Distribution、GitLab 与 Gitea
description: 比较独立镜像治理平台、基础仓库和代码平台内置仓库。
date: 2026-10-03
---

**Harbor 解决「团队把构建好的镜像存在哪里、谁能推拉、保留多久」的问题。** 典型流程是 CI 构建镜像后推到仓库，服务器再按版本或 digest 拉取部署。

## 同类工具怎么选

| 工具 | 核心定位 | 适合场景 | 维护与取舍 |
| --- | --- | --- | --- |
| [Harbor](https://goharbor.io/) | 独立 OCI 仓库与治理平台，项目权限、复制、扫描集成 | 多项目或多套 CI 需要统一管理镜像 | 多组件运行，需维护数据库、制品存储、证书和后台任务 |
| [CNCF Distribution](https://distribution.github.io/distribution/) | 提供镜像推拉接口的基础 Registry | 只需私有推拉，愿意自行配套管理能力 | 服务主体较精简；UI、项目治理、扫描等需另行集成 |
| [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) | 与 GitLab 项目及 CI 集成的镜像仓库 | 已使用 GitLab，希望代码与镜像管理连贯 | 复用现有平台较方便；具体治理能力核对版本和套餐 |
| [Gitea Container Registry](https://docs.gitea.com/usage/packages/container/) | Gitea 包管理中的容器仓库 | 已使用 Gitea，先满足团队基础镜像存储 | 与已有账户体系结合；复杂治理需求逐项核对 |

这是功能与架构对比，未实测资源消耗。已有 GitLab/Gitea 时先评估内置仓库；需要独立于代码平台的治理能力再考虑 Harbor；只需要基础推拉时可考虑 Distribution。

## 不要混淆这些工具

| 工具 | 管什么 |
| --- | --- |
| Git 仓库 | 源代码与 Dockerfile |
| CI / 镜像构建工具 | 把源代码构建成镜像 |
| Harbor 等 Registry | 保存与分发镜像、OCI 制品 |
| Docker / Kubernetes | 在目标机器运行容器 |

Harbor 不代替 CI 构建，也不负责把镜像运行成应用。它支持 OCI 制品，也不等于支持所有 Maven、npm 等包管理协议的通用制品仓库。

## 选型时优先检查

1. 是否支持所需的项目隔离、只读拉取账户、CI 凭证和审计方式。
2. 是否需要复制、漏洞扫描、保留策略与不可变标签；支持不等于默认启用。
3. 是否能恢复数据库与镜像存储，清理策略是否会删掉仍需回滚的版本。

## 站内说明与实践

- [Harbor 应用说明](docs/wiki/app/harbor.md)
- [私有镜像推送与验证](docs/solution/harbor-image-publish.md)
