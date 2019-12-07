import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, req }) => {
  app.i18n = new VueI18n({
    locale: app.$getStoredItem('selectedLang')
      ? app.$getStoredItem('selectedLang')
      : process.env.defaultLocale,
    // locale: 'hu',
    fallbackLocale: 'hu',
    messages: {
      hu: require('~/i18n/hu.json'),
      en: require('~/i18n/en.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
