<template>
  <div v-if="visible">
    <el-dialog
      class="bi-news-dialog"
      :visible.sync="dialogVisible"
      width="68%"
      :show-close="false"
      center
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
            下一篇：<span @click="link('next', dialogInfo)">{{
              nextText
            }}</span>
          </p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "bi-news-dialog",
  props: {
    visible: {
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
  },
  watch: {
    visible: {
      handler(val) {
        this.dialogVisible = val;
      },
      immediate: true,
    },
    dialogVisible: {
      handler(val) {
        console.log("---oldv", val);
        this.$emit("update:visible", val);
      },
      immediate: true,
    },
  },
  methods: {
    close() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
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