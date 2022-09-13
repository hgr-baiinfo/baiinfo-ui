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
        <span>{{ dialogInfo[defaultProps.source] }}</span>
        <span>{{ dialogInfo[defaultProps.addTime] }}</span>
        <span>{{ dialogInfo[defaultProps.keywords] }}</span>
      </div>
      <div class="right">
        {{ dialogInfo[defaultProps.browseCount] }}&nbsp;&nbsp;阅读
      </div>
    </div>
    <div class="dialog-content">
      <div class="title">
        <span>{{ dialogInfo[defaultProps.newsTitle] }}</span>
        <img
          :src="collectionSrc"
          alt=""
          class="star"
          @click="toggleCollection(dialogInfo)"
        />
      </div>
      <p class="content" v-html="dialogInfo[defaultProps.content]"></p>
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
import { collection, collectionActive } from "../assets/img.js";
export default {
  name: "bi-news-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          newsTitle: "newsTitle",
          isCollection: "isCollection",
          source: "source",
          browseCount: "browseCount",
          addTime: "addTime",
          content: "content",
          newsIdUp: "newsIdUp",
          newsTitleUp: "newsTitleUp",
          newsIdDown: "newsIdDown",
          newsTitleDown: "newsTitleDown",
        };
      },
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
    prop: "show",
    event: "close",
  },
  computed: {
    preText() {
      let res = this.dialogInfo[this.defaultProps.newsTitleUp];
      return res ? res : "无";
    },
    nextText() {
      let res = this.dialogInfo[this.defaultProps.newsTitleDown];
      return res ? res : "无";
    },
    collectionSrc() {
      let res = collection;
      if (this.dialogInfo[this.defaultProps.isCollection]) {
        res = collectionActive;
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
      this.dialogInfo[this.defaultProps.isCollection] =
        !this.dialogInfo[this.defaultProps.isCollection];
      this.$emit(
        "collection",
        this.dialogInfo[this.defaultProps.isCollection],
        dialogInfo
      );
    },
  },
};
</script>