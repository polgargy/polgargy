<template>
  <div class="title-container">
    <h1>{{ intro[`title_${locale}`] }}</h1>
    <h2>{{ intro[`subtitle_${locale}`] }}</h2>
  </div>
</template>
  
<script>

export default {
  props: {
    intro: {
      type: Object
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>
  