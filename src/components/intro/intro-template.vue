<template>
  <section class="intro-template d-flex align-center justify-center">
    <v-container class="intro-template__container">
      <img
        src="@/assets/intro/intro-background-logo.svg"
        class="intro-template__container-image"
      />

      <div :class="['intro-template__container-text', { '--dark': dark }]">
        <h1 class="h1">Sergey Aldushin</h1>
        <p class="mt-6 size-parag">Front-end Developer</p>

        <v-dialog v-model="dialog" width="1200">
          <template v-slot:activator="{ on }">
            <button-purple @click="dialog = true" class="intro-template__container-text__button">
              About Me
            </button-purple>
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
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
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
        margin-top: 78px;
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
