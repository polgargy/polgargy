import Cookie from 'js-cookie'

export default ({ app }, inject) => {
  // Set Cookie and localStorage item
  inject('setStoredItem', (key, value) => {
    if (process.client) {
      localStorage.setItem(key, value)
    }

    Cookie.set(key, value)
  })

  // Set Cookie and localStorage item (if not exists)
  inject('setStoredItemIfEmpty', (key, value) => {
    if (process.client) {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, value)
      }
    }

    if (!app.$getCookie(key)) {
      Cookie.set(key, value)
    }
  })

  // Get Cookie or localStorage item
  inject('getStoredItem', (key) => {
    if (process.client) {
      return localStorage.getItem(key)
    } else {
      return app.$getCookie(key)
    }
  })

  inject('getCookie', (key, req = app.context.req) => {
    let ret = null

    if (req && req.headers.cookie) {
      const cookie = req.headers.cookie
        .split(';') // separated by ";"
        .find((c) => c.trim().startsWith(key + '='))

      if (cookie) {
        ret = cookie.split('=')[1]
      }
    }

    return ret
  })

  inject('getUrlParam', (paramName) => {
    // var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i')
    const reParam = new RegExp('(?:[?&]|&)' + paramName + '=([^&]+)', 'i')
    const match = window.location.search.match(reParam)
    return match && match.length > 1 ? match[1] : null
  })

  // inject('getDefaultLocale', key => {
  //   if (process.client) {
  //     const url = window.location.host
  //     const parts = url.split('.')
  //     const subdomain = parts[0]

  //     const locale = subdomain === 'en' ? 'en' : 'hu'

  //     app.$setStoredItem('selectedLang', locale)

  //     return locale
  //   } else {
  //     return process.env.defaultLocale
  //   }
  // })
}
