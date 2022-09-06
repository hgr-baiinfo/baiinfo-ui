# ButtonTab
按钮Tab

### 示例：
<br />
<testButtonTab/>

### 代码：

```html
<template>
    <div>
        <div class="row">
            type == 'default'
            <bi-button-tab
                    :border="true"
                    v-model="btn1"
                    :list="tabList"
                    @change="change"
            />
            btn1 -- {{ btn1 }}
        </div>
        <div class="row">
            type == 'primary'
            <bi-button-tab
                    v-model="btn2"
                    :list="tabList2"
                    @change="change"
            />
            btn2 -- {{ btn2 }}
        </div>

        <div class="row">
            type == 'small'
            <bi-button-tab
                    v-model="btn3"
                    :border="true"
                    :list="tabList"
                    @change="change"
                    type="primary"
                    size="small"
            />
            btn3 -- {{ btn3 }}
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabList: [
                    { label: "近一月", value: "first" },
                    { label: "近三月", value: "second" },
                    { label: "近四月", value: "third" },
                ],
                tabList2: [
                    { label: "默认菜单", value: "default" },
                    { label: "自选菜单", value: "diy" },
                ],
                btn1: "近一月",
                btn2: "默认菜单",
                btn3: "近四月",
            };
        },
        methods: {
            change(value, item) {
                console.log("item-22", value, item);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .row {
        margin-bottom: 20px;
    }
</style>
```

## Attributes
|  参数  | 说明 | 类型          | 是否必要  | 默认值 | 可选参数                  |
|  ----  |--|-------------|-------|-----|-----------------------|
| size  | 大小 | string      | false | -   | default,primary,small |
| border  | 边框 | Boolean     | false | -   |                       |
| list  | tab数组 | Array     | true | -   |                       |