const session = require('express-session')
const webpack = require('webpack')
const MemoryStore = require('memorystore')(session)
const customEnv = process.env.CUSTOM_ENV

require('dotenv').config({ path: customEnv || '.env' })

module.exports = {
  env: {
    ...process.env
  },
  router: {
    linkActiveClass: 'select'
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '抖影电影 DOING MOVIE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: '/bootstrap/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/fonts/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', href: '/fonts/webfonts/style.css' },
      { rel: 'stylesheet', href: '/plugins/slick/slick.css' },
      { rel: 'stylesheet', href: '/plugins/slick/slick-theme.css' },
      { rel: 'stylesheet', href: '/plugins/fancyBox/jquery.fancybox.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { type: 'text/javascript', src: '/plugins/jquery.min.js' },
      { type: 'text/javascript', src: '/bootstrap/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/plugins/modernizr.js' },
      { type: 'text/javascript', src: '/plugins/fancyBox/jquery.fancybox.pack.js' },
      { type: 'text/javascript', src: '/plugins/slick/slick.js' },
      { type: 'text/javascript', src: '/js/script.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#666' },
  loading: '~/components/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/storage',
    '@/plugins/utils',
    '@/plugins/vee-validate',
    // '@/plugins/mixins',
    '@/plugins/components',
    '@/plugins/fetch',
    '@/plugins/apiHub',
    '@/plugins/query-string',
    '@/plugins/enum'
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
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    withCredentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
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
  serverMiddleware: [
    // body-parser middleware
    // bodyParser.json(),
    // session middleware
    session({
      store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
      }),
      secret: 'summer-is-cool',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 86400000 }
    }),
    '~/server/api'
    // { path: '/session', handler: '~/server/api' }
  ]
}
