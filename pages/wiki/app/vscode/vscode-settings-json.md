---
title: VSCode settings.json 配置
date: 2025-11-03
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
  - 配置
categories:
  - 编辑器工具
comment: true
---

## 配置优先级

从高到低

- 工作区设置 json
- 用户设置 json
- 默认应用设置 json
- 默认设置 json

## 如何配置搜索文件夹

ctrl + e 需要排除部分文件夹

```json
// 排除文件
"files.exclude": {
    "**/node_modules": true,
    "**/dist": true
}
// 排除搜索（一般用这个）
"search.exclude": {
    "**/node_modules": true,
    "**/dist": true
}
```

## Vim 过慢

```json
"extensions.experimental.affinity": {
    "vscodevim.vim": 1,
    "asvetliakov.vscode-neovim": 1
},
```

- [完美解决 vscode vim 插件卡顿问题长按 j k 或提示等卡顿问题_vscode 插件安装卡主怎么关-CSDN 博客](https://blog.csdn.net/qq_51714354/article/details/128442761)


## 参考资料

- [VsCode Settings.Json 配置 - 扎卡里星移民户 - 博客园](https://www.cnblogs.com/q787011187/p/17800894.html)
