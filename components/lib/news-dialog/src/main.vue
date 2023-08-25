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
        <div class="left gray">
          {{ dialogInfo[mergedProps.category] }}
        </div>
        <div class="right">
          <img :src="closeImg" alt="" class="close-img" @click="close" />
        </div>
      </div>
      <div class="dialog-content">
        <div class="content-top">
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
          <div class="source">
            <span>来源：{{ dialogInfo[mergedProps.source] }}</span>
            <span>更新时间：{{ dialogInfo[mergedProps.addTime] }}</span>
            <span>关键词：{{ dialogInfo[mergedProps.keywords] }}</span>
          </div>
        </div>
        <div class="content">
          <div ref="content" v-html="dialogInfo[mergedProps.content]"></div>
        </div>
      </div>
      <div class="bottom-wrap" :class="{ haspre: showPreAndNext }">
        <p class="tips">声明：信息仅供参考，据此操作责任自负</p>
        <div class="next-pre" v-if="showPreAndNext">
          <div class="pre-next">
            <p class="link" :class="{ gray: preText == '无' }">
              <span class="triangle-up"></span>
              上一篇：<span @click="link('pre', dialogInfo)">{{
                preText
              }}</span>
            </p>
            <p class="link" :class="{ gray: nextText == '无' }">
              <span class="triangle-down"></span>
              下一篇：<span @click="link('next', dialogInfo)">{{
                nextText
              }}</span>
            </p>
          </div>
        </div>
        <div v-else class="footer-placeholder"></div>
        <div class="dialog-footer">
          <div class="close-btn"><span @click="close">关闭</span></div>
        </div>
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
  exportImg,
} from "../assets/img.js";
import debounce from "lodash/debounce";
import html2canvas from "html2canvas";
import { Loading } from "element-ui";
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
          category: "",
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
            setTimeout(() => {
              this.initTable();
            }, 800);
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
          category: "category",
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
  mounted() {
    this.$nextTick(() => {
      this.initTable();
    });
  },
  data() {
    return {
      closeImg,
      shareImg,
    };
  },
  methods: {
    initTable() {
      let t = this.$refs.content.querySelector("table");
      if (!t) return;
      let p = t.parentNode;
      p.className = "table-parent";
      let exportNode = document.createElement("span");
      let tInfo = t.getBoundingClientRect();
      let pInfo = p.getBoundingClientRect();
      let diff = Math.floor(Math.abs((pInfo.width - tInfo.width) / 2));
      exportNode.innerHTML = "导出图片";
      exportNode.className = "export-table";
      exportNode.style.background = `url(${exportImg}) no-repeat 5px center #F5F7FA`;
      exportNode.style.right = diff + "px";

      p.insertBefore(exportNode, t);
      exportNode.addEventListener("click", () => {
        this.exportTablePng();
      });
    },
    exportTablePng() {
      let table = this.$refs.content.querySelector("table");
      let loadingInstance = Loading.service({ fullscreen: true });
      html2canvas(table).then((canvas) => {
        // 将表格转换为 Canvas 元素
        const image = canvas.toDataURL("image/png");
        this.downLoadImage(image, this.dialogInfo[this.mergedProps.newsTitle]);
        this.$nextTick(() => {
          // 以服务的方式调用的 Loading 需要异步关闭
          loadingInstance.close();
        });
      });
    },
    downLoadImage(base64Data, fileName) {
      const link = document.createElement("a");
      link.href = base64Data;
      link.download = fileName;
      link.target = "_blank";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
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
