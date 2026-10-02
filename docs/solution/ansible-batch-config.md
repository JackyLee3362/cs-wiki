---
title: Ansible：使用 Playbook 批量下发配置
description: 用 inventory、copy 模块和限定主机执行实现可重复配置。
---

目标：统一测试主机上的示例配置。依赖已安装的 [Ansible](docs/wiki/app/ansible.md)、SSH 访问、远端 Python 与 sudo 权限；以下示例未连接实际主机验证。

创建 `inventory.ini`，替换主机地址和登录用户：

```ini
[web]
node1 ansible_host=192.0.2.10 ansible_user=deploy
```

创建 `site.yml`；目录、文件内容和权限均由模块管理：

```yaml
---
- name: Manage example configuration
  hosts: web
  become: true
  tasks:
    - name: Ensure configuration directory exists
      ansible.builtin.file:
        path: /etc/example-app
        state: directory
        owner: root
        group: root
        mode: '0755'

    - name: Write configuration
      ansible.builtin.copy:
        dest: /etc/example-app/app.conf
        content: "log_level=info\n"
        owner: root
        group: root
        mode: '0644'
```

## 检查与执行

1. 检查连通性和语法，再预览变更：

```sh
ansible web -i inventory.ini -m ansible.builtin.ping
ansible-playbook -i inventory.ini site.yml --syntax-check
ansible-playbook -i inventory.ini site.yml --check --diff --limit node1 -K
```

2. 在同一测试节点执行两次，第二次应没有新的配置变化：

```sh
ansible-playbook -i inventory.ini site.yml --limit node1 -K
```

`-K` 交互输入 sudo 密码，免密 sudo 可省略。新建目录在 check 模式下不会实际落盘，后续任务可能无法完整模拟；以测试节点真实执行结果为准。配置包含秘密时禁用 diff，并按需使用 `no_log`。

参考：[官方 Playbook 入门](https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_playbook.html)、[检查模式的限制](https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_checkmode.html)。
