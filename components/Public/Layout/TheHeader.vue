<template>
  <header
    :class="headerClass"
    class="fixed-top">
    <nav
      id="navbar"
      class="navbar navbar-expand-lg navbar-dark">
      <a
        class="navbar-brand"
        href="#">
        <img
          src="~static/images/logo.svg"
          alt="Logo"
          class="img-fluid logo">
      </a>
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
                Rólam
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#services">
                Szolgáltatások
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#references">
                Referenciák
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#contact">
                Kapcsolat
              </a>
            </li>
          </template>

          <!-- Reference page -->
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/">
                Vissza
              </nuxt-link>
            </li>
          </template>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              HU
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="#">HU</a>
              <a
                class="dropdown-item"
                href="#">EN</a>
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
      headerClass: ''
    }
  },
  watch: {
    $route: function() {
      this.checkIfHomePage()
    }
  },
  created() {
    this.checkIfHomePage()
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
      } else {
        this.headerClass = ''
      }
    }
  }
}
</script>
