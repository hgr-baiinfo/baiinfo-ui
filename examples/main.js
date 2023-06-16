import Vue from "vue";
import App from "./App.vue";

// import "baiinfo-ui2/dist/css/index.css";
// import BUI from "baiinfo-ui2";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from 'axios';
import router from "./router";
import "../components/css/index.scss";
import "./plugin";

Vue.use(ElementUI);

// Vue.use(BUI);
// console.log(BUI);

Vue.config.productionTip = false;
const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ec7511e5be0f0916dc59c191e463a309/api',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 20000,
});
Vue.prototype.$http = request;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
