# 4.2 串的匹配模式

- 简单的模式匹配算法——BF 算法

```cpp
int Index_BF(SString S, SString T, int pos) {
int i = pos, j = 1;
while (i <= S.length && j <= T.length) {
if (S.ch[i] == T.ch[j]) {// 比较成功则继续匹配下一个字符串
    i++;
    j++;
}
else { // 比较不成功则回溯
    i = i - j + 2;
    j++;
}
}
if (j > T.length)  return  i - T.length;  // 看下文注释
else return 0;
}

/*
j >= T.length 是错误的，举个反例：
S = {"abcdef"}; T = {"fg"}
when i = 6;
S.ch[i] = T.ch[j] = 'f';
Then i=7; j=2;
此时不符合循环条件跳出。明显j = 2匹配成功了
*/

```

- 改进的模式匹配算法——KMP 算法
  - 主函数

```cpp
int Index_KMP(SString S, SString T, int pos) {
int i = pos, j = 1;
while (i <= S.length && j <= T.length) {
if (j == 0 || S.ch[i] == T.ch[j]) { // j == 0或者比较成功则继续匹配下一个字符串
    i++;
    j++;
}
else
    j = next[j] // 比较不成功则回溯
}
if (j > T.length)  return  i - T.length;  // 看下文注释
else return 0;
}
```

    - 获得next函数

```cpp
void Get_next(SString T, int nextval[]){
int i = 1, j = 0;
nextval[1] = 0;
while (i < strlen(T)) {
if (j == 0 || T.ch[i] == T.ch[j]) next[++i] = ++j;
    else next[i] = next[j];
else j = next[j]; // 隐含着非常厉害的递归思想
}
return 0;
}
```

    - 时间复杂度$O(m+n)$ ，其中$O(m)$ 来自于求next数组，$O(n)$ 来自KMP算法的里层循环（普通模式匹配算法的时间复杂度是$O(mn)$

- KMP 算法的进一步优化
  - 获得 nextval 函数

```cpp
void Get_next(SString T, int nextval[]){
int i = 1, j = 0;
nextval[1] = 0;
while (i < strlen(T)) {
if (j == 0 || T.ch[i] == T.ch[j]) {
    i++;j++;
    if(T.ch[i] != T.ch[j]) nextval[i] = j;
    else nextval[i] = nextval[j];
}
else j = nextval[j]; // 隐含着非常厉害的递归思想
}
return 0;
}
```

<!-- ### 习题
  - 思考：手算next数组→A.next[ 1 ] = 0B.next[ 2 ] = 1C.next[ i ] = 前缀 和 后缀 最大交集 + 1
  - 思考：` {aba} ` 的前缀和后缀分别是什么?→前缀{a, ab}（没有b，必须连续且包含第一个字符），后缀{a, ba}（必须连续且包含最后一个字符）
  - 思考：模式串为` a b a b a a ` 求next数组→0 1 1 2 3 4
  - 思考：模式串为` a a a a b `，求next和nextval数组?→0 1 2 3 4；0 0 0 0 4
  - 5 和 7，串 ` a b a b a a a b a b a a ` 的next数组和nextval值为?→011234223456 ；010104210104
  - 9【2019】设主串` a b a a b a a b c a b a a b c ` ，模式串 S = ` a b a a b c `，采用KMP算法进行模式匹配，到匹配成功时为止，在匹配过程中进行的单个字符间的比较次数是?→10次，abaabc的next数组为 0 1 1 2 2 3，开始匹配到主串的第六个字符a时匹配失败，然后 j = next[j] = 3，继续比较当前值，匹配成功，共10次 -->
