import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // customer: {
    //   name: "",
    //   email: ""
    // },
    // invoice: {
    //   id: 1,
    //   items: [],
    //   dueDate: "",
    //   totalAmount: null,
    //   currency: null
    // },
    // company: {
    //   name: "",
    //   address: ""
    // }
  },
  getters: {
    //   getInvoiceItems({ invoice }) {
    //     const items = invoice.items.map(item => {
    //       item.SubAmount = (
    //         parseInt(item.price) * parseInt(item.quantity)
    //       ).toFixed(2);
    //       if (!item.tax) item.tax = 0;
    //       return item;
    //     });
    //     return items;
    //   },
    //   getSubTotal({ invoice }) {
    //     if (invoice.items) {
    //       return invoice.items
    //         .reduce((acc, current) => acc + parseFloat(current.SubAmount), 0)
    //         .toFixed(2);
    //     } else {
    //       return 0;
    //     }
    //   },
    //   getTotal({ invoice }, { getSubTotal, getTotalTaxes }) {
    //     if (invoice.items) {
    //       return (parseFloat(getSubTotal) + parseFloat(getTotalTaxes)).toFixed(2);
    //     } else {
    //       return 0;
    //     }
    //   },
    //   getTotalTaxes({ invoice }) {
    //     if (invoice.items) {
    //       return invoice.items
    //         .reduce(
    //           (acc, cur) =>
    //             acc + parseFloat(cur.tax / 100) * parseFloat(cur.SubAmount),
    //           0
    //         )
    //         .toFixed(2);
    //     } else {
    //       return 0;
    //     }
    //   }
  },
  mutations: {
    //   addInvoice(state, invoice) {
    //     state.invoice = { ...state.invoice, ...invoice };
    //   },
    //   addCustomer(state, customer) {
    //     state.customer = { ...state.customer, ...customer };
    //   },
    //   addCompany(state, company) {
    //     state.company = { ...state, ...company };
    //   },
    //   setTotalAmount(state, totalAmount) {
    //     state.invoice = { ...state.invoice, totalAmount };
    //   }
    // },
    // actions: {
    //   addInvoice({ commit }) {
    //     commit("addInvoice");
    //   },
    //   addCustomer({ commit }) {
    //     commit("addCustomer");
    //   },
    //   addCompany({ commit }) {
    //     commit("addCompany");
    //   },
    //   setTotalAmount({ commit }) {
    //     commit("setTotalAmount");
    //   }
  },
  actions: {}
  // modules: {}
});
