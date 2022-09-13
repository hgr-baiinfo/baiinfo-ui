# NewsDialog
新闻弹窗

<common-code-format>
  <docsComponents-BiNewsDialog-index slot="source"></docsComponents-BiNewsDialog-index>

<<< @/docs/.vuepress/components/docsComponents/BiNewsDialog/index.vue
</common-code-format>


## Attributes
|  参数  | 说明   | 类型          | 是否必要  | 默认值     | 可选参数                  |
|  ----  |------|-------------|-------|---------|-----------------------|
| visible  | 是否显示 Dialog | Boolean      | false | false |  |
| dialogInfo  | 新闻弹窗参数 | Object     | 详见dialogInfo    |                       |
| defaultProps  | dialogInfo的props | Object    | 详见defaultProps    |                  |
| change  | 上/下一篇 | event    | false    |      -            | function(type, info){}|
| collection  | 收藏 | event    | false    |      -            | function(value, info){}|



###  defaultProps
|  参数           | 说明     |    类型   |  默认值     |
| ----|------|-------------|-------|
|  newsTitle     | 标题     | string   |  newsTitle  |
|  isCollection  | 是否收藏     | string   |  isCollection  |
|  source  | 来源     | string   |  source  |
|  browseCount  | 阅读数     | string   |  browseCount  |
|  addTime  | 添加时间     | string   |  addTime  |
|  content  | 正文     | string   |  content  |
|  newsIdUp  | 上一篇id     | string   |  newsIdUp  |
|  newsTitleUp  | 上一篇标题     | string   |  newsTitleUp  |
|  newsIdDown  | 下一篇id     | string   |  newsIdDown  |
|  newsTitleDown  | 下一篇标题     | string   |  newsTitleDown  |





###  dialogInfo
|  参数           | 说明     |    类型   |  默认值     |
| ----|------|-------------|-------|
|  newsTitle     | 标题     | string   |    |
|  isCollection  | 是否收藏     | boolean   |    |
|  source  | 来源     | string   |    |
|  browseCount  | 阅读数     | number   |    |
|  addTime  | 添加时间     | date   |    |
|  content  | 正文     | string   |    |
|  newsIdUp  | 上一篇id     | string,number   |    |
|  newsTitleUp  | 上一篇标题     | string   |    |
|  newsIdDown  | 下一篇id     | string,number   |    |
|  newsTitleDown  | 下一篇标题     | string   |    |