<template>
  <section id="references" class="references">
    <h3>{{ referencesText[`title_${locale}`] }}</h3>

    <b-container fluid>
      <b-row>
        <b-col
          v-for="(r, idx) in references"
          :key="idx"
          cols="12"
          sm="6"
          md="3"
          class="reference-item text-center"
        >
          <nuxt-link :to="'/references/' + r.slug">
            <b-img
              :alt="r[`title_${locale}`]"
              :src="r.screens[0].thumbnail.url"
              fluid
            />

            <h4>{{ r[`title_${locale}`] }}</h4>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      referencesText: 'texts/getReferences',
      references: 'references/getAll'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped lang="scss">
section {
  padding-bottom: 0;

  .reference-item {
    background: $black;
    padding: 0;
    position: relative;

    h4 {
      color: $white;
      font-weight: 700;
      opacity: 1;
      position: absolute;
      bottom: 50%;
      width: 100%;
      transform: translateY(50%);
    }

    img {
      opacity: 0.5;
    }

    &:hover {
      h4 {
        opacity: 0;
        transition: all 0.5s;
      }

      img {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }
}
</style>
