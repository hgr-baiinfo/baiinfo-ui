import MessageBox from "./src/main.vue";
import { MessageBox as EMessageBox } from 'element-ui';
// eslint-disable-next-line func-names
MessageBox.install = function (Vue) {
  Vue.prototype.$biMessageBox = function (message, options) {
    let defaultOptiosn = {
      title: "提示",
      showClose: false,
      confirmButtonText: "确定",
      closeOnClickModal: true,
      showCancelButton: false,
      customClass: "bi-message-box",
    }
    return EMessageBox.confirm(message, { ...defaultOptiosn, ...options })
  }
};

export default MessageBox;
