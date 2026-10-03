---
title: Harbor
description: 面向团队的 OCI 镜像仓库与制品管理。
---

Harbor 在镜像仓库基础上提供项目权限、复制、保留策略和漏洞扫描等能力；扫描依赖已配置的扫描器。它负责存储与分发制品，不负责运行应用容器。

## 使用入口

按[官方安装说明](https://goharbor.io/docs/2.14.0/install-config/)部署并配置 HTTPS；以下以 Harbor 2.14 文档为参考。客户端使用能解析的仓库域名，并信任其证书：

```sh
docker login registry.example.com
docker pull registry.example.com/demo/app:1.0
```

推送前先创建项目，镜像名采用 `仓库域名/项目/镜像:标签`。见[镜像推拉](https://goharbor.io/docs/2.14.0/working-with-projects/working-with-images/pulling-pushing-images/)。

## 关键坑点

- CI 使用限定项目、权限和有效期的机器人账户，不使用管理员账户。
- 标签可变；需要固定部署内容时使用 digest，并结合保留策略避免被清理。
- 删除标签不等于磁盘空间立即释放；还要结合制品引用和垃圾回收。
- 镜像存储不是全部状态，备份还需覆盖数据库、配置和恢复所需密钥。

## 参考资料

- [横向比较：Harbor 与其他镜像仓库](docs/compare/service/compare-container-registry.md)
- [官网](https://goharbor.io/)
- [源码](https://github.com/goharbor/harbor)
- [官方文档](https://goharbor.io/docs/)
- [机器人账户](https://goharbor.io/docs/2.14.0/working-with-projects/project-configuration/create-robot-accounts/)
- [私有镜像推送与验证](docs/solution/harbor-image-publish.md)
