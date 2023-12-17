<template>
  <section class="intro-template d-flex align-center justify-center">
    <v-container class="intro-template__container">
      <img
        src="@/assets/intro/intro-background-logo.svg"
        class="intro-template__container-image"
      />

      <div :class="['intro-template__container-text d-flex flex-column align-center align-md-start', { '--dark': dark }]">
        <h1 class="h1">Sergey Aldushin</h1>
        <p class="mt-6 size-parag">Front-end Developer</p>

        <v-dialog v-model="dialog" width="1200">
          <template v-slot:activator="{ on }">
          <div class='d-flex mt-12'>
            <button-purple @click="dialog = true" class="intro-template__container-text__button">
              About Me
            </button-purple>

            <router-link :to="{ name: 'skils' }" class='ml-6'>
              <button-purple class='intro-template__container-text__button'>About My Skils</button-purple>
            </router-link>
          </div>
            
          </template>
          <template v-slot:default>
            <intro-about :dark="dark" @closeDialog="closeDialog" />
          </template>
        </v-dialog>
      </div>
    </v-container>
  </section>
</template>

<script>
import IntroAbout from '@/components/intro/intro-about.vue';
import ButtonPurple from '@/components/elements/button-purple.vue'

export default {
  name: "intro-template",
  components: { IntroAbout, ButtonPurple },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
.intro-template {
  min-height: 100vh;

  &__container {
    position: relative !important;
    max-height: 600px;
    min-height: 600px;
    height: 100%;

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
      position: relative;
      z-index: 1;
      margin-top: 120px;
      color: $text-black;

      &.--dark {
        color: $grey;
      }

      &__button {
        height: 80px !important;
        width: 200px !important;

        & .v-btn__content {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
