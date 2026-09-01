# 6.2 图的存储及基本操作

- 邻接矩阵法
- 邻接表法
- 十字链表
- 邻接多重表
- 图的基本操作
  - Adjacent(G, x, y)
  - Neighbors(G, x)
  - InsertVertex(G, x)
  - AddEdge(G, x, y)
  - RemoveEdge(G, x, y)
  - FirstNeighbor(G, x)
  - NextNeighbor(G, x, y)
  - Get_edge_value(G, x, y)
  - Set_edge_value(G, x, y, v)

## 习题

- 4 带权有向图 G 用邻接矩阵存储，则 vi 的入度等于邻接矩阵中
  A 第 i 行非 ∞ 的元素个数
  B 第 i 列非 ∞ 的元素个数
  C 第 i 行非 ∞ 且非 0 的元素个数
  D 第 i 列非 ∞ 且非 0 的元素个数 →D
- 13 假设有 n 个顶点、e 条边的有向图用邻接表表示，则删除与某个顶点 v 相关的所有边的时间复杂度为多少？答案 →O(n+e)
