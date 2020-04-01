import Component from "./Invoice.vue";
import module from "./invoice";

function install(Vue, options) {
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

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

Component.install = install;

export default Component;
