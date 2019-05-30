<template>
  <section id="reference">

    <h3>{{ ref.title[locale] }}</h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <p v-if="ref.description">{{ ref.description[locale] }}</p>

          <p v-if="ref.url">
            <a
              :href="ref.url"
              target="_blank">{{ ref.url }}
            </a>
          </p>
        </div>
      </div>

      <no-ssr>
        <VueGallery
          :images="ref.images.originals"
          :index="index"
          @close="index = null"/>
      </no-ssr>

      <div class="row my-4">
        <div
          v-for="(thumb, idx) in ref.images.thumbnails"
          :key="idx"
          class="reference-item col-12 col-sm mb-4">
          <img
            :alt="ref.title[locale] + idx"
            :src="thumb"
            class="img-fluid"
            @click="index = idx">
        </div>
      </div>

      <div class="row">
        <div class="col">
          <nuxt-link
            to="/"
            class="btn btn-primary"><i class="fas fa-chevron-left"/> {{ $t('misc.back') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  head() {
    return {
      title:
        this.ref.title[this.locale] +
        ' | ' +
        this.$t('titles.title') +
        ' - ' +
        this.$t('titles.subtitle'),
      bodyAttrs: {
        class: 'reference'
      }
    }
  },
  data() {
    return {
      index: null
    }
  },
  computed: {
    ...mapGetters({
      ref: 'references/getReference'
    }),
    locale() {
      return this.$i18n.locale
    }
  },
  created() {
    // this.fetchRef(this.$route.params.slug)
    //
    // In order to use this.ref in the head(),
    // this have to be async, because if I change the lang on the home and then visit a reference page, it throws an error
  },
  methods: {
    // ...mapActions({
    //   fetchRef: 'references/fetchOne'
    // })
  },
  async fetch({ store, params }) {
    await store.dispatch('references/fetchOne', params.slug)
  }
}
</script>
