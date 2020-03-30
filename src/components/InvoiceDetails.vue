<template>
  <div class="main-content">
    <div class="info">
      <div class="customer">
        <span class="light-grey">Billed To:</span>
        <span class=""> {{ customer.name }}</span>
        <span> {{ customer.company || "Daredev INC" }} </span>
        <span> {{ customer.email }}</span>
      </div>
      <div class="inv">
        <span class="light-grey">Invoice no:</span>
        <span>123</span>
      </div>
      <div class="due">
        <span class="light-grey">Due date:</span>
        <span>12.1.2020</span>
      </div>
    </div>
    <div class="amount">
      <span class="light-grey">Amount Due (USD)</span>
      <span class="big-font font-weight-bold">€5.000,00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetails",
  props: ["customer"],
  data() {
    return {};
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
