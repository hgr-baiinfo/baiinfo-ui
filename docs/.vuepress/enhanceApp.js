import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BUI from "../../components/lib";
import "../../components/css/index.scss";
import "./public/css/index.scss";
export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(BUI);
  Vue.prototype.$message = Element.Message;
};
