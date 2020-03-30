<template>
  <div class="main">
    <div class="amount border-bottom pb-5">
      <span class="light-grey">Amount Due (USD)</span>
      <span class="big-font font-weight-bold">€5000.00</span>
    </div>
    <div class="info">
      <div class="customer">
        <span class="light-grey pt-5">Billed To:</span>
        <span class=""> {{ customer.name }}</span>
        <span> {{ customer.company || "Daredev INC" }} </span>
        <span> {{ customer.email }}</span>
      </div>
      <div class="inv">
        <span class="light-grey">Invoice number:</span>
        <span>123</span>
      </div>
      <div class="due">
        <span class="light-grey">Due date:</span>
        <span>12.1.2020</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetails",
  data() {
    return {
      customer: {
        name: "Stefan Digga",
        email: "stef@aol.com"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;

  & div span {
    display: block;
    text-align: right;
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
  padding-bottom: 2rem;
}
</style>
