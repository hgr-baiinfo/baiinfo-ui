<template>
  <div class="bi-button-tab" :style="{width:width}" >
      <span
              v-for="(item, index) in list"
              :key="index"
              class="tab-item"
              @click="change(item, index)"
              :class="[`${currentIndex == index ? 'current' : 'hovered'}`,`${type}`]"
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
    type:{
      type:String,
      default:'default'
    },
    width:{
      type:String,
      default:'140px'
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
      this.$emit("change", item.value,item);
    },
  },
};
</script>
<style lang="scss" scoped>
.bi-button-tab{
  display: flex;
  justify-content: space-between;
  border-collapse: collapse;
  display: flex;
  justify-content: space-between;
  border-collapse: collapse;
  .tab-item {
    height: 40px;
    line-height: 36px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    cursor: pointer;
    flex: 1;
    padding-left: 4px;
    padding-right: 4px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: #333333;
    box-sizing: border-box;
    border-collapse: collapse;
    border-left: none;
    min-width: 70px;
    background: #fff;
    &:first-of-type {
      border-left: 1px solid #dcdfe6;
    }
  }
  .current {
    background: #c43233;
    color: #fff;
    &:first-of-type {
      border-left: 1px solid #c43233;
    }
  }
  .small{
    height: 30px;
    line-height: 27px;
  }
  .hovered:hover {
    color: #c43233;
    background:#fff;
  }
  .primary.current {
    border:1px solid #C43233;
    background:#FFF8F8;
    color:#C43233;
  }
  .current:first-of-type{
    border-left:none;
  }
  .primary.current:first-of-type{
    border-left:1px solid #C43233;;
  }
}
</style>