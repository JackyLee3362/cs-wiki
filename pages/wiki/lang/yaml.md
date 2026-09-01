---
title: yaml
description:
date: 2025-02-25
update_date:
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

参考 [YAML 官方文档][The Official YAML Web Site]

```yaml
# 对象
server:
  port: 8080
# 或者行内写法
server: {port: 8080}

# 数组
address:
    - beijing
    - shanghai
# 行内写法
address: [beijing, shanghai]

# 字面量
msg1: 'hello \n world' # 单引号忽略转义字符
msg2: "hello \n world" # 双引号识别转移字符

# 参数引用
name: Mike
person:
    name: ${name}
```

其他 Demo

```yaml
server:
  port: 9000

#定义对象/Map集合
user:
  name: Tom
  age: 20
  address: beijing

#定义数组/List/Set
hobby:
  - java
  - C
  - game
  - sport
```

## 参考资料

[The Official YAML Web Site]: https://yaml.org/ "The Official YAML Web Site"
