<template>
  <section
    id="references"
    class="references border-bottom">

    <h3>{{ $t('titles.references') }}</h3>

    <div class="container-fluid">
      <div class="row">
        <div
          v-for="r in references"
          :key="r.id"
          class="reference-item col-12 col-sm-6 col-md-3 text-center">

          <nuxt-link
            :to="'/references/' + r.slug">

            <img
              :alt="r.title[locale]"
              :src="refPath + r.slug + '/thumb1.png'"
              class="img-fluid">

            <h4>{{ r.title[locale] }}</h4>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      refPath: process.env.refPath
    }
  },
  computed: {
    ...mapGetters({
      references: 'references/getAll'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
