import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import infiniteScroll from "vue-infinite-scroll";

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(infiniteScroll);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
