import Component from "./Invoice.vue";
import module from "./invoice";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  install(Vue, options) {
    if (this.installed) {
      return;
    }

    this.installed = true;
    if (!options.store) {
      throw new Error("Please provide vuex store.");
    }

    options.store.registerModule("Invoice", module);

    Vue.component(Component.name, Component);
  }
};
