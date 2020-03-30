<template>
  <div>
    <b-table class="inv-table" :items="items"> </b-table>
  </div>
</template>

<script>
export default {
  name: "items",
  data() {
    return {
      items: [
        {
          Description: "Macbook 2019 Pro",
          Price: "€3000",
          Quantity: "1",
          "Total Price": "€3000"
        },
        {
          Description: "Macbook 2018 Pro",
          Price: "€2000",
          Quantity: "2",
          "Total Price": "€4000"
        },
        {
          Description: "Macbook 2018 Pro",
          Price: "€2000",
          Quantity: "2",
          "Total Price": "€4000"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
