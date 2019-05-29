<template>
  <header
    :class="headerClass"
    class="fixed-top">
    <nav
      id="navbar"
      class="navbar navbar-expand-lg navbar-dark">

      <nuxt-link
        to="/"
        class="navbar-brand"
        href="#">
        <img
          src="~static/images/logo.svg"
          alt="Logo"
          class="img-fluid logo">
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>

      <div
        id="navbar-content"
        class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <!-- Home page -->
          <template v-if="isHomePage">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#about">
                {{ $t('routes.about') }}
              </a>
            </li>

            <!-- <li class="nav-item">
              <a
                class="nav-link"
                href="#services">
                {{ $t('routes.services') }}
              </a>
            </li> -->

            <li class="nav-item">
              <a
                class="nav-link"
                href="#references">
                {{ $t('routes.references') }}
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#contact">
                {{ $t('routes.contact') }}
              </a>
            </li>
          </template>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              id="lang-switch"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              {{ locale | uppercase }}
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="lang-switch">
              <a
                v-for="lang in langs"
                :key="lang.id"
                :class="lang === locale ? 'active' : ''"
                class="dropdown-item"
                href="#"
                @click.prevent="changeLang(lang)">{{ lang | uppercase }}</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '#navbar'
        // 'data-offset': '10'
      }
    }
  },
  data() {
    return {
      isHomePage: true,
      headerClass: '',
      langs: ['hu', 'en']
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  },
  watch: {
    $route: function() {
      this.checkIfHomePage()
    }
  },
  created() {
    this.checkIfHomePage()

    if (this.isHomePage && process.client) {
      new SmoothScroll('a[href*="#"]')
    }
  },
  mounted() {
    this.checkScroll()
    this.$addEvent('scroll', this.checkScroll)
  },
  methods: {
    checkIfHomePage() {
      if (this.$route.name === 'references-slug') {
        this.isHomePage = false
      } else {
        this.isHomePage = true
      }
    },
    checkScroll() {
      if (this.$getScrollPos() > 0) {
        this.headerClass = 'sticky-header'

        this.$animateElement('section.about .row', 'fadeIn', 2)
        this.$animateElement('section.services .row', 'fadeInUp', 2)
        this.$animateElement(
          'section.references .reference-item',
          'fadeIn',
          1.2
        )
        this.$animateElement('section.contact .row', 'fadeInUp')
      } else {
        this.headerClass = ''
      }
    },
    changeLang(lang) {
      localStorage.setItem('selectedLang', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>
