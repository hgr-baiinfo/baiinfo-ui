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
          name: "按钮1",
          index: "/demo",
        },
        {
          icon: "card",
          name: "card",
          index: "/card",
        },
        {
          icon: "Button",
          name: "按钮2",
          index: "/button",
        },
      ],
      router: true,
      defaultActive: "",
    };
  },
};
</script>
