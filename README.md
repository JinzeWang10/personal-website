# Jinze Wang - Personal Website 🚀

一个现代化、极简风格、科技感十足的个人网站，使用 React + TypeScript + Tailwind CSS 构建。

## ✨ 特性

- 🎨 **现代化设计** - 极简且有科技感的UI设计
- 🌓 **暗色/亮色模式** - 支持主题切换，自动保存用户偏好
- 📱 **完美响应式** - 适配所有设备尺寸
- ⚡ **流畅动画** - 使用 Framer Motion 实现丝滑的动画效果
- 🎯 **性能优化** - 使用 Vite 构建，快速加载
- 💎 **TypeScript** - 类型安全，更好的开发体验

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 📦 安装与运行

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📂 项目结构

```
new-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # 导航栏（含主题切换）
│   │   ├── Hero.tsx         # 首页英雄区
│   │   ├── About.tsx        # 关于我
│   │   ├── Experience.tsx   # 经验时间线
│   │   ├── Projects.tsx     # 项目展示
│   │   ├── Skills.tsx       # 技能展示
│   │   ├── Contact.tsx      # 联系方式
│   │   └── Footer.tsx       # 页脚
│   ├── App.tsx              # 主应用组件
│   ├── index.css            # 全局样式
│   └── main.tsx             # 应用入口
├── tailwind.config.js       # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
└── vite.config.ts           # Vite 配置
```

## 🎨 自定义内容

### 修改个人信息

编辑各个组件文件来更新你的个人信息：

- **[Hero.tsx](src/components/Hero.tsx)** - 修改标题和简介
- **[About.tsx](src/components/About.tsx)** - 更新关于我的内容
- **[Experience.tsx](src/components/Experience.tsx)** - 添加/修改工作经验
- **[Projects.tsx](src/components/Projects.tsx)** - 展示你的项目
- **[Skills.tsx](src/components/Skills.tsx)** - 更新技能列表
- **[Contact.tsx](src/components/Contact.tsx)** - 修改联系方式

### 修改颜色主题

在 [tailwind.config.js](tailwind.config.js) 中修改主题颜色：

```js
theme: {
  extend: {
    colors: {
      primary: {
        // 自定义主色调
      },
    },
  },
}
```

### 添加照片

将你的照片放在 `public/` 文件夹中，然后在组件中引用：

```tsx
<img src="/your-photo.jpg" alt="Your Name" />
```

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的 GitHub 仓库
4. 部署完成！

### Netlify

1. 构建项目：`npm run build`
2. 将 `dist` 文件夹上传到 Netlify
3. 或连接 GitHub 仓库自动部署

### GitHub Pages

```bash
# 安装 gh-pages
npm install -D gh-pages

# 在 package.json 中添加部署脚本
{
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}

# 部署
npm run deploy
```

## 📝 待办事项

- [ ] 添加个人照片
- [ ] 更新项目截图
- [ ] 添加更多项目详情
- [ ] 创建博客功能
- [ ] 添加多语言支持

## 🤝 贡献

欢迎提出建议和改进！

## 📄 许可证

MIT License - 随意使用这个模板创建你自己的个人网站！

## 💬 联系方式

- **Email**: wjz000414@gmail.com
- **GitHub**: [@JinzeWang10](https://github.com/JinzeWang10)
- **LinkedIn**: [Jinze Wang](https://www.linkedin.com/in/jinze-wang-855498251/)

---

⭐ 如果你觉得这个项目有帮助，请给它一个星标！
