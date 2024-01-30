<template>
  <div class="portfolio-item mb-4" v-for="(item, index) in items" :key="index">
    <a class="portfolio-item__link" :href="item.link" target="_blank">
      <v-img class="portfolio-item__link-image" :src="item.src" />
    </a>

    <span class="portfolio-item__span color-white h1">{{
      formatIndex(index)
    }}</span>
    <div class="portfolio-item__link-text">
      <h3 class="color-white">{{ item.title }}</h3>
      <p class="color-white">{{ item.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "portfolio-item",
  props: {
    items: Array,
  },
  methods: {
    formatIndex(index) {
      if (index < 9) {
        return `0${index + 1}`;
      } else {
        return index + 1;
      }
    },
  },
};
</script>

<style lang="scss">
.portfolio-item {
  max-width: 600px;
  position: relative;
  overflow: hidden;
  z-index: 2;
  border-radius: 20px;

  @include up($sm) {
    &:nth-child(2n) {
      margin-right: 50px;
    }
    &:nth-child(2n + 1) {
      margin-left: 50px;
    }
  }

  &:last-child {
    margin-bottom: 0 !important;
  }

  &:hover {
    @include up($md) {
      .portfolio-item__span {
        transform: translateY(0);
        opacity: 1;
        display: block;
      }

      .portfolio-item__link-text {
        transform: translateY(0);
        opacity: 1;
        display: block;
      }
    }
  }

  &__link {
    @include up($md) {
      /* &:hover {
        filter: blur(1px);
      } */
    }
  }

  &__span {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: ease 0.2s;

    @include up($md) {
      transform: translateY(-110%);
      opacity: 0;
    }
  }

  &__link-text {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 10px;
    width: 100%;
    transition: ease 0.2s;
    background: linear-gradient(
      0deg,
      rgba(49, 49, 49, 1) 20%,
      rgba(25, 25, 25, 0) 100%
    );

    @include up($md) {
      transform: translateY(110%);
      opacity: 0;
    }
  }
}
</style>
