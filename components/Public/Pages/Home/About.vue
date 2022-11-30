<template>
  <section id="about" class="about">
    <div class="animate__animated">
      <b-container>
        <b-row align-v="center">
          <b-col cols="8" offset="2" lg="4" offset-lg="0">
            <b-img :src="about.profile_pic.url" :alt="about.profile_pic.title" fluid class="shadow" />
          </b-col>

          <b-col cols="12" lg v-html="about[`content_${locale}`]" />
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      about: 'texts/getAbout'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped lang="scss">
img {
  margin-bottom: 1.5rem;
}

// >= 992px
@include media-breakpoint-up(lg) {
  img {
    margin-bottom: 0;
  }
}
</style>
