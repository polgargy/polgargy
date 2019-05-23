<template>
  <section class="services">

    <div class="container">
      <div class="row">
        <div
          v-for="s in services"
          :key="s.id"
          class="col-12 col-md text-center mb-4">
          <i
            :class="s.icon"
            class="mb-4"/>
          <p>{{ s.text[locale] }}</p>
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
      services: 'texts/getServices'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
