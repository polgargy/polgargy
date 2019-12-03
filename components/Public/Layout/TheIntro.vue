<template>
  <section
    id="intro"
    ref="introSection"
    :style="{ backgroundImage: `url(${intro.background_sm})` }"
    class="text-center"
  >
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col">
          <h1>{{ intro[`title_${locale}`] }}</h1>
          <h2>{{ intro[`subtitle_${locale}`] }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      windowWidth: 0
    }
  },
  computed: {
    ...mapGetters({
      intro: 'texts/getIntro'
    }),
    locale() {
      return this.$i18n.locale
    }
  },
  watch: {
    windowWidth(width) {
      width > 992
        ? (this.$refs.introSection.style.backgroundImage = `url(${this.intro.background})`)
        : (this.$refs.introSection.style.backgroundImage = `url(${this.intro.background_sm})`)
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>
