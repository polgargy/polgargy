<template>
  <section id="references" class="references">
    <div class="animate-container">
      <h3>{{ referencesText[`title_${locale}`] }}</h3>

      <b-container fluid>
        <b-row>
          <b-col
            v-for="(r, idx) in references"
            :key="idx"
            :style="{ animationDelay: `${(idx + 1) * 0.1}s` }"
            :sm="smClass"
            :md="mdClass"
            cols="12"
            class="reference-item text-center"
          >
            <nuxt-link :to="'/references/' + r.slug">
              <b-img :alt="r[`title_${locale}`]" :src="r.screens[0].thumbnail.url" fluid />

              <h4>{{ r[`title_${locale}`] }}</h4>
            </nuxt-link>
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
      referencesText: 'texts/getReferences',
      references: 'references/getAll'
    }),
    locale() {
      return this.$i18n.locale
    },
    smClass() {
      const reflength = this.references.length
      let cl = 12

      if (reflength % 3 === 0) {
        cl = 4
      } else if (reflength % 2 === 0) {
        cl = 6
      }

      return cl
    },
    mdClass() {
      const reflength = this.references.length
      let cl = 12

      if (reflength % 4 === 0) {
        cl = 3
      } else if (reflength % 3 === 0) {
        cl = 4
      } else if (reflength % 2 === 0) {
        cl = 6
      }

      return cl
    },
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

    // References are animated separately
    // @for $i from 1 through 8 {
    //   &:nth-of-type(#{$i}) {
    //     animation-delay: $i * 0.1s;
    //   }
    // }

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
