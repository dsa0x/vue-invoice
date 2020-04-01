<template>
  <div class="main">
    <div class="desc big-font bold-font" :class="`gradient-bg-${variant}`">
      <img v-if="logo" class="logo" :src="logo" :alt="company.name" />
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
  height: auto;
}

.desc {
  font-size: 3rem;
  letter-spacing: 0.3rem;
  letter-spacing: 4px;
  text-transform: uppercase;
}
.addr {
  font-size: 2rem;
  color: $color-grey-primary;
  text-align: right;

  width: 40%;
}
</style>
