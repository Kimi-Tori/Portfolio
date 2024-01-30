<template>
  <div class="button-scroll">
    <div class="button-scroll__container">
      <div class="button-scroll__container-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "button-scroll",
};
</script>

<style lang="scss">
.button-scroll {
  width: 40px;
  height: 40px;
  cursor: pointer;

  &__container {
    position: relative;
    width: 40px;
    height: 40px;

    &-arrow {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      border-bottom: 3px solid $black;
      border-right: 3px solid $black;
      transform: translateX(-50%) rotate(45deg);
      transition: transform 0.3s ease-in-out;

      @include up($md) {
        transform: translateX(-50%) scaleY(-1) rotate(45deg);
      }
    }
  }

  @include up($md) {
    &:hover .button-scroll__container-arrow {
      transform: translateX(-50%) scale(1) rotate(45deg);
    }
  }
}

.dark-theme .button-scroll__container-arrow {
  border-bottom-color: $white;
  border-right-color: $white;
}
</style>
