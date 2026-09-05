---
title: VSCode launch.json 调试配置
date: 2025-11-03
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
  - 调试
categories:
  - 编辑器工具
comment: true
---

## launch.json

[vscode 里的 launch.json 是干什么用的](https://www.cnblogs.com/ttyyou/p/13780718.html)

"type"，"request"，"name"这三个是必须要配置的，不管你用什么编程环境

type 指定编程环境，比如 node，php，java，llvm 等

request 指定调试模式，vscode 只有两种调试模式，launch 和 attach

name 给配置项起一个名字。launch.json 是一个 configurations，里面可以有很多个配置，这里的 name 就是配置的名字。

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Py调试-当前文件",
      "type": "debugpy",
      "request": "launch",
      "program": "${file}",
      "console": "integratedTerminal"
    },
    {
      "name": "Py调试-前后端",
      "type": "debugpy",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "module": "main"
    }
  ]
}
```

## 参考资料

- [vscode debug 设置参数和环境变量 vscode debug configuration-CSDN 博客](https://blog.csdn.net/weixin_43082343/article/details/126618416)
- [VScode tasks.json 和 launch.json 的设置](https://zhuanlan.zhihu.com/p/92175757)
