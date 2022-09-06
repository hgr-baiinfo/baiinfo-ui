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
    width: {
      type: String,
      default: "140px",
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