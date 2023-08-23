<template>
  <div class="dialog-demo">
    <bi-button @click="openDialog">打开弹窗</bi-button>
    <bi-news-dialog
      v-if="visible"
      v-model="visible"
      :dialogInfo="dialogInfo"
      :loading="loading"
      @change="articleChange"
      :defaultProps="newDialogProps"
      @share="shareFn"
      :showCount="false"
      :showShare="true"
      @collection="toggleCollection"
      @close="dialogCloseFn"
    >
    </bi-news-dialog>
    <div style="margin-top: 50px">无:上一篇，下一篇，收藏</div>
    <bi-button @click="visible2 = true">打开弹窗</bi-button>
    <bi-news-dialog
      v-if="visible2"
      v-model="visible2"
      :dialogInfo="dialogInfo"
      :loading="loading"
      :showPreAndNext="false"
      :showCollection="false"
      :showCount="false"
      :showShare="true"
      :defaultProps="newDialogProps"
      @close="dialogCloseFn"
    >
    </bi-news-dialog>
  </div>
</template>
<script>
import { contentList } from "../../json/article";
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      showPreAndNext: false,
      showCollection: false,
      newDialogProps: {
        newsTitle: "newsTitle", // 同样的prop可以不用写
        isCollection: "is",
        source: "so",
        keywords: "key",
        browseCount: "bc",
        content: "cont",
        category: "category",
      },
      dialogInfo: {
        newsTitle: "美政府酝酿新规扩大打压中国芯片 中国专家解读",
        is: false,
        key: "新规扩大打压中国芯片",
        so: "新闻中心",
        bc: "122",
        addTime: "2022-08-16 11:20:07",
        category: "能源 > 油品类 > 原油 > 行情快递",
        cont: "",
        newsIdUp: "12",
        newsTitleUp: "",
        newsIdDown: "33",
        newsTitleDown:
          "美国商务部正打算基于早些时候向三家美国芯片生产设备公司下达的出口限制发布新的规定",
      },
      loading: false,
      nextNum: 0,
    };
  },
  methods: {
    shareFn(data) {
      console.log("share", data);
    },
    openDialog() {
      this.visible = true;
      this.dialogInfo = {
        newsTitle: "美政府酝酿新规扩大打压中国芯片 中国专家解读",
        is: false,
        key: "新规扩大打压中国芯片",
        so: "新闻中心",
        bc: "122",
        addTime: "2022-08-16 11:20:07",
        category: "能源 > 油品类 > 原油 > 行情快递",
        cont: contentList[0].content,
        newsIdUp: "12",
        newsTitleUp: "",
        newsIdDown: "33",
        newsTitleDown:
          "美国商务部正打算基于早些时候向三家美国芯片生产设备公司下达的出口限制发布新的规定",
      };
    },
    articleChange(type, info) {
      console.log("type", type, info);
      this.nextNum++;
      let index = this.nextNum % 2;
      console.log("index", index);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (type == "next") {
          this.dialogInfo = {
            newsTitle: "普京称俄采取一系列措施后经济未出现大幅下滑",
            is: false,
            key: "普京",
            so: "新闻中心",
            bc: "122",
            addTime: "2022-08-16 11:20:07",
            category: "能源 > 油品类 > 原油 > 行情快递",
            cont: contentList[index].content,
            newsIdUp: "12",
            newsTitleUp: "",
            newsIdDown: "33",
            newsTitleDown: "普京称“去美元化”进程不可避免",
          };
        }
      }, 1000);
    },
    toggleCollection(value, info) {
      console.log("toggleCollection", value, info);
    },
    dialogCloseFn() {
      console.log("dialogCloseFn");
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog-demo {
  min-height: 200px;
}
</style>
