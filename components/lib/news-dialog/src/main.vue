<template>
  <el-dialog
    class="bi-news-dialog"
    :visible.sync="dialogVisible"
    width="68%"
    :show-close="false"
    center
    v-if="dialogVisible"
    :before-close="beforeClose"
  >
    <div v-loading="loading">
      <div class="dialog-header">
        <div class="left">
          <span>{{ dialogInfo[mergedProps.source] }}</span>
          <span>{{ dialogInfo[mergedProps.addTime] }}</span>
          <span>{{ dialogInfo[mergedProps.keywords] }}</span>
        </div>
        <div class="right">
          <span v-if="showCount && dialogInfo[mergedProps.browseCount]"
            >{{ dialogInfo[mergedProps.browseCount] }}&nbsp;&nbsp;阅读</span
          >
          <img :src="closeImg" alt="" class="close-img" @click="close" />
        </div>
      </div>
      <div class="dialog-content">
        <div class="title">
          <span v-html="dialogInfo[mergedProps.newsTitle]"></span>
          <span class="operation">
            <img
              :src="shareImg"
              class="share"
              v-if="showShare"
              @click="shareFn"
            />
            <img
              :src="collectionSrc"
              alt=""
              v-if="showCollection"
              class="star"
              @click="toggleCollection(dialogInfo)"
            />
          </span>
        </div>
        <div class="content">
          <div ref="content" v-html="dialogInfo[mergedProps.content]"></div>
        </div>
      </div>
      <div class="dialog-footer">
        <p class="tips">声明：信息仅供参考，据此操作责任自负</p>
        <div class="close-btn"><span @click="close">关闭</span></div>
        <div class="pre-next" v-if="showPreAndNext">
          <p class="link" :class="{ gray: preText == '无' }">
            上一篇：<span @click="link('pre', dialogInfo)">{{ preText }}</span>
          </p>
          <p class="link" :class="{ gray: nextText == '无' }">
            下一篇：<span @click="link('next', dialogInfo)">{{
              nextText
            }}</span>
          </p>
        </div>
        <div v-else class="footer-placeholder"></div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import {
  collection,
  collectionActive,
  closeImg,
  shareImg,
} from "../assets/img.js";
import debounce from "lodash/debounce";
let self;
export default {
  name: "bi-news-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    defaultProps: {
      type: Object,
      default() {
        return {};
      },
    },
    dialogInfo: {
      type: Object,
      default() {
        return {
          newsTitle: "",
          isCollection: false,
          keywords: "",
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
    showPreAndNext: {
      type: Boolean,
      default: true,
    },
    showCollection: {
      type: Boolean,
      default: true,
    },
    showShare: {
      type: Boolean,
      default: false,
    },
    showCount: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: "show",
    event: "close",
  },
  created() {
    self = this;
  },
  watch: {
    loading: {
      handler(val) {
        if (!val) {
          if (this.$refs.content) {
            this.$refs.content.scrollIntoView(true);
          }
        }
      },
      immediate: true,
    },
  },
  computed: {
    preText() {
      let res = this.dialogInfo[this.mergedProps.newsTitleUp];
      return res ? res : "无";
    },
    nextText() {
      let res = this.dialogInfo[this.mergedProps.newsTitleDown];
      return res ? res : "无";
    },
    collectionSrc() {
      let res = collection;
      if (this.dialogInfo[this.mergedProps.isCollection]) {
        res = collectionActive;
      }
      return res;
    },
    mergedProps() {
      return Object.assign(
        {
          newsTitle: "newsTitle",
          isCollection: "isCollection",
          source: "source",
          keywords: "keywords",
          browseCount: "browseCount",
          addTime: "addTime",
          content: "content",
          newsIdUp: "newsIdUp",
          newsTitleUp: "newsTitleUp",
          newsIdDown: "newsIdDown",
          newsTitleDown: "newsTitleDown",
        },
        this.defaultProps
      );
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
  data() {
    return {
      closeImg,
      shareImg,
    };
  },
  methods: {
    beforeClose() {
      this.$emit("close", false);
    },
    close() {
      this.dialogVisible = false;
    },
    link: debounce((type, info) => {
      let obj = {};
      if (type == "pre") {
        obj = {
          id: info.newsIdUp,
          newsIdUp: info.newsIdUp,
          newsTitleUp: info.newsTitleUp,
        };
      }
      if (type == "next") {
        obj = {
          id: info.newsIdDown,
          newsIdUp: info.newsIdDown,
          newsTitleUp: info.newsTitleDown,
        };
      }
      self.$emit("change", type, obj);
    }, 100),
    shareFn() {
      this.$emit("share", this.dialogInfo);
    },
    toggleCollection: debounce((dialogInfo) => {
      self.dialogInfo[self.mergedProps.isCollection] =
        !self.dialogInfo[self.mergedProps.isCollection];
      self.$emit(
        "collection",
        self.dialogInfo[self.mergedProps.isCollection],
        dialogInfo
      );
    }, 200),
  },
};
</script>
