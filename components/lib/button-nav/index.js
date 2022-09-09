import ButtonNav from "./src/main.vue";

// eslint-disable-next-line func-names
ButtonNav.install = function(Vue) {
  Vue.component(ButtonNav.name, ButtonNav);
};

export default ButtonNav;
