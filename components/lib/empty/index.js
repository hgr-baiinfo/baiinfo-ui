import Empty from './src/main.vue'

// eslint-disable-next-line func-names
Empty.install = function(Vue) {
    Vue.component(Empty.name, Empty)
}

export default Empty