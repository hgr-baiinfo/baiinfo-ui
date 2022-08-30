<template>
  <div class="header">
    <span @click="toggle">
      <i class="el-icon-s-unfold" v-if="collapse"></i>
      <i class="el-icon-s-fold" v-else></i>
    </span>
  </div>
</template>
<script>
export default {
  props: ["collapse"],
  methods: {
    toggle() {
      this.$emit("change", !this.collapse);
    },
  },
  model: {
    prop: "collapse",
    event: "change",
  },
};
</script>
