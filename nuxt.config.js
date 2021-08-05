export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', // 'server',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://sangiosleague.it',
    axios: {
      baseURL: process.env.API_URL || 'https://sangiosleague.it/api/v1'
    }
  },

  axios: {
    proxyHeaders: false,
    credentials: false
  },

  server: {
    port: process.env.PORT || 3001 // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sangios League',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Torneo di Calcio a 5 che si svolge a San Giovanni Lipioni (CH) durante il mese di agosto' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  loading: {
    color: '#000080',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/style'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-awesome-swiper.client.js', mode: 'client' },
    '~plugins/persistedState',
    '~/plugins/lodash.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg'
  ],

  moment: {
    defaultLocale: 'it',
    locales: ['it'],
    defaultTimezone: 'Europe/Rome',
    timezone: false
  },

  styleResources: {
    scss: [
      './assets/vars/*.scss',
      './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ],
    hoistUseStatements: true // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    ['bootstrap-vue/nuxt', {
      icons: false
    }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://auth.nuxtjs.org/guide/setup
    '@nuxtjs/auth-next',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    ['nuxt-social-meta',
      {
        url: 'https://sangiosleague.it/',
        title: 'Sangios League',
        site_name: 'Sangios League Site',
        description: 'Torneo di Calcio a 5 che si svolge a San Giovanni Lipioni (CH) durante il mese di agosto',
        img: 'https://sangiosleague.it/logo.jpeg',
        img_size: { width: '1076px', height: '1010px' },
        locale: 'it_IT',
        theme_color: '#000080'
      }
    ]
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    },
    plugins: ['~/plugins/auth.js'],
    strategies: {
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,email,picture{url}'
        },
        clientId: '1921460184702496',
        scope: ['public_profile', 'email']
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Sangios League',
      short_name: 'Sangios League',
      description: 'Torneo di Calcio a 5 che si svolge a San Giovanni Lipioni (CH) durante il mese di agosto',
      lang: 'it'
    },
    icon: {
      fileName: 'maskable_icon_x512.png'
    },
    meta: {
      /* meta options */
      name: 'Sangios League',
      description: 'Torneo di Calcio a 5 che si svolge a San Giovanni Lipioni (CH) durante il mese di agosto',
      author: 'Christophe Thiebaud',
      theme_color: '#000080',
      lang: 'it'
    }
  },

  fontawesome: {
    icons: {
      brands: [
        'faGithub'
      ],
      solid: [
        'faHome',
        'faList',
        'faFlag',
        'faFutbol',
        'faEllipsisH',
        'faArrowLeft',
        'faMinus',
        'faDotCircle',
        'faExternalLinkAlt',
        'faUser',
        'faExclamationTriangle',
        'faSignOutAlt'
      ]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend (config, ctx) {
      // Extend only webpack config for client-bundle
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  },

  serverMiddleware: [{ path: '/api/count', handler: '~/api/count.js' }]
}
