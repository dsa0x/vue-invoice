<template>
  <div id="app">
    <Invoice
      :company="company"
      :customer="customer"
      :invoice="invoice"
      :variant="3"
      currency="ngn"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      company: {
        name: "Vinvoicer",
        address: "38, Bayreuther Straße, 60306, Frankfurt, Hesse."
      },
      invoice: {
        id: "",
        items: [
          {
            description: "Macbook 2019 Pro Touchbar 16'",
            price: "4000",
            quantity: "2"
          },
          {
            description: "Ford Fusion 2020",
            price: "25000",
            quantity: "1",
            tax: 5
          }
        ],
        dueDate: ""
      },
      customer: {
        name: "Stefan Doe",
        email: "stefandoe@aol.com",
        description: "Steafanie GmbH"
      },
      logo: ""
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
}
</style>
