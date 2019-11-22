<template>
  <section id="about" class="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-8 offset-2 col-lg-4 mb-4">
          <img
            src="~static/images/profile.jpg"
            alt="Profile"
            class="img-fluid shadow"
          />
        </div>

        <div v-html="about.text[locale]" class="col-12 col-lg" />
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
