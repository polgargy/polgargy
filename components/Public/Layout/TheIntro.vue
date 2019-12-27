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
    <template v-if="isHomePage">
      <SlideDown :slide-to="'#about'" />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import SlideDown from '@/components/Public/Common/SlideDown.vue'

export default {
  components: {
    SlideDown
  },
  data() {
    return {
      isHomePage: true,
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
    $route() {
      this.checkIfHomePage()
    },
    windowWidth(width) {
      width > 992
        ? (this.$refs.introSection.style.backgroundImage = `url(${this.intro.background})`)
        : (this.$refs.introSection.style.backgroundImage = `url(${this.intro.background_sm})`)
    }
  },
  created() {
    this.checkIfHomePage()
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    checkIfHomePage() {
      if (this.$route.name === 'references-slug') {
        this.isHomePage = false
      } else {
        this.isHomePage = true
      }
    },
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

  position: relative; // for SlideDown

  .col {
    background: rgba(10, 10, 10, 0.7);
  }

  transition: height 0.2s;

  body.home & {
    height: 100vh;
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
