<template>
  <div class="portfolio-item mb-8" v-for="item in items" :key="item">
    <a class='portfolio-item__link' :href='item.link' target='_blank'>
      <v-img class="portfolio-item__link-image" :src="item.src" />
    </a>

    <div class="portfolio-item__link-text">
      <h3 class='color-white'>{{ item.title }}</h3>
      <p class='color-white'>{{ item.subtitle }}</p>
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
  max-width: 600px;
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0 !important;
  }

  &:hover {
    .portfolio-item__link-text {
      transform: translateY(0);
      opacity: 1;
      display: block;
    }
  }

  &__link {
    &:hover {
      filter: blur(1px);
    }
  }

  &__link-text {
    position: absolute;
    left: 10px;
    bottom: 10px;
    transform: translateY(110%);
    opacity: 0;
    transition: ease 0.2s;
  }
}
</style>
