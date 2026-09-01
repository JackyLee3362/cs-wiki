# 2.3 线性表的链式表示

## 单链表的定义

- 线性表的链式存储又称单链表

- 结点的类型定义

```cpp
typedef struct LNode{     // 声明结点的类型和指向结点的指针类型
  ElemType data;        //结点的数据域
  struct LNode *next;   // 结点的指针域
}LNode,*LinkList;         // LinkList为指向结构体LNode的指针类型
```

- 通常用头指针来表示一个单链表

- 单链表上基本操作的实现

- 采用头插法建立单链表

  - 时间复杂度$O(n)$

```cpp
void CreateList_Head(LinkList &L,int n){
    L = new LNode;
    L->next = NULL; //L指向头结点，头结点指向NULL指针
  for(int i = 0;i < n; i++){
    p = new LNode;
    cin >> p->data;
    p->next = L->next;
      L->next = p;
  }
}
```

- 采用尾插法建立单链表

  - 时间复杂度$O(n)$

```cpp
void CreateList_Tail(LinkList& L, int n) {
  L = new LNode;
  L->next = NULL;
  LNode* r;
  LNode* p;
  r = new LNode; r = L;
  for (int i = 0; i < n; i++) {
    p = new LNode; p->next = NULL;
    cin >> p->data;
    r->next = p;
    r = p;
  }
}
```

- 按序号查找结点值

  - 时间复杂度$O(n)$

```cpp
Status GetElem_L(LinkList L,int i, ElemType &e){
  LNode* p = L->next;
  int j = 1;
  if(i == 0) return L;       // 若i等于0，则返回头结点
  if(i < 1) return NULL;     // 若i无效，则返回头结点
  while(p && j < i){
    p = p->next;
    j++;
  }
  e = p->data;
  return OK;
}
```

- 按值查找表结点

  - 时间复杂度$O(n)$

```cpp
int LocateElem_L_return_num(LinkList L,ElemType e){
  LNode* p = L->next;
  int j = 1;
    while(p && p->data != e){
      p = p->next;
      j++;
    }
    if(p) return j;
    else return 0;
}
```

- 插入结点操作

  - 时间复杂度$O(n)$ ，开销主要在查找第 i-1 个元素

```cpp
Status ListInsert_L(LinkList& L, int i, ElemType e) {
  LNode* p = L;
  LNode* s;
  int j = 0;
  while (p && j < i - 1) {
    p = p->next;
    j++;
  }
  if (p || j > i - 1) return ERROR;
  s = new LNode;
  s->data = e;
  s->next = p->next;
  p->next = s;
  return OK;
}
```

- 删除结点操作

  - 时间复杂度$O(n)$

```cpp
bool ListDelete_L(LinkList& L, int i, ElemType &e) {
  LNode* p = L;
  LNode* q = new LNode;
  int j = 0;
  while (p->next && j < i - 1) {
    p = p->next;
    j++;
  }
  if (!(p->next) || j > i - 1) return false;

    q->next = p->next;
  e = q->data;
    delete q;
  return true;
}
```

- 求表长操作

## 双链表

- 结点类型定义

```cpp
typedef struct DuLNode{
  Elemtype data;
  struct DuLNode *prior,*next;
}DuLNode, *DuLinkList;
```

- 双链表的插入操作

  - 时间复杂度$O(n)$

```cpp
int ListInsert_DuL(DuLinkList &L, int i, ElemType e) {
    DuLNode* p, *s;
    //在带头结点的双向循环链表L中第i个位置之前插入元素e
    if (!(p = GetElemP_DuL(L, i))) return ERROR;

    s = new DuLNode;
    s->data = e;

    s->prior = p->prior;
    p->prior->next = s;
    s->next = p;
    p->prior = s;
    return OK;
}// ListInsert_DuL
```

- 双链表的删除操作

  - 时间复杂度$O(n)$

```cpp
int ListDelete_DuL(DuLinkList& L, int i, ElemType &e) {
    DuLNode* p;
    //在带头结点的双向循环链表L中删除第i个元素，并返回e
    if (!(p = GetElemP_DuL(L, i))) return ERROR;
    e = p->data;
    p->prior->next = p->next;
    p->next->prior = p->prior;
    delete p;
    return OK;
}//ListDelete_DuL
```

- 循环链表

  - 循环单链表
  - 循环双链表

- 静态链表

  - 结点类型定义

```cpp
#define MaxSize 100
typydef struct{
	ElemType data;
	int next;
}SlinkList[MaxSize];
```

- 顺序表和链表的比较

  - 存储（读写）方式
  - 逻辑结构与物理结构
  - 查找、插入和删除操作
  - 空间分配
  - 在实际应用中应该怎样选取存储结构呢？
    - 基于存储的考虑
    - 基于运算的考虑
    - 基于环境的考虑

## 习题

- 7 给定有 n 个元素的一维数组，建立一个有序单链表的最低时间复杂度是?→$$O(n\log_2n)$$ 先建立再排序，时间复杂度是$O(n^2)$； 先排序再建立，排序的时间复杂度是$O(n\log_2n)$，建立的时间复杂度是$O(n)$
- 15【2016】
- 21 一个链表最常用的操作是在最后一个元素之后插入一个元素和删除第一个元素，选用？最节省时间 A 不带头结点的单循环链表 B 双链表 C 不带头结点且有尾指针的单循环链表 D 单链表 →C
- 23【2016】
- 25 某线性表用带头结点的循环单链表存储，头指针为 head，当 head->next->next=head 成立时，线性表长度可能是？→0 或者 1
- 综合题 21【2009】已知一个嗲有表头结点的单链表，结点结构为 data|link 假设该链表只给出了头指针 list。在不改变链表的前提下，请设计一个尽可能高效的算法，查找链表中倒数第 k 个位置上的结点（k 为正整数）。若查找成功，算法输出该结点的 data 域的值，并返回 1；否则，只返回 0。要求： A. 描述算法的基本设计思想 B. 描述算法的详细实现步骤 C. 根据设计思想和实现步骤，采用程序设计语言描述算法，关键之处请给出简要注释
- 22【2012】
- 23【2015】
- 25【2019】
