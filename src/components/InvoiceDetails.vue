<template>
  <div class="main-content">
    <div class="customer">
      <span class="light-grey">Bill To:</span>
      <span
        class="font-weight-bold text-uppercase"
        :class="`gradient-bg-${variant}`"
      >
        {{ customer.name }}</span
      >
      <span> {{ customer.description }} </span>
      <span> {{ customer.email }}</span>
    </div>
    <div class="inv">
      <span class="light-grey">Invoice no:</span>
      <span>#{{ invoiceNo }}</span>
    </div>
    <div class="due">
      <span class="light-grey">Due date:</span>
      <span>{{ date }}</span>
    </div>
    <div class="amount">
      <span class="light-grey">Total Amount ({{ currency.code }})</span>
      <span
        class="big-font font-weight-bold"
        :class="`gradient-bg-${variant}`"
        >{{ total | formatCurrency(currency.code) }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import currencyFormatter from "currency-formatter";

import { format } from "date-fns";
export default {
  name: "InvoiceDetails",
  props: ["currency", "variant"],
  data() {
    return {
      date: format(new Date(), "MMM, dd yyyy")
    };
  },
  computed: {
    ...mapGetters({
      invoiceItems: "getInvoiceItems",
      subTotal: "getSubTotal",
      total: "getTotal",
      totalTaxes: "getTotalTaxes"
    }),
    ...mapState({
      invoiceNo: state => {
        if (!state.Invoice.invoice.id)
          return (Math.random() * 1000000).toFixed(0);
        return state.Invoice.invoice.id;
      },
      customer: state => state.Invoice.customer
    })
  },
  filters: {
    formatCurrency: (value, currency) => {
      if (!value) return;
      return currencyFormatter.format(value, { code: currency });
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  justify-content: space-between;
  width: 100%;

  & div span {
    display: block;
    text-align: left;
  }
}
</style>
