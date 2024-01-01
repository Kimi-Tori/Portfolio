<template>
  <section class="skils-portfolio">
    <v-container class="d-flex flex-column align-center justify-center">
      <portfolio-item :items='this.items' />
    </v-container>
  </section>
</template>

<script>
import PortfolioItem from "@/components/elements/portfolio-item.vue";

export default {
  name: "skils-portfolio",
  components: { PortfolioItem },
  data() {
    return {
      items: [
        {
          link: 'https://vk.com',
          src: "src/assets/portfolio/portfolio-img-1.jpg",
          title: "Samsung OLED",
          subtitle: "I made an OLED 8K page",
        },
        {
          link: 'https://vk.com',
          src: "src/assets/portfolio/portfolio-img-1.jpg",
          title: "Samsung OLED",
          subtitle: "I made an OLED 8K page",
        },
        {
          link: 'https://vk.com',
          src: "src/assets/portfolio/portfolio-img-1.jpg",
          title: "Samsung OLED",
          subtitle: "I made an OLED 8K page",
        },
        {
          link: 'https://vk.com',
          src: "src/assets/portfolio/portfolio-img-1.jpg",
          title: "Samsung OLED",
          subtitle: "I made an OLED 8K page",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skils-portfolio {
  background-color: $grey;
}
</style>
