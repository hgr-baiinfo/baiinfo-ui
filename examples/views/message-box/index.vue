<template>
  <div>
    <div class="click-btn" @click="open">点击打开MessageBox</div>
    <div class="click-btn" @click="open2">点击打开MessageBox2</div>
    <div class="click-btn" @click="open3">点击打开MessageBox3,无回调</div>
  </div>
</template>
<script>
import baiinfoUi2 from "baiinfo-ui2";
export default {
  mounted() {
    console.log(baiinfoUi2);
  },
  methods: {
    open() {
      this.$biMessageBox("这是一段内容1,标题名称")
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    open2() {
      this.$biMessageBox("这是一段内容1,标题名称", {
        callback: (action) => {
          console.log("action", action);
        },
      });
    },
    open3() {
      this.$biMessageBox("这是一段内容1,标题名称");
    },
  },
};
</script>
<style lang="scss">
.click-btn {
  color: #409eff;
  cursor: pointer;
}
</style>