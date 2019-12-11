<template>
  <section class="services">
    <b-container>
      <b-row>
        <b-col
          v-for="(s, idx) in services.services"
          :key="idx"
          cols="12"
          md
          class="text-center mb-4"
        >
          <i :class="s.icon.class" class="mb-4" />
          <p>{{ s[`title_${locale}`] }}</p>
        </b-col>
      </b-row>
    </b-container>
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

<style scoped lang="scss">
i {
  font-size: $h3-font-size;
}
</style>
