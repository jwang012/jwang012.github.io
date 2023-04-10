import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  // { text: "读书笔记", icon: "read", link: "https://www.anango.cn/reading/" },
  // 指定显示页面
  {
    text: "🧰 商业模式",
    icon: "",
    prefix: "/business/",
    link: "",
    collapsible: true,
    children: "structure",

  },
  {
    text: "🌐 个人感悟",
    icon: "",
    prefix: "/personal/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🏗️ 创业指南",
    icon: "",
    prefix: "/guide/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🚀 创业论坛",
    icon: "",
    prefix: "/forum/",
    link: "",
    collapsible: true,
    children: "structure"
  },
  {
    text: "🐋 创业工具",
    icon: "",
    prefix: "/tools/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🪟 案例研究",
    icon: "",
    prefix: "/caseStudy/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "🛖 自我管理",
    icon: "",
    prefix: "/selfManagement/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "博客文章",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  },
]);
