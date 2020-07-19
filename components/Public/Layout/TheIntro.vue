<template>
  <section id="intro" class="text-center">
    <div class="pv-container text-center">
      <div :pv-mediapath="introBackground" class="pv-block" />

      <div class="title-container">
        <h1>{{ intro[`title_${locale}`] }}</h1>
        <h2>{{ intro[`subtitle_${locale}`] }}</h2>
      </div>
    </div>

    <template v-if="isHomePage">
      <SlideDown :slide-to="'#about'" />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

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
    },
    introBackground() {
      return this.windowWidth > 992
        ? this.intro.background
        : this.intro.background_sm
    }
  },
  watch: {
    $route() {
      this.checkIfHomePage()
    }
  },
  created() {
    this.checkIfHomePage()
  },
  mounted() {
    window.addEventListener(
      'resize',
      _.throttle(this.handleResize, 500, { leading: false })
    )
    this.handleResize()

    require('parallax-vanilla')
    /* eslint-disable-next-line */
    pv.init({
      container: {
        height: '100vh'
      },
      block: {
        // speed: 1,
      }
    })
  },
  methods: {
    checkIfHomePage() {
      if (this.$route.name === 'references-slug') {
        this.isHomePage = false
        this.parallaxHeight = '30px'
      } else {
        this.isHomePage = true
        this.parallaxHeight = '100vh'
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
  color: $white;
  padding: 0;

  position: relative; // for SlideDown

  .pv-container {
    position: relative;
    transition: height 0.2s;

    body.home & {
      height: 100vh;
    }

    body.reference & {
      height: 300px !important;
    }

    .title-container {
      background: rgba(10, 10, 10, 0.7);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      padding: 1rem;
      width: 100%;
    }
  }
}

// >= 576px
@include media-breakpoint-up(sm) {
  section {
    .pv-container {
      .title-container {
        width: 80%;
      }
    }
  }
}

// >= 992px
@include media-breakpoint-up(lg) {
  section {
    .pv-container {
      .title-container {
        width: 60%;
      }
    }
  }
}
</style>
