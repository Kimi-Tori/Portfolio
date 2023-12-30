<template>
  <div class="portfolio-item" v-for="item in items" :key="item">
    <v-img class="portfolio-item__image" :src="item.src" />

    <div class="portfolio-item__text">
      <h3>{{ item.title }}</h3>
      <p>{{ item.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio-item",
  props: {
    items: Object,
  },
};
</script>

<style lang="scss">
.portfolio-item {
}
</style>
