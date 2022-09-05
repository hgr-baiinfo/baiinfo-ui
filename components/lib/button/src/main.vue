<template>
  <span :class="['btn',btnType,disabled?'disabled':'']">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "bi-button",
  props:{
    btnType:{
      type:String,
      default:'default'
    },
    disabled:{
      type:Boolean,
      default:false
    }
  }
};
</script>
<style>
.btn{
  display:inline-block;
  border:1px solid #DCDFE6;
  font-size:14px;
  text-align:center;
  color:#606266;
  cursor: pointer;
}
.dialog-btn{
  min-width:90px;
  height:36px;
  line-height: 36px;
}
.dialog-btn:hover{
  border-color:#C43233;
  background-color:#FFF8F8;
  color:#C43233;
}
.default{
  min-width:98px;
  height: 40px;
  line-height: 40px;
}
.default:hover{
  border-color:#C43233;
  background-color:#FFF8F8;
  color:#C43233;
}
.disabled,.disabled:hover{
  color:#DCDFE6;
  background:#F7F7F7;
  border-color:#DCDFE6;
}
.primary{
  background:#C43233;
  color:#fff;
  border-color:#C43233;
  min-width:90px;
  height: 36px;
  line-height: 36px;
}
.primary:hover{
  background:#d33e3f;
}
.primary.disabled,.primary.disabled:hover{
  background:#EABDBE;
  border-color:#EABDBE;
  color:#fff;
}
</style>
