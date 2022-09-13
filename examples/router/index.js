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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
