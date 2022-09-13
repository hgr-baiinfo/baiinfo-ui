module.exports = {
  title: "baiinfo-ui",
  description: "baiinfo-ui",
  base: "/baiinfo-ui/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Github", link: "https://github.com/hgr-baiinfo/baiinfo-ui" },
      { text: "VuePress", link: "https://vuepress.vuejs.org/" },
    ],
    sidebar: [
      "/",
      "/componentDocs/card",
      "/componentDocs/button",
      "/componentDocs/buttonTab",
      "/componentDocs/buttonNav",
      "/componentDocs/newsDialog",
    ],
  },
  chainWebpack(config) {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
