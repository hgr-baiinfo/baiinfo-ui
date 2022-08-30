<template>
  <div class="bi-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="bi-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="bi-card-summary">
      {{ summary }}
    </div>
    <div v-else class="bi-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
// 卡片组件
export default {
  name: "bi-card",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>