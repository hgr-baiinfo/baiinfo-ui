<template>
  <span> message-box </span>
</template>
<script>
export default {
  name: "bi-message-box",
  props: {
    debounce: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {},
};
</script>