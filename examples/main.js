import Vue from "vue";
import App from "./App.vue";

import "../components/css/index.scss";
import BUI from "../components/lib";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";

Vue.use(ElementUI);

Vue.use(BUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
