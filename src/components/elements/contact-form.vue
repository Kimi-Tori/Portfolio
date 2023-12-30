<template>
  <form class="contact-form text-center text-md-left">
    <v-text-field hide-details="auto" label="Name" variant="underlined" />
    <v-text-field
      hide-details="auto"
      label="E-mail"
      variant="underlined"
      class="mt-2"
    />
    <v-textarea
      hide-details="auto"
      no-resize
      label="Message"
      variant="underlined"
      class="contact-form__textarea mt-2"
    />
    <button-purple class="contact-form__button mt-10"
      >Send Message</button-purple
    >
  </form>
</template>

<script>
import ButtonPurple from "@/components/elements/button-purple.vue";

export default {
  name: "contact-form",
  components: { ButtonPurple },
};
</script>

<style lang="scss">
.contact-form {
  &__textarea {
    & textarea {
      max-height: 75px !important;
    }
  }

  &__button {
    height: 50px !important;
    width: 150px !important;

    & .v-btn__content {
      font-size: 16px;
    }
  }
}
</style>
