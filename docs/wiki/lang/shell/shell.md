---
title: shell
description:
date: 2026-09-12
update_date:
draft: true
author: JackyLee
tags:
  - wiki
categories:
comment: true
---

这一行是 **Shell 脚本的安全开关**，写备份脚本强烈建议加上，防止脚本在出错时继续往下跑，产生损坏的备份。

```bash
set -euo pipefail
```

拆成4个独立选项：

1. **`set -e`**

   > 只要任意一条命令返回**非0退出码（代表失败）**，脚本立刻退出，不再继续执行后续命令。
   > 例子：sqlite备份失败，脚本直接终止，不会继续跑 restic 备份一个坏掉的数据库。

2. **`set -u`**

   > 使用**未定义的变量**时直接报错退出。
   > 比如手敲错变量名 `RESTIC_REP` 而不是 `RESTIC_REPO`，脚本直接终止，不会把空字符串传入 restic。
   > 非常适合备份脚本，防止变量漏写导致灾难。

3. **`set -o pipefail`**
   > 管道 `|` 命令，默认只会看**最后一条命令**的返回码。
   > 开启后：管道里**任意一段失败，整条管道返回失败码**。
   > 示例：`cmd1 | cmd2`，如果 cmd1 失败，整条管道标记失败，`set -e` 就会触发退出。

> 一句话总结：`set -euo pipefail` = **严格模式，出错立刻停，变量不存在直接报错，管道失败能捕获**。
> 备份脚本必备，普通小脚本可以不用。
