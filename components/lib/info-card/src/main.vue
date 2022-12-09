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
    <div :style="{ height: contentHeight }">
      <el-scrollbar
        style="height: 100%"
        class="infocard-content"
        v-loading="loading"
      >
        <template v-if="showTableList.length">
          <div
            v-for="(item, index) in showTableList"
            :key="index"
            class="card-row"
            @click="rowClick(item, index, $event)"
            :class="{ 'gray-color': item.gray }"
          >
            <el-tooltip
              v-if="overflowTips"
              class="title"
              effect="dark"
              :open-delay="openDelay"
              :content="item[cardProps.listTitle]"
              :placement="tipsPlacement"
            >
              <span>{{ item[cardProps.listTitle] }}</span>
            </el-tooltip>
            <div class="title" v-else>
              {{ item[cardProps.listTitle] }}
            </div>
            <div class="time">{{ item[cardProps.listTime] }}</div>
          </div>
        </template>
        <p v-if="showTableList.length == 0 && !loading" class="empty-text">
          {{ emptyText }}
        </p>
      </el-scrollbar>
    </div>
    <div class="infocard-more">
      <span @click="clickMore(options)">更多 ></span>
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
          rowKey: "id",
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
    emptyText: {
      type: String,
      default: "暂无数据",
    },
    openDelay: {
      type: Number,
      default: 300,
    },
    overflowTips: {
      type: Boolean,
      default: true,
    },
    tipsPlacement: {
      type: String,
      default: "left-start",
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
  computed: {
    showTableList() {
      //读取本地缓存
      let isReadInfoCardIds =
        JSON.parse(localStorage.getItem("isReadInfoCard")) || [];
      let res = [];
      res = this.tableList.map((item) => {
        // 去除标题中的<font color="red"></font> UI表示标题颜色不对
        item[this.cardProps.listTitle] = item[this.cardProps.listTitle].replace(
          /<[^>]+>/g,
          " "
        );
        if (
          isReadInfoCardIds.findIndex(
            (it2) => item[this.cardProps.rowKey] == it2
          ) != -1
        ) {
          item.gray = true;
        }
        return item;
      });

      return res;
    },
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
        // 添加置灰属性
        this.tableList = res.map((item) => {
          if (item.gray == undefined || item.gray == null) {
            item.gray = false;
          }
          return item;
        });
        this.loading = false;
      } catch (error) {
        console.log("error", error);
        this.loading = false;
        this.tableList = [];
      }
    },
    getTabsMaxWidth() {
      let w1 = this.$refs.titleRef.offsetWidth;
      let w2 = this.$refs.titleRef.parentNode.offsetWidth;
      this.tabMaxWidth = w2 - w1 - 30 + "px";
    },
    rowClick(row, index) {
      this.$emit("row-click", row, index);
      row.gray = true;
      this.handleLocalStorage(row, index);
    },
    clickMore(options) {
      this.$emit("click-more", options);
    },
    handleLocalStorage(row) {
      //读取本地缓存
      let isReadInfoCardIds =
        JSON.parse(localStorage.getItem("isReadInfoCard")) || [];
      // 判断是否已经缓存过
      let id = row[this.cardProps.rowKey];
      if (isReadInfoCardIds.includes(id) > -1) {
        isReadInfoCardIds.push(id);
        localStorage.setItem(
          "isReadInfoCard",
          JSON.stringify(isReadInfoCardIds)
        );
      }
    },
  },
};
</script>