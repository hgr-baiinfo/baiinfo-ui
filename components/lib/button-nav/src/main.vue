<template>
  <div class="bi-button-nav">
    <el-button
      v-for="(item, index) in list"
      :key="index"
      @click="change(item, index)"
      :class="currentIndex == index ? 'active' : ''"
      :style="customStyle"
      >{{ item[defaultProps["label"]] }}</el-button
    >
  </div>
</template>
<script>
export default {
  name: "bi-button-nav",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultProps: {
      type: Object,
      default() {
        return { label: "label", value: "value" };
      },
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    change(item, index) {
      this.currentIndex = index;
      this.$emit("change", item[this.defaultProps["value"]], item, index);
    },
  },
};
</script>