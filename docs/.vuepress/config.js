

const nav = [
  { text: "时间线", link: "/timeline/", icon: "reco-date" },
];

module.exports = {
  title: "💯零食杂货",
  description: "各种好吃的零食, 满足你的胃, 一天好心情",
  dest: "public",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    type: "blog", //选择类型博客
    author: "Mr.L",
    authorAvatar: "/avatar.jpg",
    mode: "light",
    modePicker: false,
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    valineConfig: {
      appId: "k3eGSbXaV6KFc8i6qe4ugLXo-MdYXbMMI", // your appId
      appKey: "IzrQqHM5YEhiNGOCEuAmEitd", // your appKey
    },
    nav
  },
  markdown: {
    lineNumbers: true,
    // markdown 插件
    extendMarkdown: (md) => {
      md.set({ html: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
    },
  },
  plugins: [
    ["flowchart"], // 支持流程图
    "@vuepress-reco/extract-code",
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-reco-content img",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "nest",
      {
        color: "139,56,240", // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
        pointColor: "0,0,0", // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
        opacity: 0.5, // the opacity of line (0~1), default: 0.5.
        count: 99, // the number of lines, default: 99.
        zIndex: -1, // z-index property of the background, default: -1.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
  ],
};
