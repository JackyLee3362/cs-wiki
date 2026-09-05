---
title: Deep Learning by Li Mu
date: 2023-01-06
draft: false
author: JackyLee
tags:
  - 基础知识
  - AI
  - 深度学习
categories:
  - 计算机科学
comment: true
---

## 参考资料

# 跟李沐学 AI

03 安装 有许多命令行可以学习

06 矩阵计算（可以学习下）（分子布局）

|                    | 标量$x(1,)$                          | 向量$\mathbf{x} (n,1)$ | 矩阵$X(n,k)$ |
| ------------------ | ---------------------------------- | ------------------ | -------- |
| 标量$y(1,)$        | $\frac{\partial y}{\partial x}(1,)$ | $\frac{\partial y}{\partial \mathbf{x}}(1,n)$ | $\frac{\partial y}{\partial X}(k,n)$ |
| 向量$\mathbf{y} (m,1)$ | $\frac{\partial \mathbf{y}}{\partial x}(m,1)$ | $\frac{\partial \mathbf{y}}{\partial \mathbf{x}}(m,n)$ | $\frac{\partial \mathbf{y}}{\partial X}(m,k,n)$ |
| 矩阵$Y(m,l)$        | $\frac{\partial Y}{\partial x}(m,l)$ | $\frac{\partial Y}{\partial \mathbf{x}}(m,l,n)$ | $\frac{\partial Y}{\partial X}(m,l,k,n)$ |

08 线性回归

关于 l.sum().backward()的理解，其实在自动求导里讲解过

## pytorch 在.py 文件中调试时加入 if **name="main"...**

The "freeze_support()" line can be omitted if the program is not going to be frozen to produce an executable.

## zip(data, args)

```python
def add(*args):
    data = [0] * 3
    data = [a + b for a, b in zip(data, args)]
    print(data)

    # self.data = [a + float(b) for a, b in zip(self.data, args)]
x,y,z = 1,2,3
add(x, y, z)
```

## 看不懂 softmax 这里的训练损失（看懂了，就是平均损失）

```python
...
        metric.add(float(l.sum()), accuracy(y_hat, y), y.numel())
        print(metric.data)
    # 返回训练损失和训练精度
    return metric[0] / metric[2], metric[1] / metric[2]
...
```

## 关于 torch.nn.Flatten()函数

其实就是除了第一维，其他都压扁，可以理解为将图片展开

## 运行错误 softmax 的简洁实现

解决办法，删除 nn.CrossEntropyLoss()括号中 reduction='none'这一项

## TODO: 过拟合和欠拟合，生成数据的代码没看懂
