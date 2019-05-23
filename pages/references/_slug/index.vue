<template>
  <section id="reference">

    <h3>{{ ref.title.hu }}</h3>

    <div class="container">
      <div class="row">
        <div class="col">
          <p>{{ ref.description.hu }}</p>

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
          <!-- FIXME alt -->
          <img
            :alt="ref.title.hu + idx"
            :src="thumb"
            class="img-fluid"
            @click="index = idx">
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p>
            <nuxt-link to="/">
              Vissza
            </nuxt-link>
          </p>
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
    })
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
