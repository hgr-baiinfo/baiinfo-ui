import ButtonTab from './src/main.vue'

// eslint-disable-next-line func-names
ButtonTab.install = function(Vue) {
    Vue.component(ButtonTab.name, ButtonTab)
}

export default ButtonTab