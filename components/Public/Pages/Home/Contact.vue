<template>
  <section
    id="contact"
    class="contact">
    <h3>{{ contact.text[locale] }}</h3>

    <div class="container">
      <div class="row">
        <div class="col text-center">
          <!-- <p><strong>{{ contact.text[locale] }}</strong></p> -->
          <p><i class="fas fa-phone"/> <a href="mailto:info@polgargy.hu">info@polgargy.hu</a></p>
          <p><i class="fas fa-envelope"/> +36 30 6170323</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      contact: 'texts/getContact'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
