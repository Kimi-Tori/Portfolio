<template>
  <div :class="['intro', { 'dark-theme': isDarkTheme }]">
    <intro-template :dark="isDarkTheme" class="intro__template" />
    <theme-button :dark="isDarkTheme" class="intro__theme-button" @click="toggleTheme" />
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
      isDarkTheme: true,
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
  }

  &__theme-button {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
