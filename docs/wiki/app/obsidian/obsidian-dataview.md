---
title: Obsidian Dataview
date: 2024-10-08
draft: false
author: JackyLee
tags:
  - 笔记工具
  - Obsidian
  - 插件
categories:
  - 编辑器工具
comment: true
---

第三方数据查询插件，将 Obsidian 笔记库当作数据库进行查询和展示。

## 示例查询

### 列出带标签的笔记

```dataview
list
from #obsidian
```

### 列出未完成任务

```dataview
LIST
FROM "res"
WHERE !completed
```

### 读取 CSV 数据

```dataview
TABLE WITHOUT ID en as "英文", cn as "中文"
FROM csv("db/weekend.csv")
limit 4
```

## 特点

- 基于笔记的 YAML frontmatter 和内联字段进行查询
- 支持 TABLE、LIST、TASK 三种展示形式
- 支持 DataviewJS，可用 JavaScript 编写复杂查询
- 适合构建个人知识库的数据仪表盘

- [Obsidian 达人成长之路 2：使用终极工具 Dataview 释放笔记库的潜力 · JavaScript API - 掘金](https://juejin.cn/post/7372768355777839104)
- [Obs137｜用 Dataviewjs 讀取 CSV 資料以繪製統計圖表 – 簡睿隨筆](https://jdev.tw/blog/8190/obs137%EF%BD%9Cload-csv-by-dataview-integrates-charts)
