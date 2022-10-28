<template>
  <div style="min-height:100px;">
    <el-row>
      <el-col :span="2">数字千分位</el-col>
    </el-row>
    <el-col :span="4">
      <el-input v-model="formData.money"></el-input>
    </el-col>
    <el-col :span="4">
      <el-input v-model="moneyDesc" disabled></el-input>
    </el-col>
  </div>
</template>
<script>
// import baiinfoUi2 from "baiinfo-ui2";
export default {
  data() {
    return {
      formData:{
        money:'',
        moneyDesc:''
      }
    };
  },
  computed:{
    moneyDesc(){
      let res = '';
      // console.log('Number(this.formData.money)',Number(this.formData.money))
      if(Number(this.formData.money)){
        // return baiinfoUi2.utils.formatNumber(this.formData.money);
        return this.$utils.formatNumber(this.formData.money)
      }
      return res;
    }
  }
};
</script>