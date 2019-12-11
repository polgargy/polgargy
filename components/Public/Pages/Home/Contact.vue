<template>
  <section id="contact" class="contact">
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
