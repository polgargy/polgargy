<template>
  <section id="reference">
    <h3>{{ ref[`title_${locale}`] }}</h3>

    <b-container>
      <b-row>
        <b-col>
          <div
            v-if="ref[`content_${locale}`]"
            v-html="ref[`content_${locale}`]"
          />

          <p v-if="ref.url">
            <a :href="ref.url" target="_blank">{{ ref.url }}</a>
          </p>
        </b-col>
      </b-row>

      <client-only>
        <VueGallery
          :images="ref.gallery.originals"
          :index="index"
          @close="index = null"
        />
      </client-only>

      <b-row class="my-4">
        <b-col
          v-for="(thumb, idx) in ref.gallery.thumbnails"
          :key="idx"
          cols="12"
          sm
          class="reference-item mb-4"
        >
          <b-img
            :alt="ref[`title_${locale}${idx}`]"
            :src="thumb"
            @click="index = idx"
            fluid
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <nuxt-link to="/" class="btn btn-primary"
            ><i class="fas fa-chevron-left" /> {{ $t('back') }}
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
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

<style scoped lang="scss">
.reference-item {
  cursor: pointer;
}

.blueimp-gallery {
  a.prev,
  a.next,
  a.close {
    color: $white;
  }
}
</style>
