# 装修材料计算器

一个帮助用户准确计算装修材料用量的在线工具网站。

## 功能特点

- 🎨 油漆计算器 - 计算墙面油漆用量
- 🔲 瓷砖计算器 - 计算瓷砖数量和损耗
- 📐 地板计算器 - 计算地板用量
- 📝 装修知识文章
- ❓ 常见问题解答
- 🔍 站内搜索功能

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Zhuotukeji/material_calculator)

### 手动部署

1. 推送代码到 GitHub
2. 在 Vercel 导入仓库
3. 点击部署

## 项目结构

```
material_calculator/
├── app/                    # Next.js App Router 页面
├── components/             # React 组件
├── content/               # 内容数据文件
│   ├── articles.ts        # 文章数据
│   ├── faqs.ts           # FAQ 数据
│   └── calculators.ts    # 计算器配置
├── lib/                   # 工具函数
└── public/               # 静态资源
```

## License

MIT
