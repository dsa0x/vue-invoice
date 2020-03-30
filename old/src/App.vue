<template>
  <div id="app">
    <Header :address="address" :company="company" />
    <Card />
    <b-container>
      <b-row class="big-top-margin">
        <b-col cols="8" class="pl-0 pr-5 border-right">
          <InvoiceItems />
        </b-col>
        <b-col md="4">
          <InvoiceDetails />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import InvoiceItems from "./components/InvoiceItems.vue";
import InvoiceDetails from "./components/InvoiceDetails.vue";

export default {
  name: "App",
  components: {
    Header,
    Card,
    InvoiceItems,
    InvoiceDetails
  },
  data() {
    return {
      company: "ClaimBuddy",
      address: "18, Karlwiechert Allee, 30167, Hannover, Germany."
    };
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
  margin: 5rem;
  border: solid 1px #eee;
  border-radius: 5px;
  padding: 2rem 10rem;
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
