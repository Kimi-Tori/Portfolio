<template>
    <v-btn class='button-purple'>
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    name: 'button-purple',
}
</script>

<style lang='scss'>
.button-purple {
    box-shadow: none !important;
    border-radius: 20px !important;
    background-color: $purple !important;

    & .v-btn__content {
        color: $grey;
        text-transform: none;
        font-family: "League Spartan";
        font-weight: 700;
        line-height: normal;
    }
}
</style>