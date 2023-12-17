<template>
    <section class='skils-intro d-flex justify-center align-center'>
        <v-container class='skils-intro__container'>
            <div :class="['skils-intro__container-text d-flex flex-column align-center', { '--dark': dark }]">
                <h1 class='h1 text-center'>About My Skils</h1>
                <p class='mt-6 size-parag text-center'>
                    Below you will find a demo of my projects demonstrating my mastery of various web development technologies. Having knowledge of Vue.js, Vuetify, HTML, CSS, JavaScript, jQuery, Bootstrap and SCSS, as well as experience with Yii2, I bring a diverse set of skills to each project.<br />
                    <br />I am a strong advocate of a design approach focused primarily on mobile devices, and I am proud to create responsive and user-friendly interfaces. My portfolio includes a collection of websites and web applications that reflect my commitment to high-quality site displays.<br />
                    <br />Regardless of whether you are interested in my front-end development skills, I will be happy to share my work with you. Feel free to study examples of my projects to get an idea of my technical capabilities and attention to detail.
                </p>
            </div>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'skils-intro',
    props: {
        dark: Boolean,
    },
}
</script>

<style lang='scss'>
.skils-intro {
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
            color: $text-black;

            &.--dark {
                color: $grey;
            }
        }
    }
}
</style>