<template>
  <section class="services">
    <div class="container">
      <div class="row">
        <div
          v-for="(s, idx) in services.services"
          :key="idx"
          class="col-12 col-md text-center mb-4"
        >
          <i :class="s.icon.class" class="mb-4" />
          <p>{{ s[`title_${locale}`] }}</p>
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
