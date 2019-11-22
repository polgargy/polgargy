<template>
  <div class="app-wrapper">
    <TheHeader />
    <TheIntro />

    <main>
      <nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TheHeader from '@/components/Public/Layout/TheHeader.vue'
import TheIntro from '@/components/Public/Layout/TheIntro.vue'
import TheFooter from '@/components/Public/Layout/TheFooter.vue'

if (process.client) {
  require('bootstrap')
}

export default {
  components: {
    TheHeader,
    TheIntro,
    TheFooter
  },
  head() {
    return {
      title: this.meta.title[this.locale],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description[this.locale]
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta.keywords[this.locale]
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      meta: 'texts/getMeta'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
