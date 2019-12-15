<template>
  <header :class="headerClass" class="fixed-top">
    <b-navbar
      v-b-scrollspy="{ offset: scrollspyOffset }"
      toggleable="lg"
      type="dark"
    >
      <b-navbar-brand to="/">
        <b-img :src="logoUrl" fluid alt="Logo" class="logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <!-- Nav on Home page -->
          <template v-if="isHomePage">
            <b-nav-item
              v-for="(navItem, idx) in nav"
              :key="idx"
              :href="`#${navItem.slug}`"
            >
              {{ navItem[`title_${locale}`] }}
            </b-nav-item>
          </template>

          <!-- Locale -->
          <b-nav-item-dropdown
            :text="locale | uppercase"
            class="nav-item dropdown"
          >
            <b-dropdown-item
              v-for="(lang, idx) in langs"
              :key="idx"
              @click.prevent="changeLang(lang)"
              href="#"
              >{{ lang | uppercase }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isHomePage: true,
      headerClass: '',
      logoUrl: `${process.env.apiBaseUrl}/wp-content/uploads/logo.svg`,
      langs: ['hu', 'en'],
      scrollspyOffset: 50
    }
  },
  computed: {
    ...mapGetters({
      nav: 'texts/getNav'
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
    if (this.isHomePage) {
      window.SmoothScroll('a[href*="#"]', { offset: this.scrollspyOffset })
    }

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

        this.$animateElement('section.about .animate-container', 'fadeIn', 300)
        this.$animateElement(
          'section.services .animate-container',
          'fadeInUp',
          200
        )
        this.$animateElement(
          'section.references .animate-container',
          'fadeIn',
          200
        )
        this.$animateElement(
          'section.references .reference-item',
          'fadeIn',
          150
        )
        this.$animateElement(
          'section.contact .animate-container',
          'fadeInUp',
          100
        )
      } else {
        this.headerClass = ''
      }
    },
    changeLang(lang) {
      this.$setStoredItem('selectedLang', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped lang="scss">
header {
  nav {
    background: rgba(10, 10, 10, 0.95);

    img.logo {
      height: 30px;
    }
  }
}

@include media-breakpoint-up(lg) {
  header {
    nav {
      background: transparent;
      transition: background 0.25s linear;
    }

    &.sticky-header {
      nav {
        background: rgba(10, 10, 10, 0.95);
      }
    }
  }
}
</style>
