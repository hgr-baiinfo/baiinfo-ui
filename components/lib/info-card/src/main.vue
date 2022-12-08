<template>
  <el-card
    :shadow="shadow"
    class="bi-info-card"
    :class="{ 'content-border': contentBorder }"
  >
    <div slot="header" class="clearfix info-header">
      <span class="info-title" ref="titleRef">{{
        options[cardProps.title]
      }}</span>
      <div class="info-tab-wrap">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          :style="{ maxWidth: tabMaxWidth }"
        >
          <el-tab-pane
            v-for="(item, index) in options.children"
            :key="index"
            :label="item[cardProps.tabItem]"
            :name="`tab${index}`"
          ></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div :style="{ height: contentHeight }" v-loading="loading">
      <el-scrollbar style="height: 100%" class="infocard-content">
        <div
          v-for="(item, index) in tableList"
          :key="index"
          class="card-row"
          @click="rowClick(item, index)"
        >
          <div class="title">{{ item[cardProps.listTitle] }}</div>
          <div class="time">{{ item[cardProps.listTime] }}</div>
        </div>
      </el-scrollbar>
    </div>
    <div class="infocard-more">
      <span>更多 ></span>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "bi-info-card",
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
    shadow: {
      type: String,
      default: "never",
    },
    contentHeight: {
      type: [Number, String],
      default: "240px",
    },
    cardProps: {
      type: Object,
      default() {
        return {
          title: "columnName",
          tabItem: "columnName",
          listTitle: "listTitle",
          listTime: "listTime",
        };
      },
    },
    handleListFn: {
      type: Function,
    },
    contentBorder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeName: "tab0",
      tabMaxWidth: 300,
      tabList: [],
      tableList: [],
      loading: false,
    };
  },
  mounted() {
    this.getTabsMaxWidth();
    this.handleClick({ index: 0 });
  },
  methods: {
    async handleClick(tab) {
      let params = this.options.children[tab.index];
      this.loading = true;
      this.tableList = [];
      try {
        let res = await this.handleListFn(tab.index, params);
        this.tableList = res;
        this.loading = false;
      } catch (error) {
        console.log("error", error);
        this.loading = false;
      }
    },
    getTabsMaxWidth() {
      let w1 = this.$refs.titleRef.offsetWidth;
      let w2 = this.$refs.titleRef.parentNode.offsetWidth;
      this.tabMaxWidth = w2 - w1 - 30 + "px";
    },
    rowClick(row, index) {
      this.$emit("row-click", row, index);
    },
  },
};
</script>