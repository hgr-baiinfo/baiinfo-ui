<template>
  <div class="top">
    <bi-button-nav
      :list="tabNavList"
      style="padding-left: 20px; box-sizing: border-box"
      :defaultProps="{ value: 'val', label: 'name' }"
      @change="buttonNavChange"
      :customStyle="{ width: '98px' }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabNavList: [
        { name: "周报", val: "week" },
        { name: "月报", val: "month" },
        { name: "年报", val: "year" },
        { name: "我的报告", val: "user" },
      ],
    };
  },
  methods: {
    buttonNavChange(value, item, index) {
      console.log(value, item, index);
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  height: 200px;
}
</style>