---
title: codex
description:
date: 2026-08-19
update_date: 2026-10-03
draft: true
author: JackyLee
tags:
  - wiki
  - app/gui
categories:
comment: true
---

## Skills 目录

1. 系统内置 skill
   - ~/.codex/skills/.system/

2. 本地 agents skill
   - ~/.agents/skills/

3. 插件缓存里的 bundled skills
   - ~/.codex/plugins/cache/openai-bundled/

4. 插件缓存里的 primary-runtime skills
   - ~/plugins/cache/openai-primary-runtime/

## 远程控制

Remote 让手机或其他设备管理主机上的 Codex 任务，文件与命令仍在主机执行。官方支持 macOS 和 Windows；可用性受功能开放范围与工作区权限影响。

1. 更新桌面与手机应用，在主机「Settings → Connections → Control this Mac or PC」选择「Set up / Add」。
2. 完成账号验证，手机扫描二维码；两端使用同一 ChatGPT 账号与工作区，每台控制设备与主机分别配对。
3. 主机保持在线、唤醒并运行桌面应用；Windows 上执行 Computer Use 还需保持会话解锁。

开启时报错先重启桌面应用再试；仍失败需按具体报错排查账号验证或工作区权限。退出登录会关闭远程控制，重新登录后需再次开启，但原配对保留。上述是官方排障方法，不代表已验证具体故障。

## 查看日志

### CLI（含 Scoop 安装）

安装目录与用户数据目录分开：`Get-Command codex` 查看程序入口；日志默认位于 `$CODEX_HOME/log/`，未设置 `CODEX_HOME` 时为 `%USERPROFILE%\.codex\log\`。配置中的 `log_dir` 可覆盖此位置。

```powershell
Get-Command codex | Select-Object Source
$codexRoot = if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE '.codex' }
Select-String -Path (Join-Path $codexRoot 'config.toml') -Pattern '^\s*log_dir\s*='
Get-ChildItem -LiteralPath (Join-Path $codexRoot 'log') -ErrorAction SilentlyContinue
```

当前官方文档说明明文 `codex-tui.log` 需显式启用；目录或文件不存在不代表安装失败，旧版本行为可能不同。临时启用并复现问题：

```powershell
codex -c log_dir=./.codex-log
```

在同一工作目录的另一个 PowerShell 窗口查看：

```powershell
Get-Content -LiteralPath ./.codex-log/codex-tui.log -Tail 100 -Wait
```

以上用于交互式 CLI；`codex exec` 的诊断直接输出，不使用独立 TUI 日志。

### 桌面应用与会话记录

| 类型 | 位置 |
| --- | --- |
| Windows 桌面应用日志 | `%LOCALAPPDATA%\Codex\Logs\YYYY\MM\DD\`（本机安装已核实） |
| macOS 桌面应用日志 | `~/Library/Logs/com.openai.codex/YYYY/MM/DD/`（官方文档） |
| 会话记录 | `$CODEX_HOME/sessions/`，默认 `~/.codex/sessions/` |
| 已归档会话 | `$CODEX_HOME/archived_sessions/`，默认 `~/.codex/archived_sessions/` |

Windows 按 `Win+R`，输入 `%LOCALAPPDATA%\Codex\Logs`，进入对应日期目录，用文本编辑器打开 `.log`。远程控制、连接和应用异常先看桌面日志；对话与工具调用内容看会话记录。

PowerShell 查看当天最后更新的日志，并持续跟踪新增内容；`Ctrl+C` 停止：

```powershell
$logFolder = Join-Path $env:LOCALAPPDATA ('Codex/Logs/' + (Get-Date -Format 'yyyy/MM/dd'))
$latestLog = Get-ChildItem -LiteralPath $logFolder -File -Filter '*.log' |
    Sort-Object LastWriteTime -Descending | Select-Object -First 1
if ($latestLog) { Get-Content -LiteralPath $latestLog.FullName -Tail 100 -Wait }
```

同一天可能有多个进程日志和轮转文件，最新一个未必包含目标错误。按关键词搜索当天全部日志：

```powershell
Get-ChildItem -LiteralPath $logFolder -File -Filter '*.log' |
    Select-String -Pattern 'remoteControl|remote.control|warning|error'
```

日志中的 `errorCode=null` 只表示该条请求没有记录错误码，不能证明远程连接成功。分享日志前删除令牌、配对码和私有路径；知识库只保留查看方法。

## 参考资料

- [Codex 官网](https://developers.openai.com/learn/codex)
- [Codex 源码](https://github.com/openai/codex)
- [远程连接官方文档](https://learn.chatgpt.com/docs/remote-connections)
- [官方排障与日志位置](https://learn.chatgpt.com/docs/reference/troubleshooting)
- [CODEX_HOME 环境变量](https://learn.chatgpt.com/docs/config-file/environment-variables)
- [CLI 日志目录配置](https://learn.chatgpt.com/docs/config-file/config-basic#log-directory)
