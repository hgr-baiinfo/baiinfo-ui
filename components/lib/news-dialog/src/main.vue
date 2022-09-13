<template>
  <el-dialog
    class="bi-news-dialog"
    :visible.sync="dialogVisible"
    width="68%"
    :show-close="false"
    center
    :before-close="beforeClose"
  >
    <div class="dialog-header">
      <div class="left">
        <span>{{ dialogInfo.source }}</span>
        <span>{{ dialogInfo.addTime }}</span>
        <span>{{ dialogInfo.keywords }}</span>
      </div>
      <div class="right">{{ dialogInfo.browseCount }}&nbsp;&nbsp;阅读</div>
    </div>
    <div class="dialog-content">
      <div class="title">
        <span>{{ dialogInfo.newsTitle }}</span>
        <img
          :src="collectionSrc"
          alt=""
          class="star"
          @click="toggleCollection(dialogInfo)"
        />
      </div>
      <p class="content" v-html="dialogInfo.content"></p>
    </div>
    <div class="dialog-footer">
      <p class="tips">声明：信息仅供参考，据此操作责任自负</p>
      <div class="close-btn"><span @click="close">关闭</span></div>
      <div class="pre-next">
        <p class="link" :class="{ gray: preText == '无' }">
          上一篇：
          <span @click="link('pre', dialogInfo)">{{ preText }}</span>
        </p>
        <p class="link" :class="{ gray: nextText == '无' }">
          下一篇：<span @click="link('next', dialogInfo)">{{ nextText }}</span>
        </p>
      </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "bi-news-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    dialogInfo: {
      type: Object,
      default() {
        return {
          newsTitle: "",
          isCollection: false,
          source: "",
          browseCount: "",
          addTime: "",
          content: "",
          newsIdUp: "",
          newsTitleUp: "",
          newsIdDown: "",
          newsTitleDown: "",
        };
      },
    },
  },
  model: {
    prop: "show", // 设置对应v-model的属性字段
    event: "close", // 如果不指定默认为input，当$emit该事件，可以自动执行 修改父组件v-model参数的值
  },
  computed: {
    preText() {
      let res = this.dialogInfo.newsTitleUp;
      return res ? res : "无";
    },
    nextText() {
      let res = this.dialogInfo.newsTitleDown;
      return res ? res : "无";
    },
    collectionSrc() {
      let res = require("../assets/collection.png");
      if (this.dialogInfo.isCollection) {
        res = require("../assets/collection-active.png");
      }
      return res;
    },
    dialogVisible: {
      get: function () {
        return this.show;
      },
      set: function (val) {
        this.$emit("close", val);
      },
    },
  },
  methods: {
    beforeClose() {
      this.$emit("close", false);
    },
    close() {
      this.dialogVisible = false;
    },
    link(type, info) {
      this.$emit("change", type, info);
    },
    toggleCollection(dialogInfo) {
      this.dialogInfo.isCollection = !this.dialogInfo.isCollection;
      this.$emit("collection", this.dialogInfo.isCollection, dialogInfo);
    },
  },
};
</script>