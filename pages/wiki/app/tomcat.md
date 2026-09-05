---
title: tomcat
date: 2025-10-21
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 参考资料

Configuration files: /opt/homebrew/etc/tomcat@9

tomcat@9 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have tomcat@9 first in your PATH, run:
echo 'export PATH="/opt/homebrew/opt/tomcat@9/bin:$PATH"' >> ~/.zshrc

To start tomcat@9 now and restart at login:
brew services start tomcat@9
Or, if you don't want/need a background service you can just run:
/opt/homebrew/opt/tomcat@9/bin/catalina run
