<template>
  <section
    id="references"
    class="border-bottom">

    <h3>{{ content.title.hu }}</h3>

    <div class="container-fluid">
      <div class="row">
        <div
          v-for="r in references"
          :key="r.id"
          class="reference-item col-12 col-sm-6 col-md-3 text-center">

          <nuxt-link
            :to="'/references/' + r.slug">

            <img
              :alt="r.title.hu"
              :src="'/images/references/thumbnails/' + r.images[0]"
              class="img-fluid">

            <h4>{{ r.title.hu }}</h4>
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
      content: 'texts/getReferences',
      references: 'references/getAll'
    })
  }
}
</script>
