<template>
  <section
    id="about"
    class="border-bottom">

    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-4 mb-4">
          <img
            src="~static/images/profile.jpg"
            alt="Profile"
            class="img-fluid shadow">
        </div>

        <div
          class="col-12 col-md"
          v-html="about.text[locale]"/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      about: 'texts/getAbout'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
