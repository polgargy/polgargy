// const pkg = require('./package')
import webpack from 'webpack'
require('dotenv').config()

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
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_BASE_URL
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
    apiHomeId: process.env.API_HOME_ID,
    defaultLocale: process.env.DEFAULT_LOCALE
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
