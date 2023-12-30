<template>
  <v-card class="intro-about d-flex flex-column flex-md-row">
    <v-btn @click="close" class="intro-about__close">
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_7_384)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.04604 1.04604C2.44079 -0.348679 4.70208 -0.348679 6.09683 1.04604L25 19.9493L43.9033 1.04604C45.2979 -0.348679 47.5594 -0.348679 48.954 1.04604C50.3487 2.44079 50.3487 4.70208 48.954 6.09683L30.0508 25L48.954 43.9033C50.3487 45.2979 50.3487 47.5594 48.954 48.954C47.5594 50.3487 45.2979 50.3487 43.9033 48.954L25 30.0508L6.09683 48.954C4.70208 50.3487 2.44079 50.3487 1.04604 48.954C-0.348679 47.5594 -0.348679 45.2979 1.04604 43.9033L19.9493 25L1.04604 6.09683C-0.348679 4.70208 -0.348679 2.44079 1.04604 1.04604Z"
            fill="#EBEBEB"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_384">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </v-btn>
    <div
      class="intro-about__left pa-5 d-flex flex-column justify-center align-center align-md-start"
    >
      <div
        class="intro-about__left-container d-flex flex-column align-center align-md-start"
      >
        <span
          class="intro-about__left-container__span size-about__span-big d-none d-sm-block"
          >About Me</span
        >
        <h3 class="intro-about__left-container__title size-about__title">
          About Me
        </h3>
        <p
          class="intro-about__left-container__subtitle size-about__subtitle text-center text-md-left"
        >
          Semper auctor neque vitae <span>tempus</span> quam
          <span>pellentesque</span> nec nam aliquam sem et tortor consequat id
          porta nibh <span>venenatis</span> cras sed felis eget
          <span>velit</span> aliquet sagittis id consectetur purus ut faucibus
          pulvinar <span>elementum</span> integer enim neque volutpat ac
          tincidunt vitae semper quis lectus nulla at volutpat
          <span>diam</span> ut.
        </p>
        <div class="intro-about__left-container__border pt-3" />

        <div
          class="intro-about__left-container__skils d-flex mt-6 justify-center justify-md-start"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="intro-about__left-container__skils-item size-about__span d-flex flex-column align-center"
            :class="{ 'mr-8': index !== items.length - 1 }"
          >
            <v-img :src="item.svg" />
            <span class="mt-2">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="intro-about__right pa-5 d-flex flex-column justify-center">
      <div class="intro-about__right-container">
        <h3
          class="intro-about__right-container__title size-about__title text-center text-md-left"
        >
          Tell me
        </h3>
        <p
          class="intro-about__right-container__subtitle size-about__subtitle text-center text-md-left"
        >
          what kind of project you need
        </p>
        <contact-form class="mt-4" />
        <span
          class="intro-about__right-container__span size-about__span-big d-none d-sm-block"
          >Contacts</span
        >
      </div>
    </div>
  </v-card>
</template>

<script>
import ContactForm from "@/components/elements/contact-form.vue";

export default {
  name: "intro-about",
  components: { ContactForm },
  data() {
    return {
      items: [
        { svg: "src/assets/about/about-vue.svg", text: "Vue" },
        { svg: "src/assets/about/about-js.svg", text: "JavaScript" },
        { svg: "src/assets/about/about-ux.svg", text: "Ui / Ux" },
        { svg: "src/assets/about/about-html.svg", text: "HTML" },
      ],
    };
  },
  methods: {
    close() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style lang="scss">
.intro-about {
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
  min-height: 600px;

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    height: 30px !important;
    width: 30px !important;
    box-shadow: none !important;
    background-color: transparent !important;
    border-radius: 20px;
    min-width: 30px !important;

    @include up($md) {
      top: 50px;
      right: 50px;
      height: 70px;
      width: 70px;
    }

    & svg {
      width: 30px;
      height: 30px;

      @include up($md) {
        width: 70px;
        height: 70px;
      }
    }

    & path {
      transition: 0.2s ease;
      fill: $black;

      @include up($md) {
        fill: $grey;
      }
    }

    &:hover path {
      fill: $purple;
    }
  }

  &__left {
    position: relative;
    background-color: $grey;
    color: $text-black;
    overflow: hidden;
    width: 100%;

    @include up($md) {
      width: 50%;
    }

    &-container {
      max-width: 480px;
      width: 100%;
      margin: 0 auto;

      &__subtitle {
        & span {
          color: $purple;
        }
      }

      &__span {
        position: absolute;
        top: 50px;
        right: -100px;
        color: $text-black-alpha-40;

        @include up($md) {
          top: 0;
          right: -280px;
        }
      }

      &__border {
        border-bottom: 1px solid $black;
        max-width: 350px;
        width: 100%;
        height: 1px;
      }

      &__skils {
        &-item {
          width: 40px;

          @include up($sm) {
            width: 50px;
          }
        }
      }
    }
  }

  &__right {
    position: relative;
    background-color: $black;
    width: 100%;
    color: $grey;

    @include up($md) {
      width: 50%;
    }

    &-container {
      max-width: 480px;
      width: 100%;
      margin: 0 auto;

      &__span {
        position: absolute;
        bottom: 0;
        right: -30px;
        color: $text-black-alpha-40;

        @include up($md) {
          right: -120px;
        }
      }
    }
  }
}
</style>
