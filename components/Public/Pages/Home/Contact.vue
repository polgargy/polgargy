<template>
  <section
    id="contact"
    class="contact">
    <h3>{{ contact.text[locale] }}</h3>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto text-center">
          <!-- <p><strong>{{ contact.text[locale] }}</strong></p> -->
          <!-- <p><i class="fas fa-envelope"/> <a href="mailto:info@polgargy.hu">info@polgargy.hu</a></p>
          <p><i class="fas fa-phone"/> +36 30 6170323</p>
          <p><i class="fab fa-linkedin"/> <a
            href="https://www.linkedin.com/in/gy%C3%B6rgy-polg%C3%A1r-67517bb3/"
            target="_blank">LinkedIn</a></p>
          <p><i class="fab fa-facebook-square"/> <a
            href="https://www.facebook.com/polgargy.hu"
            target="_blank">Facebook</a></p> -->
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
                  <i class="fas fa-phone"/>
                </td>
                <td>
                  +36 30 6170323
                </td>
              </tr>
              <tr>
                <td>
                  <i class="fab fa-linkedin"/>
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/gy%C3%B6rgy-polg%C3%A1r-67517bb3/"
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
