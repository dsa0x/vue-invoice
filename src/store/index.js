import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customer: {
      name: "",
      email: ""
    },
    invoice: {
      id: "",
      items: [],
      dueDate: ""
    },
    company: {
      name: "sdd",
      address: ""
    }
  },
  mutations: {
    addInvoice(state, invoice) {
      state.invoice = { ...state.invoice, ...invoice };
    }
  },
  actions: {
    addInvoice({ commit }) {
      commit("addInvoice");
    }
  },
  modules: {}
});
