import Vue from "vue";
import "../../dist/css/index.css";

import BiButton from "../../components/lib/button";
Vue.use(BiButton);

import BiDemo from "../../components/lib/demo";
Vue.use(BiDemo);

import BiCard from "../../components/lib/card";
Vue.use(BiCard);

import BiBtnTab from "../../components/lib/button-tab";
Vue.use(BiBtnTab);

import BiBtnNav from "../../components/lib/button-nav";
Vue.use(BiBtnNav);

import BiNewsDialog from "../../components/lib/news-dialog";
Vue.use(BiNewsDialog);

import BiEmpty from "../../components/lib/empty";
Vue.use(BiEmpty);

import MessageBox from '../../components/lib/message-box'
Vue.prototype.$biMessageBox = MessageBox


import BiInfoCard from "../../components/lib/info-card";
Vue.use(BiInfoCard);