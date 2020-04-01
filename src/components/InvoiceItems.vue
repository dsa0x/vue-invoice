<template>
  <div class="main-content">
    <table class="inv-table" aria-colcount="4">
      <thead :class="`dark-bg-${variant}`">
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sub Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in invoiceItems"
          :key="i"
          :class="darken(i) ? 'light-grey-bg' : ''"
        >
          <td>{{ item.description }}</td>
          <td>{{ item.price | formatCurrency(currency.code) }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.SubAmount | formatCurrency(currency.code) }}</td>
        </tr>
      </tbody>
    </table>

    <div class="summary">
      <div class="">
        <span>Sub Total</span>
        <span> {{ subTotal | formatCurrency(currency.code) }}</span>
      </div>
      <div class="">
        <span>Tax</span>
        <span> {{ totalTaxes | formatCurrency(currency.code) }}</span>
      </div>
      <div class=" bold-font" :class="`dark-bg-${variant}`">
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
  },
  methods: {
    darken(i) {
      return i % 2;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
}

.inv-table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
}

.summary {
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;

  & div {
    text-align: right;
    width: 25rem;
    display: flex;
    justify-content: space-between;

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
