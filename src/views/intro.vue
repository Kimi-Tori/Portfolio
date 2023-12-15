<template>
  <div :class="['intro', { 'dark-theme': isDarkTheme }]">
    <intro-template class="intro__intro-template" />
    <theme-button class="intro__theme-button" @click="toggleTheme" />
  </div>
</template>

<script>
import IntroTemplate from "@/components/intro/intro-template.vue";
import ThemeButton from "@/components/elements/theme-button.vue";

export default {
  name: "intro",
  components: { IntroTemplate, ThemeButton },
  data() {
    return {
      isDarkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
  },
};
</script>

<style lang="scss">
.intro {
  position: relative;
  background-color: $grey;
  transition: background-color 0.5s, color 0.5s;

  &.dark-theme {
    background-color: $black;

    &__intro-template {
    }
  }

  &__intro-template {
  }

  &__theme-button {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
