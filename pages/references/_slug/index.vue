<template>
  <section id="reference">

    <h3>{{ ref.title[locale] }}</h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <p v-if="ref.url">{{ ref.description[locale] }}</p>

          <p v-if="ref.url">
            <a
              :href="ref.url"
              target="_blank">{{ ref.url }}
            </a>
          </p>
        </div>
      </div>

      <gallery
        :images="ref.images.originals"
        :index="index"
        @close="index = null"/>

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
import VueGallery from 'vue-gallery'

export default {
  components: {
    gallery: VueGallery
  },
  head() {
    return {
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
    this.fetchRef(this.$route.params.slug)
  },
  methods: {
    ...mapActions({
      fetchRef: 'references/fetchOne'
    })
  }
}
</script>
