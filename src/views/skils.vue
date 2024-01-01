<template>
  <div :class="['skils', { 'dark-theme': isDarkTheme }]">
    <theme-button
      :dark="isDarkTheme"
      class="skils__theme-button"
      @click="toggleTheme"
    />
    <skils-intro :dark="isDarkTheme" class="skils__intro" />
    <skils-portfolio class="skils__portfolio" />
  </div>
</template>

<script>
import ThemeButton from "@/components/elements/theme-button.vue";
import SkilsIntro from "@/components/skils/skils-intro.vue";
import SkilsPortfolio from "@/components/skils/skils-portfolio.vue";

export default {
  name: "skils",
  components: { ThemeButton, SkilsIntro, SkilsPortfolio },
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
.skils {
  position: relative;
  background-color: $grey;
  transition: background-color 0.5s, color 0.5s;
  min-height: 100vh;
  height: 100%;

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
