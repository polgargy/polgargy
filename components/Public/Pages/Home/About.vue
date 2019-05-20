<template>
  <section
    id="about"
    class="border-bottom">

    <h3>{{ texts.title.hu }}</h3>

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <img
            src="~static/images/profile.jpg"
            alt="Profile"
            class="img-fluid shadow">
        </div>

        <div
          class="col-12 col-md"
          v-html="texts.text.hu"/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      texts: 'texts/getAbout'
    })
  }
}
</script>
