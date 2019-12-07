<template>
  <section id="contact" class="contact">
    <h3>{{ contact[`title_${locale}`] }}</h3>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto text-center">
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
        </div>
      </div>
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
