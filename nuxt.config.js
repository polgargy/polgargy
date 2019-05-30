const pkg = require('./package')
import webpack from 'webpack'
require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'hu'
    },
    title: process.env.APP_TITLE,
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
    '~plugins/dom.js',
    '~plugins/i18n.js',
    '~plugins/smoothscroll.client.js',
    '~plugins/vuegallery.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: process.env.ANALYTICS,
  },

  transition: {
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
  },
  env: {
    defaultLocale: process.env.DEFAULT_LOCALE,
    refPath: process.env.REF_PATH
  },
  generate: {
    routes: function() {
      // Fetch all of the dynamic routes:
      const routes = [
        '/references/borsanyizsuzsanna',
        '/references/otpbanka',
        '/references/kesmarki',
        '/references/cngtoltoallomas',
        '/references/ceginformacio',
        '/references/transferpricing24',
        '/references/ugyfelportal',
        '/references/scafellpike'
      ]

      return routes

      // return axios.get('https://nuxt-blog-74b24.firebaseio.com/posts.json') // not the nuxt module, the "original" axios package
      //   .then(res => {
      //     const routes = []
      //     for (const key in res.data) {
      //       routes.push({
      //         route: '/posts/' + key,
      //         payload:  {postData: res.data[key]}
      //       })
      //     }
      //     return routes
      //   })
      // return [
      // '/posts/-LVckMxPJBIMKp7cual5'
      // ]
    }
  }
}
