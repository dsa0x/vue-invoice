<template>
  <div class="main">
    <div class="desc big-font font-weight-bold text-uppercase">
      {{ company }}
    </div>
    <div class="addr">{{ address }}</div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: ["company", "address"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 0;
}

.desc {
  font-size: 3rem;
  letter-spacing: 0.3rem;
  background-image: linear-gradient(
    to right,
    $color-primary-light,
    $color-primary-dark
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 4px;
}
.addr {
  font-size: 2rem;
  color: $color-grey-primary;
  text-align: right;

  width: 40%;
}
</style>
