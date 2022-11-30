<template>
  <section id="intro" class="text-center">
    <template v-if="isMobile">
      <TheParallaxM :intro="intro" />
    </template>
    <template v-else>
      <TheParallaxD :intro="intro" />
    </template>

    <template v-if="isHomePage">
      <TheSlideDown :slide-to="'#about'" />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

import TheParallaxD from './Intro/TheParallaxD.vue'
import TheParallaxM from './Intro/TheParallaxM.vue'
import TheSlideDown from './Intro/TheSlideDown.vue'

export default {
  components: {
    TheParallaxD,
    TheParallaxM,
    TheSlideDown
  },
  data() {
    return {
      isHomePage: true,
      isMobile: true,
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
      this.isMobile = window.innerWidth <= 992
    },
  }
}
</script>

<style scoped lang="scss">
section {
  color: $white;
  padding: 0;
  position: relative; // for SlideDown

  ::v-deep .pv-container {
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
    ::v-deep .pv-container {
      .title-container {
        width: 80%;
      }
    }
  }
}

// >= 992px
@include media-breakpoint-up(lg) {
  section {
    ::v-deep .pv-container {
      .title-container {
        width: 60%;
      }
    }
  }
}
</style>
