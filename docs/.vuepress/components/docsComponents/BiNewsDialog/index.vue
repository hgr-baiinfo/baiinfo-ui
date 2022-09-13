<template>
  <div class="dialog-demo">
    <bi-button @click="visible = true">打开弹窗</bi-button>
    <bi-news-dialog
      v-model="visible"
      :dialogInfo="dialogInfo"
      @change="articleChange"
      :defaultProps="newDialogProps"
      @collection="toggleCollection"
      @close="dialogCloseFn"
    >
    </bi-news-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      newDialogProps: {
        newsTitle: "n",
        isCollection: "is",
        source: "so",
        browseCount: "bc",
        addTime: "aTime",
        content: "cont",
        newsIdUp: "newsIdUp",
        newsTitleUp: "newsTitleUp",
        newsIdDown: "newsIdDown",
        newsTitleDown: "newsTitleDown",
      },
      dialogInfo: {
        n: "美政府酝酿新规扩大打压中国芯片 中国专家解读",
        is: false,
        key: "关键字：新规扩大打压中国芯片",
        so: "新闻中心",
        bc: "122",
        aTime: "2022-08-16 11:20:07",
        cont: "路透社12日引述知情人士的消息称，拜登政府计划下个月扩大对美国企业向中国出口人工智能芯片与芯片制造设备的限制.路透社独家报道称，美国商务部正打算基于早些时候向三家美国芯片生产设备公司下达的出口限制发布新的规定。据彭博社报道，7月最后两周左右的时间内，所有美国芯片生产设备制造商都收到来自美国商务部的信函，要求这些企业不要向中国出口14纳米及以下芯片的生产设备，除非获得该部许可。美国芯片设备供应商泛林、科磊和应用材料公司均公开表示已收到美国商务部相关信函。路透社还透露，美国商务部打算把上月向英伟达和AMD下达的新出口许可要求，也编入新的限制规定中，即停止向中国出口人工智能计算芯片，除非获得美国商务部许可.路透社称，美国商务部发给芯片公司的信件使其能绕过冗长的规则制定过程，迅速执行芯片出口相关限制。不过，这些出口限制只适用于收到相关信件的公司。若将这些信件中的限制要求转化为出口限制规定则将扩大影响范围，可能使其他生产类似技术产品的美国公司受到限制，比如英特尔和像塞雷布拉斯系统公司这样的初创企业。另据一名消息人士的话称，美商务部的新规定还可能对运往中国的含有目标芯片的产品提出许可要求。目前所知，戴尔、惠普和超微生产的数据中心服务器都含有英伟达A100芯片.拜登政府今年陆续发布限制向中国出口先进制程芯片及其生产设备的措施。通信行业资深观察人士项立刚12日接受《环球时报》记者采访时表示，短期内，美国的限制政策会干扰中国建立14纳米及以下芯片生产线，导致中国企业在购买相关芯片生产设备时发生延迟，甚至买不到，这会对中国带来现实性的影响。不过也正是因为美国的打压，中国芯片产业也在致力于建立基于自主科研技术的生产能力。高端GPU（图形处理器）被禁止向中国出口，短期内对中国人工智能、高性能计算等方面会带来一定影响，但中国目前已有约20家企业进行GPU的设计和研发。从这个角度来看，美国限制出口也意味着美国企业把这些市场拱手让给正在快速发展的中国企业",
        newsIdUp: "12",
        newsTitleUp: "",
        newsIdDown: "33",
        newsTitleDown:
          "美国商务部正打算基于早些时候向三家美国芯片生产设备公司下达的出口限制发布新的规定",
      },
    };
  },
  methods: {
    articleChange(type, info) {
      console.log("type", type, info);
      if (type == "next") {
        console.log("dd");
        this.dialogInfo = {
          n: "普京称俄采取一系列措施后经济未出现大幅下滑",
          is: false,
          key: "关键字：普京",
          so: "新闻中心",
          bc: "122",
          aTime: "2022-08-16 11:20:07",
          cont: "“今日俄罗斯”电视台最新报道，俄罗斯总统普京12日在一场关于经济问题的会议上说，在俄罗斯政府采取一系列措施后，俄经济未出现大幅下滑。据俄新社报道，谈及俄政府采取的稳定经济的措施，普京当天在会议上说，“我们迅速采取了有效保护措施，启动扶持关键领域、骨干企业以及中小企业的机制。所有这些措施和机制旨在保护就业和工作岗位，有针对性地向我们的民众提供帮助，首先是有孩子的家庭和退休人员。采取这一系列措施的结果就是，我们没有让经济大幅下滑，快速地稳住了通货膨胀”",
          newsIdUp: "12",
          newsTitleUp: "",
          newsIdDown: "33",
          newsTitleDown: "普京称“去美元化”进程不可避免",
        };
      }
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