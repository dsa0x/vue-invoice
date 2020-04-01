<template>
  <div class="main-app">
    <CompanyInfo :variant="variant" :logo="logo" />
    <div class=" row big-top-margin">
      <InvoiceDetails :variant="variant" :currency="getCurrency" />
    </div>
    <div class="row">
      <InvoiceItems :variant="variant" :currency="getCurrency" />
    </div>
  </div>
</template>

<script>
import CompanyInfo from "./CompanyInfo.vue";
import InvoiceItems from "./InvoiceItems.vue";
import InvoiceDetails from "./InvoiceDetails.vue";
import currencyFormatter from "currency-formatter";

export default {
  name: "Invoice",
  props: {
    invoice: {
      type: Object
    },
    company: {
      type: Object
    },
    customer: {
      type: Object
    },
    logo: {
      default: "",
      type: String
    },
    variant: {
      type: Number,
      default: 1
    },
    currency: { default: "EUR", type: String }
  },
  components: {
    CompanyInfo,
    InvoiceItems,
    InvoiceDetails
  },
  data() {
    return {
      currencies: null
    };
  },
  computed: {
    getCurrency() {
      if (this.currencies) {
        return Object.keys(this.currencies)
          .filter(cur => {
            return this.currencies[cur].code == this.currency.toUpperCase();
          })
          .map(key => {
            return this.currencies[key];
          })
          .reduce(obj => obj);
      } else {
        return {
          code: "USD",
          symbol: "$"
        };
      }
    }
  },
  mounted() {
    this.$store.dispatch("addInvoice", this.invoice);
    this.$store.dispatch("addCustomer", this.customer);
    this.$store.dispatch("addCompany", this.company);
    this.currencies = currencyFormatter.currencies;
  }
};
</script>

<style lang="scss">
@import "../styles/_utilities.scss";
.main-app {
  font-size: $font-normal;
  margin: 8rem auto;
  border: solid 1px #eee;
  border-radius: 10px;
  padding: 4rem 5rem;
  max-width: 768px;
  min-width: 600px;
  width: 100%;
  box-shadow: 0 1.5rem 4rem $color-grey-primary;

  @media only screen and (max-width: 768px) {
    margin: auto;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

.invoice {
  display: flex;

  &:not(:last-child) {
    flex-basis: auto;
  }
}

.row {
  row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    // margin-right: -15px;
    // margin-left: -15px;
  }
}

.inv-table {
  padding-right: 5rem;
  margin-top: 2rem;

  & thead {
    margin-top: 2rem;
    & tr {
      // background-color: $color-primary-light;
      text-align: right;

      & th {
        border-top: none;
        color: $color-grey-light !important;
        background-color: inherit !important;
        font-weight: $font-weight-bold;
        padding: 2rem;
        margin-bottom: 1rem;
        border-bottom: 1px;

        &:first-of-type {
          text-align: left;
        }
      }
    }
  }

  & tbody {
    & tr:not(:first-of-type) td {
      border-top: none;
    }

    & tr {
      & td {
        padding: 2rem;
        border-bottom: solid 1px $color-grey-light;
        text-align: right;
        &:first-of-type {
          text-align: left;
        }
      }
    }
  }
}
</style>
