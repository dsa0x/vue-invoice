<template>
  <div class="main-content">
    <div class="info">
      <div class="customer">
        <span class="light-grey">Billed To:</span>
        <span class=""> {{ customer.name }}</span>
        <span> {{ customer.company }} </span>
        <span> {{ customer.email }}</span>
      </div>
      <div class="inv">
        <span class="light-grey">Invoice no:</span>
        <span>{{ invoiceNo }}</span>
      </div>
      <div class="due">
        <span class="light-grey">Due date:</span>
        <span>{{ date }}</span>
      </div>
    </div>
    <div class="amount">
      <span class="light-grey">Amount Due (EUR)</span>
      <span class="big-font font-weight-bold">€{{ total }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { format } from "date-fns";
export default {
  name: "InvoiceDetails",
  //   props: ["customer"],
  data() {
    return {
      invoiceNo: this.$store.state.invoice.id,
      customer: this.$store.state.customer,
      date: format(new Date(), "MMM, dd yyyy")
    };
  },
  computed: {
    ...mapGetters({
      invoiceItems: "getInvoiceItems",
      subTotal: "getSubTotal",
      total: "getTotal",
      totalTaxes: "getTotalTaxes"
    })
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

.info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 3.5rem;
  flex: 0 0 60%;
}
</style>
