<template>
  <section id="contact" class="contact">
    <div class="animate-container">
      <h3>{{ contact[`title_${locale}`] }}</h3>

      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="center" class="text-center">
            <table>
              <tbody>
                <tr v-for="(contact, idx) in contact.contacts" :key="idx">
                  <td>
                    <i :class="contact.icon.class" />
                  </td>
                  <td>
                    <a :href="contact.link" target="_blank">{{
                      contact.title
                    }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
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
      contact: 'texts/getContact'
    }),
    locale() {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: $h4-font-size;
}

table {
  a {
    color: $white;
  }

  tr {
    td:nth-child(2) {
      text-align: left;
      padding-left: 0.5rem;
    }
  }
}
</style>
