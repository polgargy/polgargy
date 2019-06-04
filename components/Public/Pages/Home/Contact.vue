<template>
  <section
    id="contact"
    class="contact">
    <h3>{{ contact.text[locale] }}</h3>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto text-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <i class="fas fa-envelope"/>
                </td>
                <td>
                  <a href="mailto:info@polgargy.hu">info@polgargy.hu</a>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fab fa-linkedin"/>
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/polgargy"
                    target="_blank">LinkedIn</a>
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fab fa-facebook-square"/>
                </td>
                <td>
                  <a
                    href="https://www.facebook.com/polgargy.hu"
                    target="_blank">Facebook</a>
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
