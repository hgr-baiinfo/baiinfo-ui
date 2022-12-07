import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BUI from "../../components/lib";
import "../../components/css/index.scss";
import "./public/css/index.scss";
import utils from '../../components/lib/utils'
import messageBox from '../../components/lib/message-box'
export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(BUI);
  Vue.prototype.$message = Element.Message;
  Vue.prototype.$utils = utils;
  Vue.prototype.$biMessageBox = messageBox;
};
