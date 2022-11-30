<template>
  <section class="services">
    <div class="animate__animated">
      <b-container>
        <b-row>
          <b-col v-for="(s, idx) in services.services" :key="idx" cols="12" md class="service text-center">
            <i :class="s.icon.class" class="mb-4" />
            <p>{{ s[`title_${locale}`] }}</p>
          </b-col>
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
      services: 'texts/getServices'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped lang="scss">
.service {
  margin-bottom: 1.5rem;

  i {
    font-size: $h3-font-size;
  }
}

// >= 992px
@include media-breakpoint-up(lg) {
  .service {
    margin-bottom: 0;

    p {
      margin-bottom: 0;
    }
  }
}
</style>
