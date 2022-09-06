# Button
按钮组件

### 示例：
<br />
<testButton/>

### 代码：

```html
<template>
    <div>
        <div class="row">
            弹窗按钮
            <bi-button btnType="dialog-btn">
                按钮
            </bi-button>
        </div>
        <div class="row">
            default按钮
            <bi-button btnType="default">
                按钮
            </bi-button>
        </div>
        <div class="row">
            default按钮 disabled
            <bi-button btnType="default" disabled>
                按钮
            </bi-button>
        </div>
        <div class="row">
            primary按钮
            <bi-button btnType="primary" >
                按钮
            </bi-button>
        </div>
        <div class="row">
            primary按钮 禁用
            <bi-button btnType="primary" disabled>
                按钮
            </bi-button>
        </div>
    </div>
</template>
```

## Attributes
|  参数  | 说明   | 类型          | 是否必要  | 默认值     | 可选参数                  |
|  ----  |------|-------------|-------|---------|-----------------------|
| btnType  | 按钮类型 | string      | false | default | dialog-btn,default,primary |
| disabled  | 是否禁用 | Boolean     | false | -       |                       |
