<template>
  <div class="pv-container">
    <div :pv-mediapath="intro.background_sm" class="pv-block" />
    <TheTitle :intro="intro" />
  </div>
</template>

<script>
import TheTitle from './TheTitle.vue'

export default {
  components: {
    TheTitle
  },
  props: {
    intro: {
      type: Object
    }
  },
  mounted() {
    require('parallax-vanilla')
    /* eslint-disable-next-line */
    pv.init({
      container: {
        height: '100vh'
      }
    })
  }
}
</script>
