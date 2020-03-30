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
  getters: {
    getInvoiceItems({invoice}) {

   const items = invoice.items.map(item => {
      item.SubAmount = (parseInt(item.price) * parseInt(item.quantity)).toFixed(
        2
      );
      if (!item._tax) item._tax = 1;
      return item
    });
      return items
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
