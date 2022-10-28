import Demo from "./demo";
import Card from "./card";
import Button from "./button";
import ButtonTab from "./button-tab";
import ButtonNav from "./button-nav";
import NewsDialog from "./news-dialog";
import Empty from "./empty";
import { version } from "../../package.json";
import utils from './utils'
const components = {
  Demo,
  Card,
  Button,
  ButtonTab,
  ButtonNav,
  NewsDialog,
  Empty
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const API = {
  version,
  install,
  utils,
  ...components,
};

export default API;
