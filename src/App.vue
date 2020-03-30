<template>
  <div id="app">
    <Invoice :company="company" :customer="customer" :invoice="invoice" />
  </div>
</template>

<script>
import Invoice from "./components/Invoice.vue";

export default {
  name: "App",
  components: {
    Invoice
  },
  data() {
    return {
      company: {
        name: "ClaimBuddy",
        address: "18, Karlwiechert Allee, 30167, Hannover, Germany."
      },
      items: [
        {
          Description: "Macbook 2019 Pro",
          price: "3000",
          quantity: "1"
        },
        {
          Description: "Macbook 2018 Pro",
          price: "2000",
          quantity: "2"
        },
        {
          Description: "Macbook 2018 Pro",
          price: "2000",
          quantity: "2"
        }
      ],
      invoice: {
        id: 1,
        items: [
          {
            Description: "Macbook 2019 Pro",
            price: "3000",
            quantity: "1"
          },
          {
            Description: "Macbook 2018 Pro",
            price: "2000",
            quantity: "2"
          },
          {
            Description: "Macbook 2018 Pro",
            price: "2000",
            quantity: "2"
          }
        ],
        dueDate: "12.1.20"
      },
      customer: {
        name: "Stefan Digga",
        email: "stef@aol.com"
      }
    };
  },
  beforeMount() {
    this.$store.commit("addInvoice", this.invoice);
    console.log(this.invoice);
  },
  mounted() {
    console.log("has mounted", this.invoice);
  }
};
</script>

<style lang="scss">
@import "@/styles/_utilities.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  font-size: $font-normal;
  margin: 8rem 20rem;
  border: solid 1px #eee;
  border-radius: 10px;
  padding: 4rem 5rem;
}

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
