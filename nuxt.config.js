const pkg = require('./package')
import webpack from 'webpack'
require('dotenv').config()

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION },
      { hid: 'keywords', name: 'keywords', content: process.env.APP_KEYWORDS }
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
    '~plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/dotenv'
  ],

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
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'moment': 'moment'
      })
    ]
  }
}
