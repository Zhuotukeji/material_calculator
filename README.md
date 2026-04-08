# 装修材料计算器

一个帮助用户准确计算装修材料用量的在线工具网站，专为申请 Google AdSense for Search (AFS) 设计。

## 功能特点

- 🎨 **油漆计算器** - 计算墙面油漆用量，包含涂刷遍数和损耗
- 🔲 **瓷砖计算器** - 计算瓷砖数量，支持不同规格和铺贴方式
- 📐 **地板计算器** - 计算地板用量，包含不同铺装方式的损耗
- 📝 **装修知识文章** - 提供专业的装修材料知识和使用指南
- ❓ **常见问题解答** - 回答用户关于装修材料的常见问题
- 🔍 **站内搜索功能** - 快速搜索计算器、文章和问题（AFS 广告位）
- 📄 **完整的法律页面** - 包含关于、联系、隐私政策、免责声明

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **部署**: Vercel
- **SEO**: 完整的 sitemap 和 robots.txt

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署到 Vercel

### 方法 1: 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Zhuotukeji/material_calculator)

### 方法 2: 手动部署

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New Project"
   - 导入 GitHub 仓库 `Zhuotukeji/material_calculator`

3. **配置项目**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（约 2-3 分钟）
   - 获取部署 URL

5. **配置自定义域名（可选）**
   - 在 Vercel 项目设置中添加自定义域名
   - 更新 DNS 记录指向 Vercel

## Google AFS 集成

### 申请 AdSense for Search

1. 确保网站已部署并可访问
2. 访问 [Google AdSense](https://www.google.com/adsense)
3. 申请 AdSense for Search
4. 获取搜索广告代码

### 集成 AFS 广告

编辑 `components/AfsAdUnit.tsx` 文件，替换占位符内容为实际的 AFS 代码：

```tsx
// 示例代码
<script async src="https://cse.google.com/cse.js?cx=YOUR_SEARCH_ENGINE_ID"></script>
<div className="gcse-searchresults-only"></div>
```

## 项目结构

```
material_calculator/
├── app/                          # Next.js App Router 页面
│   ├── page.tsx                  # 首页
│   ├── layout.tsx                # 全局布局和 SEO 元数据
│   ├── sitemap.ts                # 动态生成 sitemap
│   ├── robots.ts                 # robots.txt 配置
│   ├── calculators/              # 计算器页面
│   │   ├── paint/page.tsx
│   │   ├── tile/page.tsx
│   │   └── flooring/page.tsx
│   ├── articles/                 # 文章系统
│   │   ├── page.tsx              # 文章列表
│   │   └── [id]/page.tsx         # 文章详情
│   ├── faq/page.tsx              # 常见问题
│   ├── search/page.tsx           # 搜索结果页（AFS 广告位）
│   ├── about/page.tsx            # 关于我们
│   ├── contact/page.tsx          # 联系我们
│   ├── privacy/page.tsx          # 隐私政策
│   └── disclaimer/page.tsx       # 免责声明
├── components/                   # React 组件
│   ├── Header.tsx                # 导航栏
│   ├── Footer.tsx                # 页脚
│   ├── SearchBar.tsx             # 搜索框
│   ├── AfsAdUnit.tsx             # AFS 广告组件
│   ├── ArticleCard.tsx           # 文章卡片
│   ├── ArticleContent.tsx        # 文章内容
│   └── FaqAccordion.tsx          # FAQ 手风琴
├── content/                      # 内容数据
│   ├── articles.ts               # 文章数据（3篇）
│   ├── faqs.ts                   # FAQ 数据（10个）
│   └── calculators.ts            # 计算器配置
├── lib/                          # 工具函数
│   └── search.ts                 # 搜索逻辑
└── public/                       # 静态资源
```

## SEO 优化

- ✅ 完整的元数据配置
- ✅ Open Graph 标签
- ✅ 动态 sitemap.xml
- ✅ robots.txt 配置
- ✅ 语义化 HTML 结构
- ✅ 移动端响应式设计

## 内容统计

- **计算器**: 3 个（油漆、瓷砖、地板）
- **文章**: 3 篇（可扩展）
- **FAQ**: 10 个（可扩展）
- **页面**: 15+ 个完整页面

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

MIT

## 联系方式

- **邮箱**: support@material-calculator.com
- **GitHub**: [Zhuotukeji/material_calculator](https://github.com/Zhuotukeji/material_calculator)
