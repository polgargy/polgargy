<template>
  <div class="app-wrapper">
    <TheHeader/>
    <TheIntro/>

    <main>
      <nuxt/>
    </main>

    <TheFooter/>
  </div>
</template>

<script>
if (process.client) {
  require('bootstrap')
}

import TheHeader from '@/components/Public/Layout/TheHeader.vue'
import TheIntro from '@/components/Public/Layout/TheIntro.vue'
import TheFooter from '@/components/Public/Layout/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheIntro,
    TheFooter
  },
  head() {
    return {
      title: this.$t('titles.title') + ' - ' + this.$t('titles.subtitle')
    }
  }
}
</script>
