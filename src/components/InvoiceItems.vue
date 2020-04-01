<template>
  <div class="main-content">
    <b-table-simple class="inv-table table-striped" aria-colcount="4">
      <b-thead :class="`dark-bg-${variant}`">
        <b-tr>
          <b-th>Description</b-th>
          <b-th>Price</b-th>
          <b-th>Quantity</b-th>
          <b-th>Sub Amount</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, i) in invoiceItems" :key="i">
          <b-td>{{ item.description }}</b-td>
          <b-td>{{ item.price | formatCurrency(currency.code) }}</b-td>
          <b-td>{{ item.quantity }}</b-td>
          <b-td>{{ item.SubAmount | formatCurrency(currency.code) }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <div class="d-flex summary flex-column align-items-end">
      <div class="d-flex justify-content-between">
        <span>Sub Total</span>
        <span> {{ subTotal | formatCurrency(currency.code) }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>Tax</span>
        <span> {{ totalTaxes | formatCurrency(currency.code) }}</span>
      </div>
      <div
        class="d-flex justify-content-between font-weight-bold"
        :class="`dark-bg-${variant}`"
      >
        <span>Total ({{ currency.code }})</span>
        <span> {{ total | formatCurrency(currency.code) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import currencyFormatter from "currency-formatter";

export default {
  name: "items",
  props: ["currency", "variant"],
  data() {
    return {
      currentStyle: "v",
      fields: ["Description", "price", "quantity", "SubAmount"]
    };
  },
  computed: {
    ...mapGetters({
      invoiceItems: "getInvoiceItems",
      subTotal: "getSubTotal",
      total: "getTotal",
      totalTaxes: "getTotalTaxes"
    })
  },
  mounted() {
    this.$store.dispatch("setTotalAmount", parseInt(this.total));
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
  width: 100%;
}

.summary {
  display: flex;
  text-align: right;
  justify-content: flex-end;

  & div {
    text-align: right;
    width: 25rem;

    &:last-of-type {
      margin-top: 2rem;
    }

    & span {
      display: inline-block;
      padding: 1.5rem;
      flex-basis: 50%;
    }
  }
}
</style>
