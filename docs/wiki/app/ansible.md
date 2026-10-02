---
title: Ansible
description: 使用清单和 Playbook 批量管理主机配置。
---

Ansible 在控制端读取 inventory（主机清单）和 YAML Playbook，通过模块管理远端状态。Linux 常用 SSH 连接，受管端通常需要 Python，无需常驻 Ansible agent。

控制端使用 Linux、macOS 或 Windows 的 WSL。已有 pipx 时可安装完整社区包：

```sh
pipx install --include-deps ansible
ansible --version
```

## 常用命令

```sh
ansible-inventory -i inventory.ini --graph
ansible web -i inventory.ini -m ansible.builtin.ping
ansible-playbook -i inventory.ini site.yml --syntax-check
ansible-playbook -i inventory.ini site.yml --check --diff
```

`ping` 模块验证连接和 Python 执行能力，不是 ICMP ping。清单示例见[官方入门](https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_inventory.html)。

## 关键坑点

- 幂等取决于模块和任务写法；反复执行 `shell` 不自动成为幂等操作。
- `--check` 是模块支持范围内的预测，不保证所有任务都能模拟；`--diff` 可能输出敏感配置。见[检查模式](https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_checkmode.html)。
- 先用 `--limit` 限定测试主机；密钥和密码从运行环境注入，避免写入清单。

## 参考资料

- [官网](https://www.ansible.com/)
- [源码](https://github.com/ansible/ansible)
- [官方文档](https://docs.ansible.com/projects/ansible/latest/)
- [使用 Playbook 批量下发配置](docs/solution/ansible-batch-config.md)
