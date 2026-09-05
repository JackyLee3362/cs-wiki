---
title: Trie
date: 2023-01-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 算法
  - 数据结构
categories:
  - 计算机科学
comment: true
---

## 参考资料

# 字典树

首先是 Leetcode208 题 字典树

```python
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False

    def insert(self, word: str) -> None:
        node = self
        for ch in word:
            ch = ord(ch) - ord('a')
            if not node.children[ch]:
                node.children[ch] = Trie()
            node = node.children[ch]
        node.isEnd = True

    def searchPrefix(self, word: str) -> Trie | None:
        node = self
        for ch in word:
            ch = ord(ch) - ord('a')
            if not node.children[ch]:
                return None
            node = node.children[ch]
        return node

    def search(self, word: str) -> bool:
        node = self.searchPrefix(word)
        return node is not None and node.isEnd


    def startsWith(self, prefix: str) -> bool:
        node = self.searchPrefix(prefix)
        return node is not None
```

然后是 2023 年每日一题 1803

```python

```
