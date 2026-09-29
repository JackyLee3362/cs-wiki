# 计算机知识库

[访问知识库网站](https://wiki.jackylee.top) · [GitHub 项目](https://github.com/jackylee3362/cs-wiki)

使用官方 create-docusaurus classic JavaScript 模板初始化，基于 Docusaurus 3.10.2。

## 本地开发

推荐 Node.js 24（与 CI 一致）。

```sh
npm ci
npm start
```

默认地址：http://localhost:3000。依赖版本由 package-lock.json 固定，使用 npm ci 安装。

```sh
npm test
npm run build
npm run serve
```

构建产物在 build/。开发模式显示草稿，生产构建排除 draft: true 的文档。

本地查看生产构建：`npm run serve -- --host 127.0.0.1 --port 3000 --no-open`。浏览器访问 http://127.0.0.1:3000/。

## 内容维护

主页位于 src/pages/index.jsx，全宽 banner 由正弦与余弦函数实时绘制变化曲面，标题与“进入知识库”按钮叠在上方；动画尊重系统减少动态效果的设置，也可手动播放。原文档首页保留在 /overview/。搜索入口位于顶部导航栏最右侧，点击或使用 Ctrl+K 打开浮层，支持中文、英文；生产构建后运行 npm run serve 验证搜索。搜索不索引被排除的草稿。

- docs/：原 pages/ 的全部内容，保留目录结构，正文双链已迁移为标准 Markdown 链接。
- cache/：保持原样，不参与站点构建。
- sidebars.js：按目录自动生成侧边栏。
- docusaurus.config.js：中文站点、根路径文档、数学公式与 Mermaid 配置。
- plugins/remark-project-links.mjs：让 Docusaurus 解析以项目根目录为基准的 docs/ 链接。
- link-migration-report.json：无法唯一定位目标的链接及候选文件，供人工核对。

文档内链接统一使用 `[名称](docs/目录/文件.md)`，标题锚点使用 `[名称](docs/目录/文件.md#标题)`。笔记嵌入转为跳转链接，不内嵌正文。代码块、行内代码和模板示例中的双链保持原样。

迁移时优先按当前目录、文档根目录解析，再匹配唯一的路径后缀。缺失或歧义引用也转为标准链接，记录在检查报告中。构建时将 docs/ 路径转换为 Docusaurus 可解析的文件引用；缺失目标以及生产环境中的草稿目标只显示链接文字，避免生成无效站点导航。

原有 local:// 图片依赖作者电脑上的文件，迁移不会自动补齐。Markdown 链接和图片问题以构建警告报告，站点路由断链仍视为构建错误。

## 部署

.github/workflows/docusaurus.yml 在 PR 中测试并构建。推送到 main 或从 main 手动运行时，将 build/ 部署至现有阿里云 VPS 的 /opt/caddy/site/wiki/。沿用仓库 Secrets：

- ALIYUN_VPS_HOST
- ALIYUN_VPS_USER
- ALIYUN_VPS_SSH_KEY

网站域名为 [wiki.jackylee.top](https://wiki.jackylee.top)。本地迁移不会触发部署。

## 参考资料

- [cs-wiki 网站](http://wiki.jackylee.fun) #todo
- [Docusaurus 安装](https://docusaurus.io/docs/installation)
- [Docusaurus 部署](https://docusaurus.io/docs/deployment)
