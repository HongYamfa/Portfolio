# 韩鑫华 - 个人作品集

基于 [Hugo](https://gohugo.io/) + [Gruvbox 主题](https://github.com/schnerring/hugo-theme-gruvbox) 构建的个人简历与作品集网站。

## 环境要求

- [Hugo Extended](https://gohugo.io/installation/)（必需，主题使用 SCSS）
- [Node.js](https://nodejs.org/) + npm（必需，主题依赖前端资源）
- [Go](https://go.dev/)（Hugo Modules 需要）

## 快速开始

```powershell
# 1. 克隆仓库
git clone --recursive https://github.com/HongYamfa/Portfolio.git
cd Portfolio

# 2. 下载 Hugo 模块依赖
hugo mod get

# 3. 安装 npm 依赖
hugo mod npm pack
npm install

# 4. 本地预览
hugo server -D
```

## 项目结构

```
Portfolio/
├── archetypes/          # 内容模板
├── assets/              # 静态资源
├── content/             # 网站内容
│   ├── _index.md        # 主页
│   ├── about.md         # 关于我
│   └── portfolio/       # 作品集
│       └── _index.md
├── data/                # 数据文件
├── layouts/             # 自定义布局
├── static/              # 静态文件
├── hugo.toml            # Hugo 配置文件
└── go.mod               # Hugo Modules
```

## 导航菜单

- **主页** — `/`
- **作品集** — `/portfolio/`
- **关于我** — `/about/`

## 主题配色

- 主题模式：自动切换（跟随系统暗黑/亮色模式）
- 主题色：blue
- 对比度：medium
