import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "商业模式",
    icon: "code",
    prefix: "/",
    children: [
    ],
  },
  {
    text: "创业指南",
    icon: "app",
    prefix: "/",
    children: [

    ],
  },
  {
    text: "自我管理",
    icon: "emmet",
    prefix: "/selfManagement/",
    children: [],
  },
  {
    text: "Contact",
    icon: "advance",
    children: [
      { text: "微信", icon: "wechat", link: "https://images-1259217603.cos.ap-guangzhou.myqcloud.com/WechatIMG27.jpeg" },
      // { text: "Discord", icon: "group", link: "https://discord.gg/PZTQfJ4GjX" },
      // { text: "RSS", icon: "rss", link: "https://www.anango.cn/rss.xml" },
    ],
  },
  // { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
