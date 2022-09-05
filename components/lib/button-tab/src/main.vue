<template>
  <div class="bi-button-tab" :style="{ width: width }">
    <span
      v-for="(item, index) in list"
      :key="index"
      class="tab-item"
      @click="change(item, index)"
      :class="[`${currentIndex == index ? 'current' : 'hovered'}`, `${type}`]"
    >
      {{ item.label }}
    </span>
  </div>
</template>
<script>
export default {
  name: "bi-button-tab",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    type: {
      type: String,
      default: "default",
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
    change(item, index) {
      this.currentIndex = index;
      this.$emit("change", item.value, item);
    },
  },
};
</script>