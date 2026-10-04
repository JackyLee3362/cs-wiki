---
title: Mihomo
description: 代理内核的基本使用与发行文件选型
date: 2026-10-03
update_date:
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
---

Mihomo 是兼容 Clash 配置的代理内核；它与提供界面的 [Clash Verge](docs/app/clash-verge.md) 不是同一类安装包。下载时先选操作系统和 CPU 架构，再选指令集、Go 编译版本及包格式。

## 发行文件怎么选

以 `mihomo-linux-amd64-v2-go123-v1.19.32.gz` 为例：`linux` 是系统，`amd64` 是 x86-64 架构，`v2` 是 CPU 指令集等级，`go123` 表示使用 Go 1.23 编译，`v1.19.32` 才是 Mihomo 版本号，`.gz` 是压缩格式。

| 文件名部分 | 含义与选择 |
| --- | --- |
| `amd64-v1` | x86-64 基础指令集，兼容范围最广；不确定 CPU 能力时先选它。 |
| `amd64-v2` | 要求额外支持 SSE3、SSSE3、SSE4.1/4.2、POPCNT 等指令。 |
| `amd64-v3` | 在 v2 基础上还要求 AVX、AVX2、BMI1/2、FMA 等；旧 CPU 或未透传指令集的虚拟机不能使用。 |
| 无 `go` 后缀 | 使用该发行版默认的较新 Go 工具链编译。 |
| `go120` / `go123` | 分别表示用 Go 1.20 / 1.23 编译，供有系统兼容需求时选择；不是 Mihomo 1.20 / 1.23。 |
| `.gz` | 压缩的独立可执行文件，解压后自行放置与运行。 |
| `.deb` / `.rpm` / `.pkg.tar.zst` | 分别用于 Debian/Ubuntu、RPM 系发行版、Arch 系发行版的软件包安装。 |

Linux 内核 2.6.32～3.1 的用户，官方 FAQ 建议选带 `go123` 的文件；较新系统通常选无 `go` 后缀的构建。`v2/v3` 只表示最低 CPU 要求，**不保证比 v1 更快**。文件名没有明确 `v1/v2/v3` 时，不要据旧版命名规则猜测其指令集级别；优先选显式 `v1`，并核对当次发布说明。

Linux 可用 `uname -m`、`uname -r` 查看架构与内核，用 `lscpu` 查看 CPU 指令集。虚拟机以实际暴露给来宾系统的指令集为准。`alpha` 是较新提交的测试构建；普通使用优先从正式 Release 选包。

## 基本使用

从[官方 Releases](https://github.com/MetaCubeX/mihomo/releases)下载匹配的 Linux `.gz` 文件，核对页面公布的 SHA-256，下载后将其重命名为 `mihomo.gz`。以下命令假定当前目录已有自己的 `config.yaml`；配置中可能包含订阅地址或凭据，不要提交到仓库。

```bash
sha256sum mihomo.gz
gzip -dc mihomo.gz > mihomo
chmod +x mihomo
./mihomo -v
./mihomo -t -f config.yaml
./mihomo -f config.yaml
```

`-t` 只校验配置并退出，`-f` 指定配置文件；需要指定配置目录时使用 `-d`。如果二进制启动时提示缺少 CPU 指令，应换用更低等级的构建；若配置校验失败，先修复 YAML 或引用的数据文件，再启动服务。长期运行可参考官方 systemd 示例。

## 参考资料

- [Mihomo 官网与文档](https://wiki.metacubex.one/)
- [Mihomo GitHub 仓库](https://github.com/MetaCubeX/mihomo)
- [发行文件](https://github.com/MetaCubeX/mihomo/releases)
- [官方选包 FAQ](https://wiki.metacubex.one/startup/faq/)
- [官方运行服务说明](https://wiki.metacubex.one/startup/service/)
- [Go 的 AMD64 指令集与系统要求](https://go.dev/wiki/MinimumRequirements)
- [Clash](docs/app/clash.md) · [Clash Verge](docs/app/clash-verge.md)
