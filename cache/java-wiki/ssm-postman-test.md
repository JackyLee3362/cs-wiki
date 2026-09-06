---
title: SSM Postman Test
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Postman Test

#### 新增

`http://localhost/books`

```json
{
  "type": "类别测试数据",
  "name": "书名测试数据",
  "description": "描述测试数据"
}
```

![1630652582425](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020811.png)

#### 修改

`http://localhost/books`

```json
{
  "id": 13,
  "type": "类别测试数据",
  "name": "书名测试数据",
  "description": "描述测试数据"
}
```

![1630652758221](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020812.png)

#### 删除

`http://localhost/books/14`

![1630652796605](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020813.png)

#### 查询单个

`http://localhost/books/1`

![1630652837682](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020814.png)

#### 查询所有

`http://localhost/books`

![1630652867493](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020815.png)
