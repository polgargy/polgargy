<template>
  <div class="slide-down">
    <a :href="slideTo"><span /><span /><span /></a>
  </div>
</template>

<script>
export default {
  props: {
    slideTo: {
      type: String,
      default: () => '#'
    }
  }
}
</script>

<style scoped lang="scss">
$icon-width: 30px;

a {
  position: absolute;
  bottom: 90px;
  display: inline-block;
  color: $white;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    span {
      animation: none;
      opacity: 1;
    }
  }

  span {
    position: absolute;
    top: 0;
    width: $icon-width;
    height: $icon-width;
    margin-left: -#{$icon-width/2};
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    animation: pulse 2s infinite;
    opacity: 0;
    box-sizing: border-box;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      top: 16px;
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      top: 32px;
      animation-delay: 0.3s;
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
