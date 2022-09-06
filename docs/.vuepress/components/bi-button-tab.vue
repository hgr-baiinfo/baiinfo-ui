<template>
  <el-radio-group
      v-model="radioValue"
      class="bi-btn-tabs"
      :size="size"
      :class="{ border: border }"
  >
    <el-radio-button
        :label="item.label"
        v-for="(item, index) in list"
        :key="index"
    ></el-radio-button>
  </el-radio-group>
</template>
<script>

export default {
  name: "bi-button-tab",
  model: {
    prop: "radio",
    event: "change",
  },
  data() {
    return {
      radioValue: "",
    };
  },
  watch: {
    radio: {
      handler(val) {
        this.radioValue = val;
      },
      immediate: true,
      deep: true,
    },
    radioValue: {
      handler(val) {
        this.change(val);
      },
      immediate: true,
      deep: true,
    },
  },
  props: {
    radio: {
      type: [String, Number],
      default: "",
    },
    valueProps: {
      type: String,
      default: "label",
    },
    size: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    change(val) {
      let obj = this.list.find((item) => item.label == val);
      this.$emit("change", val, obj);
    },
  },
};
</script>
<style lang="scss">
.bi-btn-tabs .el-radio-button:first-child .el-radio-button__inner{
  border-radius:0;
}
.bi-btn-tabs .el-radio-button:last-child .el-radio-button__inner{
  border-radius:0;
}
.bi-btn-tabs .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  color: #FFF;
  background-color: #c43233;
  border-color: #c43233;
  box-shadow: -1px 0 0 0 #c43233;
}
.bi-btn-tabs .el-radio-button__inner:hover{
  color:#c43233;
}
.bi-btn-tabs.border .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  color: #c43233;
  background-color: #fff8f8;
  border-color: #c43233;
  box-shadow: -1px 0 0 0 #c43233;
}
</style>