---
title: double-entry-generator
description:
date: 2026-09-13
update_date:
draft: true
author: JackyLee
tags:
  - wiki
categories:
comment: true
---

- [deb-sig/double-entry-generator: Rule-based double-entry bookkeeping importer (from Alipay/WeChat/Huobi etc. to Beancount/Ledger).](https://github.com/deb-sig/double-entry-generator)

```sh
# 转换支付宝账单为 Beancount 格式
double-entry-generator translate -p alipay -t beancount alipay_records.csv

# 转换微信账单为 Ledger 格式
double-entry-generator translate -p wechat -t ledger wechat_records.xlsx

# 转换建设银行账单
double-entry-generator translate -p ccb -t beancount ccb_records.xls
```
