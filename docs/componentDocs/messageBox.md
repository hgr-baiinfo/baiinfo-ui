# messageBox
弹窗提示

<common-code-format>
  <docsComponents-BiMessageBox-index slot="source"></docsComponents-BiMessageBox-index>

<<< @/docs/.vuepress/components/docsComponents/BiMessageBox/index.vue
</common-code-format>



## Attributes
|  参数  | 说明   | 类型          | 是否必要  | 默认值     | 可选参数                  |
|  ----  |------|-------------|-------|---------|-----------------------|
| message  | 消息正文内容 | string      | true |  |  |
| options  | 配置项 | Object     | false |  {title:'提示',customClass:'bi-message-box'}    |                       |



## options
|  参数               | 说明                  | 类型          | 是否必要  |  默认值                  |
|  ----              |------                 |-------------  |-------   |-----------------------|
| title              | 标题                   | string        |          |   |
| customClass        | 自定义类名             | string        |          |   |
| callback           | 关闭后的回调           | function(action, instance)，action 的值为'confirm'   |   |  |
| showClose          | 是否显示右上角关闭按钮  | boolean       |          |  false|
| showCancelButton   | 是否显示取消按钮        | boolean       |         |   false|
| showConfirmButton  | 是否显示确定按钮        | boolean       |         |   true|
| cancelButtonText   | 取消按钮的文本内容      | string        |         |   取消|
| confirmButtonText  | 确定按钮的文本内容      | string        |         |   确定|
