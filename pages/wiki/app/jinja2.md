---
title: Jinja2
description: Python 生态事实标准的通用模板引擎
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - python
  - 模板
categories:
  - 后端开发
comment: true
---

## 概述

[Jinja](https://github.com/pallets/jinja)（即 Jinja2）是 Pallets 团队维护的通用模板引擎（Flask 同门），也是 Python 生态事实上的模板标准。注意它与 [[cookiecutter]]、[[copier]] 的关系：**那两个是「项目生成器」，Jinja2 是它们底层的「模板引擎」**——cookiecutter/copier 负责交互问答与文件落地，变量替换这一步由 Jinja2 完成。此外 Ansible、SaltStack、Sphinx、dbt 等知名工具的模板语法都直接基于 Jinja2。

## 核心语法

```jinja2
{# 注释 #}

{# 变量与表达式，支持属性访问、过滤器 #}
{{ user.name | upper }}
{{ price | round(2) }}
{{ "a,b,c" | split(",") }}

{# 控制结构 #}
{% for item in items %}
  {{ loop.index }}: {{ item }}
{% endfor %}

{% if user.is_admin %}
  <a href="/admin">管理后台</a>
{% endif %}

{# 宏（可复用片段）#}
{% macro render_user(u) %}
  <li>{{ u.name }}</li>
{% endmacro %}

{# 继承与块 #}
{% extends "base.html" %}
{% block content %}...{% endblock %}
```

## 核心特性

- **自动转义（autoescape）**：HTML 模板默认开启，防 XSS
- **过滤器与测试器**：`| lower`、`| default('x')`、`is defined` 等，可自定义
- **沙箱模式（SandboxedEnvironment）**：渲染不可信模板时限制可用属性与方法，是 Ansible 等工具安全渲染的基础
- **模板继承（extends/block）**：适合整页/整文件的骨架复用
- **扩展机制**：`jinja2_time`（时间）、`jinja2-ext` 生态；cookiecutter/copier 通过扩展补齐日期变量等能力

## 与 Python 代码集成

```python
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("templates"), autoescape=True)
tpl = env.get_template("config.yaml.j2")
print(tpl.render(host="prod-1", port=8080))
```

## 参考资料

- [GitHub - pallets/jinja: A very fast and expressive template engine](https://github.com/pallets/jinja) #todo
- [Jinja 官方文档](https://jinja.palletsprojects.com/) #todo
- 相关笔记：[[cookiecutter]]、[[copier]]
