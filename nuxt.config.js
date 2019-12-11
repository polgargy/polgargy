// const pkg = require('./package')
import webpack from 'webpack'
require('dotenv').config()
const axios = require('axios')

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: process.env.DEFAULT_LOCALE
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: '/plugins/polyfill/polyfill.min.js'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: process.env.LOADING_COLOR,
    height: process.env.LOADING_HEIGHT
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/sass/public.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/common.js',
    '~plugins/filters.js',
    '~plugins/dom.js',
    '~plugins/i18n.js',
    '~plugins/smoothscroll.client.js',
    '~plugins/vuegallery.client.js'
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  styleResources: {
    scss: [
      '~assets/sass/_bootstrap.scss'
    ]
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: `${process.env.API_BASE_URL}/wp-json`
  },

  googleAnalytics: {
    id: process.env.ANALYTICS,
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  env: {
    apiHomeId: process.env.API_HOME_ID,
    defaultLocale: process.env.DEFAULT_LOCALE,
    apiBaseUrl: process.env.API_BASE_URL
  },
  generate: {
    routes: function() {
      // Fetch all of the dynamic routes:
      return axios.get(`${process.env.API_BASE_URL}/wp-json/wp/v2/references`)
        .then(res => {
          const routes = []
          res.data.forEach((el) => {
            routes.push('/references/' + el.acf.slug)
          })
          return routes
        })
    }
  }
}
