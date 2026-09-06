---
title: Spring MVC Frontend Update
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Update Feature

![1630670367812](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020840.png)

> 需求:完成图书信息的修改功能
>
> 1.找到页面中的`编辑`按钮，该按钮绑定了`@click="handleUpdate(scope.row)"`
>
> 2.在 method 的`handleUpdate`方法中发送异步请求根据 ID 查询图书信息
>
> 3.根据后台返回的结果，判断是否查询成功
>
>     如果查询成功打开修改面板回显数据，如果失败提示错误信息
>
> 4.修改完成后找到修改面板的`确定`按钮，该按钮绑定了`@click="handleEdit()"`
>
> 5.在 method 的`handleEdit`方法中发送异步请求提交修改数据
>
> 6.根据后台返回的结果，判断是否修改成功
>
>     如果成功提示错误信息，关闭修改面板，重新查询数据，如果失败提示错误信息

scope.row 代表的是当前行的行数据，也就是说,scope.row 就是选中行对应的 json 数据，如下:

```json
{
  "id": 1,
  "type": "计算机理论",
  "name": "Spring实战 第五版",
  "description": "Spring入门经典教程，深入理解Spring原理技术内幕"
}
```

修改`handleUpdate`方法

```js
//弹出编辑窗口
handleUpdate(row) {
    // console.log(row);   //row.id 查询条件
    //查询数据，根据id查询
    axios.get("/books/"+row.id).then((res)=>{
        if(res.data.code == 20041){
            //展示弹层，加载数据
            this.formData = res.data.data;
            this.dialogFormVisible4Edit = true;
        }else{
            this.$message.error(res.data.msg);
        }
    });
}
```

修改`handleEdit`方法

```js
handleEdit() {
    //发送ajax请求
    axios.put("/books",this.formData).then((res)=>{
        //如果操作成功，关闭弹层，显示数据
        if(res.data.code == 20031){
            this.dialogFormVisible4Edit = false;
            this.$message.success("修改成功");
        }else if(res.data.code == 20030){
            this.$message.error("修改失败");
        }else{
            this.$message.error(res.data.msg);
        }
    }).finally(()=>{
        this.getAll();
    });
}
```

至此修改功能就已经完成。
