import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Container from "../../components/lib/container/src/index.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/demo",
        component: () => import("../views/demo/index.vue"),
      },
      {
        path: "/card",
        component: () => import("../views/card/index.vue"),
      },
      {
        path: "/button",
        component: () => import("../views/button/index.vue"),
      },
      {
        path: "/button-tab",
        component: () => import("../views/button-tab/index.vue"),
      },
      {
        path: "/button-nav",
        component: () => import("../views/button-nav/index.vue"),
      },
      {
        path: "/news-dialog",
        component: () => import("../views/news-dialog/index.vue"),
      },
      {
        path: "/utils",
        component: () => import("../views/utils/index.vue"),
      },
      {
        path: "/empty",
        component: () => import("../views/empty/index.vue"),
      },
      {
        path: "/message-box",
        component: () => import("../views/message-box/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
