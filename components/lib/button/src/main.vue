<template>
  <span
    :class="['btn', btnType, disabled ? 'disabled' : '']"
    @click="clickBtn"
    v-loading="loading"
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
    debounce:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      loading:false
    }
  },
  methods:{
    clickBtn(){
      if(this.debounce){
        this.loading = true;
        setTimeout(()=>{
          this.loading = false;
        },1000000)
      }
      this.$emit('click')
    }
  }
};
</script>