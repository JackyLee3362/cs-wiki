---
title: 主机配置管理对比：Ansible、Shell、Salt 与 Puppet
description: 区分批量操作、持续配置管理和基础设施资源编排。
date: 2026-10-03
---

**Ansible 解决「把同一套操作可靠地应用到多台主机」的问题。** 例如统一安装软件、下发配置、创建用户，再按批次重启服务；主机清单和 Playbook 让这些动作可复用、可审查。

## 同类方法怎么选

| 方法 | 常见执行方式 | 适合场景 | 主要代价 |
| --- | --- | --- | --- |
| Shell + SSH | 脚本循环远程执行命令 | 少量机器、一次性简单操作 | 幂等、失败重试、状态汇总和回滚需自己实现 |
| [Ansible](https://docs.ansible.com/projects/ansible/latest/getting_started/index.html) | 控制端主动执行，Linux 常用 SSH 和远端 Python | 批量配置、发布、可重复运维，无需常驻受管 agent | 模块和任务要正确编写；普通执行模式不自动持续纠正漂移 |
| [Salt](https://docs.saltproject.io/en/latest/topics/tutorials/walkthrough.html) | 常见 master/minion，结合远程执行、状态和事件机制 | 已需要 agent 体系及事件驱动自动化 | 增加节点通信、密钥和控制面维护；也支持 SSH 等其他模式 |
| [Puppet](https://help.puppet.com/core/current/Content/PuppetCore/architecture.htm) | 常见 server/agent，agent 定期获取配置清单（catalog）并应用 | 希望长期维持主机声明状态、纠正配置漂移 | 需要维护 agent、证书、服务端和配置模型 |

这里比较典型模式，不按主机数量给出绝对界限；性能、连接成本和运维能力需用实际任务验证。

## 与 Terraform / OpenTofu、Compose 的区别

| 需求 | 优先考虑 |
| --- | --- |
| 创建云主机、网络、负载均衡等资源并跟踪生命周期 | [Terraform](https://developer.hashicorp.com/terraform/intro) / [OpenTofu](https://opentofu.org/docs/intro/) |
| 进入已有机器，安装软件、修改配置、执行运维任务 | Ansible 等配置管理工具 |
| 声明一台机器上的容器、网络和卷 | Docker Compose |

三者可以组合：资源编排创建主机 → Ansible 配置主机并分发 Compose 文件 → Compose 管理容器。能力存在交叉，关键是为每类资源明确唯一管理来源，避免互相覆盖。

## 使用 Ansible 的边界

- 幂等来自模块语义和任务设计，反复执行 `shell` 不自动变得安全。
- `--check` 只是支持该模式的模块进行预测，不等于事务或自动回滚。
- Ansible 本体不提供常驻定时调度；定期执行可由 CI、systemd timer 或自动化控制平台触发。
- 如果一两条 SSH 命令已足够，没有必要仅为形式改成复杂 Playbook。

## 站内说明与实践

- [Ansible 应用说明](docs/wiki/app/ansible.md)
- [Playbook 批量下发配置](docs/solution/ansible-batch-config.md)
- [Linux 定时任务运维手册](docs/solution/linux-scheduled-task-operations.md)
