import { MessageBox as EMessageBox } from 'element-ui';
export default function (message, options) {
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
