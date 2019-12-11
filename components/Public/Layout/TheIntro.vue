<template>
  <section
    id="intro"
    ref="introSection"
    :style="{ backgroundImage: `url(${intro.background_sm})` }"
    class="text-center"
  >
    <b-container class="h-100">
      <b-row class="h-100" align-v="center">
        <b-col>
          <h1>{{ intro[`title_${locale}`] }}</h1>
          <h2>{{ intro[`subtitle_${locale}`] }}</h2>
        </b-col>
      </b-row>
    </b-container>
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

<style scoped lang="scss">
section {
  background-size: cover;
  background-position: center;

  color: $white;

  .col {
    background: rgba(10, 10, 10, 0.7);
  }

  transition: height 0.2s;

  body.home & {
    height: 600px;
  }

  body.reference & {
    height: 300px;
  }
}

// >= 992px
@include media-breakpoint-up(lg) {
  section {
    background-attachment: fixed;
  }
}
</style>
