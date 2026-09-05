---
title: VSCode Material Icon Theme
date: 2026-01-15
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
  - 插件
categories:
  - 编辑器工具
comment: true
---

仓库

- [GitHub - material-extensions/vscode-material-icon-theme: Material Design icons for VS Code](https://github.com/material-extensions/vscode-material-icon-theme)

## 改变文件夹颜色

```json
{
  // 改变文件夹颜色
  "material-icon-theme.folders.color": "#ef5350",
  "material-icon-theme.files.color": "#42a5f5",
  // 改变透明度
  "material-icon-theme.opacity": 0.5,
  // 改变饱和度
  "material-icon-theme.saturation": 0.5,
  // 链接文件类型
  "material-icon-theme.files.associations": {
    "*.ts": "typescript",
    "**.json": "json",
    "fileName.ts": "angular"
  },
  // 更改文件模板
  // ...
  // 链接文件夹类型
  "material-icon-theme.folders.associations": {
    "customFolderName": "src",
    "sample": "dist"
  }
  // 更改文件夹模板
  // ...
}
```

## 自定义文件夹图标

- [自定义图标](https://github.com/material-extensions/vscode-material-icon-theme?tab=readme-ov-file#folder-icons)

```json
{
  // https://gist.github.com/rupeshtiwari/6860fbc1b3e2f6711c780070d6f59748
  "material-icon-theme.folders.associations": {
    "app.article": "App"
  },
  "material-icon-theme.folders.customClones": [
    {
      "name": "dev.child",
      "base": "src",
      "color": "blue-500",
      "folderNames": ["dev.article"]
    }
  ]
}
```

## 参考资料

- [vscode-material-icon-theme/icons at main · material-extensions/vscode-material-icon-theme](https://github.com/material-extensions/vscode-material-icon-theme/tree/main/icons)
