import NewsDialog from "./src/main.vue";

// eslint-disable-next-line func-names
NewsDialog.install = function (Vue) {
  Vue.component(NewsDialog.name, NewsDialog);
};

export default NewsDialog;
