<template>
  <div :class="['intro', { 'dark-theme': isDarkTheme }]">
    <theme-button
      :dark="isDarkTheme"
      class="intro__theme-button"
      @click="toggleTheme"
    />
    <intro-template :dark="isDarkTheme" class="intro__template" />
  </div>
</template>

<script>
import IntroTemplate from "@/components/intro/intro-template.vue";
import ThemeButton from "@/components/elements/theme-button.vue";

export default {
  name: "intro",
  components: { ThemeButton, IntroTemplate },
  data() {
    return {
      isDarkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.updateBodyClass();
      localStorage.setItem('isDarkTheme', this.isDarkTheme);
    },
    updateBodyClass() {
      document.body.classList.toggle("dark-theme", this.isDarkTheme);
    },
  },
  created() {
    this.isDarkTheme = this.$store.state.isDarkTheme || (localStorage.getItem('isDarkTheme') === 'true');
    this.updateBodyClass();
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
    z-index: 2;
    transform: translateX(-50%);
  }
}
</style>
