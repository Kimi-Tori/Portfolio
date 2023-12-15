<template>
  <section class="intro-template d-flex align-center justify-center">
    <v-container class="intro-template__container">
      <img
        src="@/assets/intro/intro-background-logo.svg"
        class="intro-template__container-image"
      />

      <div class="intro-template__container-text">
        <h1 class="h1">Sergey Aldushin</h1>
        <p class="mt-6 size-parag">Front-end Developer</p>

        <v-btn class="intro-template__container-text__button">About Me</v-btn>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "itro-template",
};
</script>

<style lang="scss">
.intro-template {
  min-height: 100vh;
  color: $text-black;

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

      &__button {
        margin-top: 78px;
        box-shadow: none !important;
        height: 80px !important;
        width: 200px !important;
        border-radius: 20px !important;
        background-color: $purple !important;

        & .v-btn__content {
          color: $grey;
          text-transform: none;
          font-family: "League Spartan";
          font-size: 24px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
  }
}
</style>
