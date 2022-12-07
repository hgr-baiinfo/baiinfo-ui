<template>
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
  >
    <el-menu-item v-for="(item, i) in menuList" :key="i" :index="item.index">
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          icon: "HomeFilled",
          name: "首页",
          index: "/",
        },
        {
          icon: "Demo",
          name: "Demo",
          index: "/demo",
        },
        {
          icon: "card",
          name: "card",
          index: "/card",
        },
        {
          icon: "Button",
          name: "按钮",
          index: "/button",
        },
        {
          icon: "Button-tab",
          name: "按钮tab",
          index: "/button-tab",
        },
        {
          icon: "Button-nav",
          name: "按钮nav",
          index: "/button-nav",
        },
        {
          icon: "NewsDialog",
          name: "新闻内容弹窗",
          index: "/news-dialog",
        },
        {
          icon: "Utils",
          name: "工具函数",
          index: "/utils",
        },
        {
          icon: "Empty",
          name: "暂无数据",
          index: "/empty",
        },
        {
          icon: "MessageBox",
          name: "弹框提示",
          index: "/message-box",
        },
      ],
      router: true,
      defaultActive: "",
    };
  },
};
</script>
