<template>
  <section id="references" class="references">
    <h3>{{ referencesText[`title_${locale}`] }}</h3>

    <div class="container-fluid">
      <div class="row">
        <div
          v-for="(r, idx) in references"
          :key="idx"
          class="reference-item col-12 col-sm-6 col-md-3 text-center"
        >
          <nuxt-link :to="'/references/' + r.slug">
            <img
              :alt="r[`title_${locale}`]"
              :src="r.screens[0].thumbnail.url"
              class="img-fluid"
            />

            <h4>{{ r[`title_${locale}`] }}</h4>
          </nuxt-link>
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
      referencesText: 'texts/getReferences',
      references: 'references/getAll'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
