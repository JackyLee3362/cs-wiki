---
title: claude
alias:
  - claude-code
date: 2026-05-04
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## vscode 接入 Claude Code + DeepSeek

- [接入 Agent 工具 | DeepSeek API Docs](https://api-docs.deepseek.com/zh-cn/guides/coding_agents)
- [Claude Code 接入 DeepSeek 完整指南-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2653743)

```json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "你的API TOKEN",
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_SUBAGENT_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "max"
  },
  "permissions": {
    "allow": [],
    "deny": []
  },
  "alwaysThinkingEnabled": false
}
```

## skill 能力

- 用户全局目录: `~/.claude/skills`
- 项目级目录: `<project>/.claude/skills`
- 插件目录: `~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/skills/`
- 内置的 skill

优先级为 项目级 > 用户全局 > 插件 > 内置

## FAQ

### 插件系统和 skill 有什么区别？



## 参考资料
