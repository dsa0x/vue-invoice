<template>
  <b-container>
    <CompanyInfo />
    <Card />
    <b-row class="big-top-margin">
      <InvoiceDetails />
    </b-row>
    <b-row>
      <InvoiceItems />
    </b-row>
  </b-container>
</template>

<script>
import CompanyInfo from "./CompanyInfo.vue";
import InvoiceItems from "./InvoiceItems.vue";
import InvoiceDetails from "./InvoiceDetails.vue";
import Card from "./Card";

export default {
  name: "Invoice",
  props: ["invoice", "company", "customer"],
  components: {
    CompanyInfo,
    InvoiceItems,
    InvoiceDetails,
    Card
  },
  data() {
    return {};
  },
  beforeMount() {
    this.$store.commit("addInvoice", this.invoice);
    this.$store.commit("addCustomer", this.customer);
    this.$store.commit("addCompany", this.company);
  }
};
</script>

<style lang="scss">
@import "@/styles/_utilities.scss";

* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

.invoice {
  display: flex;

  &:not(:last-child) {
    flex-basis: auto;
  }
}

.inv-table {
  padding-right: 5rem;

  & thead {
    & tr {
    }

    & tr th {
      border-top: none;
      color: $color-grey-primary;
      font-weight: $font-weight-normal;
      padding-bottom: 3rem;
      margin-bottom: 1rem;
      border-bottom: 1px;

      &:first-of-type {
        text-align: left;
      }
    }
  }

  & tbody {
    & tr:not(:first-of-type) td {
      border-top: none;
    }

    & tr {
      &:first-of-type td {
        padding-top: 4rem;
      }

      & td {
        padding: 1.5rem;
        &:first-of-type {
          text-align: left;
          padding-left: 0;
        }
      }
    }
  }
}
</style>
