<template>
    <div :class="['skils', { 'dark-theme': isDarkTheme }]">
        <skils-intro :dark="isDarkTheme" class='skils__intro' />
        <theme-button :dark="isDarkTheme" class="skils__theme-button" @click="toggleTheme" />
    </div>
</template>

<script>
import SkilsIntro from '@/components/skils/skils-intro.vue';
import ThemeButton from "@/components/elements/theme-button.vue";

export default {
    name: 'skils',
    components: { SkilsIntro, ThemeButton },
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
}
</script>

<style lang='scss'>
.skils {
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