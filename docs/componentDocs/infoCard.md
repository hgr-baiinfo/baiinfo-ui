# InfoCard
资讯卡片

<common-code-format>
  <docsComponents-BiInfoCard-index slot="source"></docsComponents-BiInfoCard-index>

<<< @/docs/.vuepress/components/docsComponents/BiInfoCard/index.vue
</common-code-format>


## Attributes
|  参数  | 说明   | 类型          | 是否必要  | 默认值     | 可选参数                  |
|  ----  |------|-------------|-------|---------|-----------------------|
| options  | title tab配置项 | Object      | true |  |  |
| shadow  | 是否展示阴影 | String      | false |'never'  | always / hover / never |
| contentHeight  | 内容区域高度 | String      | false |'240px'  |  |
| cardProps  | props配置项 | Object      | true |{title: "columnName",tabItem: "columnName"listTitle: "listTitle",listTime: "listTime",rowKey: "id",}  |  |
| handleListFn  | 处理内容区域函数 | Function      | true | |  |
| contentBorder  | 内容区域是否要边线 | Boolean      | false | |  |
| emptyText  | 暂无数据提示语 | String      | false |'暂无数据' |  |
| openDelay  | 内容过长，提示延时,单位毫秒 | Number      | false |300 |  |
| overflowTips  | 内容过长，是否提示 | Boolean      | true | |  |
| tipsPlacement  | 内容过长，提示展示位置 | String      | false |'left-start' |top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end  |