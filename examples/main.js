import Vue from "vue";
import App from "./App.vue";

// import "baiinfo-ui2/dist/css/index.css";
// import BUI from "baiinfo-ui2";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";
import "../components/css/index.scss";
import "./plugin";

Vue.use(ElementUI);

// Vue.use(BUI);
// console.log(BUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
