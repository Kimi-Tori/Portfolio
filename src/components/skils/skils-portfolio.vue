<template>
  <section class="skils-portfolio" id="skils-portfolio">
    <v-container class="d-flex flex-column align-center justify-center">
      <portfolio-item :items="this.items" />
    </v-container>
    <div class="skils-portfolio__line"></div>
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
          link: "https://kassa24.ru/",
          src: "src/assets/portfolio/kassa24.jpg",
          title: "Kassa24",
          subtitle:
            "I have been working on several pages and on many elements in this project",
        },
        {
          link: "http://surgut.estee-clinic.ru/",
          src: "src/assets/portfolio/estee-clinic.jpg",
          title: "Estee-clinic",
          subtitle: "I've been working on a lot of pages in this project",
        },
        {
          link: "http://demo.realweb.ru/SamsungTV/",
          src: "src/assets/portfolio/samsung.jpg",
          title: "Samsung OLED",
          subtitle:
            "I have worked on each of the pages of this project, page 8k was made by me on my own",
        },
        {
          link: "https://igateway.digital/",
          src: "src/assets/portfolio/digital-gateway.jpg",
          title: "Digital Gateway",
          subtitle:
            "The project was created by me alone on the basis of wordpress",
        },
        {
          link: "https://stransit.io/",
          src: "src/assets/portfolio/smart-transit.jpg",
          title: "Smart Transit",
          subtitle:
            "The site was made by me completely, based on WordPress as well as on the best practices from the digital gateway site",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.skils-portfolio {
  position: relative;
  background-color: $grey;
  border-bottom: 5px solid $black;

  &__line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 100%;
    background-color: $black;
    z-index: 1;
  }
}
</style>
