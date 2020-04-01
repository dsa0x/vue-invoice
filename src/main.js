import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Invoice from "./components/index";

Vue.use(Invoice, { store });
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
