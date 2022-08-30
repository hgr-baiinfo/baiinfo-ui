<template>
  <el-container>
    <el-aside>
      <nav-side v-model="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model="isCollapse"></nav-header>
      </el-header>
      <el-main> <router-view></router-view> </el-main
    ></el-container>
  </el-container>
</template>
<script>
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";
export default {
  components: { NavHeader, NavSide },
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>
<style>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
