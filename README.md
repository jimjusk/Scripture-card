# 金句卡片官网

这是金句卡片 Chrome 扩展的官方网站源代码。

## 项目结构 

website/
├── css/
│ ├── style.css # 主样式文件
│ └── responsive.css # 响应式样式
├── images/
│ ├── favicon.svg # 网站图标
│ ├── feature-1.svg # 功能图标 - 多种模板
│ ├── feature-2.svg # 功能图标 - 自由定制
│ ├── feature-3.svg # 功能图标 - 便捷分享
│ ├── preview.png # 扩展预览图
│ └── social-card.png # 社交分享卡片
├── downloads/
│ └── jingjukapian.zip # 扩展安装包
├── js/
│ └── main.js # 主脚本文件
├── index.html # 主页面
└── site.webmanifest # PWA 配置文件


## 开发说明

这是一个纯静态网站，使用了以下技术：
- HTML5
- CSS3
- 原生 JavaScript
- SVG 图标

## 本地开发

1. 克隆仓库：

bash
git clone https://github.com/your-username/scripture-card-website.git
cd scripture-card-website

2. 使用本地服务器运行（任选其一）：

bash
使用 Python
python -m http.server 8000
或使用 Node.js 的 http-server
npx http-server


3. 在浏览器中访问 `http://localhost:8000`

## 部署

网站使用 Vercel 自动部署：
1. 推送代码到 GitHub
2. Vercel 会自动检测更新并重新部署

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支：`git checkout -b feature/AmazingFeature`
3. 提交你的更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 许可证

[MIT](LICENSE)