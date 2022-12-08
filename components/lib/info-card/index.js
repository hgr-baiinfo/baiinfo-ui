import InfoCard from "./src/main.vue";

// eslint-disable-next-line func-names
InfoCard.install = function (Vue) {
  Vue.component(InfoCard.name, InfoCard);
};

export default InfoCard;