<template>
  <section class="skils-intro d-flex justify-center align-center">
    <v-container class="skils-intro__container">
      <div
        :class="[
          'skils-intro__container-text d-flex flex-column align-center',
          { '--dark': dark },
        ]"
      >
        <h1 class="h1 text-center color-orange">About My Skils</h1>
        <p
          class="skils-intro__container-text__subtitle mt-6 size-parag text-center"
        >
          Below you will find a demo of my projects demonstrating my mastery of
          various web development technologies. Having knowledge of
          <span>Vue.js</span>, <span>Vuetify</span>, <span>HTML</span>,
          <span>CSS</span>, <span>JavaScript</span>, <span>jQuery</span>,
          <span>Bootstrap</span> and <span>SCSS</span>, as well as experience
          with <span>Yii2</span>, I bring a diverse set of skills to each
          project.<br />
          <br />I am a strong advocate of a design approach focused primarily on
          <span>mobile devices</span>, and I am proud to create
          <span>responsive</span> and <span>user-friendly</span> interfaces.
          <span>My portfolio</span> includes a collection of websites and web
          applications that reflect my commitment to
          <span>high-quality site displays</span>.<br />
          <br />Regardless of whether you are interested in my front-end
          development skills, I will be happy to share
          <span>my work with you</span>. Feel free to study examples of my
          projects to get an idea of my <span>technical capabilities</span> and
          <span>attention to detail</span>.
        </p>

        <router-link :to="{ name: 'intro' }" class="mt-8">
          <button-purple class="skils-intro__container-text__button"
            >Back To Home</button-purple
          >
        </router-link>
      </div>
    </v-container>
  </section>
</template>

<script>
import ButtonPurple from "@/components/elements/button-purple.vue";

export default {
  name: "skils-intro",
  components: { ButtonPurple },
  props: {
    dark: Boolean,
  },
};
</script>

<style lang="scss">
.skils-intro {
  &__container {
    position: relative !important;
    min-height: 100vh;

    &-image {
      width: 330px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;

      @include up($sm) {
        width: 500px;
      }

      @include up($md) {
        width: 700px;
        transform: translate(0, -50%);
        left: calc(100% - 700px);
      }
    }

    &-text {
      color: $text-black;
      margin-top: 120px;

      &.--dark {
        color: $grey;
      }

      &__subtitle {
        & span {
          color: $purple;
        }
      }

      &__button {
        width: 190px !important;
        height: 60px !important;

        @include up($md) {
          height: 80px !important;
          width: 200px !important;
        }

        & .v-btn__content {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
