<template>
  <section id="reference">
    <h3>{{ ref[`title_${locale}`] }}</h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <div
            v-if="ref[`content_${locale}`]"
            v-html="ref[`content_${locale}`]"
          />

          <p v-if="ref.url">
            <a :href="ref.url" target="_blank">{{ ref.url }}</a>
          </p>
        </div>
      </div>

      <client-only>
        <VueGallery
          :images="ref.gallery.originals"
          :index="index"
          @close="index = null"
        />
      </client-only>

      <div class="row my-4">
        <div
          v-for="(thumb, idx) in ref.gallery.thumbnails"
          :key="idx"
          class="reference-item col-12 col-sm mb-4"
        >
          <img
            :alt="ref[`title_${locale}${idx}`]"
            :src="thumb"
            @click="index = idx"
            class="img-fluid"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <nuxt-link to="/" class="btn btn-primary"
            ><i class="fas fa-chevron-left" /> {{ $t('back') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title:
        this.ref[`title_${this.locale}`] +
        ' | ' +
        this.intro[`title_${this.locale}`] +
        ' - ' +
        this.intro[`subtitle_${this.locale}`],
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
      ref: 'references/getReference',
      intro: 'texts/getIntro'
    }),
    locale() {
      return this.$i18n.locale
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('references/fetchOne', params.slug)
  }
}
</script>
