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
<style lang="scss">
.row{
  margin-bottom: 20px;
}
</style>