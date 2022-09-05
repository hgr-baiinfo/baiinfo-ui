<template>
  <div>
    type == 'default'
    <bi-button-tab :list="tabList" @change="change"/><br/>
    type == 'small'
    <bi-button-tab :list="tabList2" @change="change" type="small"/><br/>
    type == 'primary'
    <br/>
    <bi-button-tab :list="tabList" @change="change" type="primary"/><br/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList:[
        { label: "近一月", value: "first" },
        { label: "近三月", value: "second" },
        { label: "近四月", value: "third" },
      ],
      tabList2:[
        { label: "默认菜单", value: "default" },
        { label: "自选菜单", value: "diy" },
      ]
    };
  },
  methods:{
    change(value,item){
      console.log('item',value,item);
    }
  }
};
</script>
