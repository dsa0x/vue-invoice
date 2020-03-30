<template>
  <div>
    <b-card
      class="my-card"
      alt="card"
      :img-src="require('../assets/green-card-1.jpg')"
    >
      <!-- <b-card-img :src="require('../assets/purple-card-2.jpg')"></b-card-img> -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "card"
};
</script>

<style lang="scss" scoped>
.my-card {
  height: 5rem;
  border-radius: 10px;
  background-size: cover;
  overflow: hidden;

  & img {
    object-fit: cover;
    height: 100%;
  }
}
</style>
