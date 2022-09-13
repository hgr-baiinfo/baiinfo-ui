<template>
  <span
    :class="['btn', btnType, disabled ? 'disabled' : '']"
    @click="$emit('click')"
  >
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "bi-button",
  props: {
    btnType: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>