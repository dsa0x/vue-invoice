<template>
  <div class="main">
    <div
      class="desc big-font font-weight-bold text-uppercase"
      :class="`gradient-bg-${variant}`"
    >
      <b-img
        v-if="logo"
        class="logo"
        :src="logo"
        fluid
        :alt="company.name"
      ></b-img>
      {{ company.name }}
    </div>
    <div class="addr">{{ company.address }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "header",
  props: ["logo", "variant"],
  data() {
    return {};
  },
  computed: {
    ...mapState({
      company: state => state.Invoice.company
    })
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

.logo {
  width: 100%;
  max-width: 40px;
}

.desc {
  font-size: 3rem;
  letter-spacing: 0.3rem;
  letter-spacing: 4px;
}
.addr {
  font-size: 2rem;
  color: $color-grey-primary;
  text-align: right;

  width: 40%;
}
</style>
