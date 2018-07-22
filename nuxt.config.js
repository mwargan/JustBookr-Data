require('dotenv').config()

module.exports = {
  /*
   ** Build configuration
   */
  build: {},
  /*
   ** Headers
   ** Common headers are already provided by @nuxtjs/pwa preset
   */
  head: {
    title: "JustBookr Time",
    titleTemplate: '%s - ' + 'JustBookr Time',
    meta: [
      { hid: 'description', name: 'description', content: 'JustBookr PWA project' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3e73b9' },
  /*
   ** Customize app manifest
   */
  manifest: {
    theme_color: '#3e73b9'
  },
  /*
   ** Modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/dotenv', { only: ['PASSPORT_PASSWORD_GRANT_ID'] }]
  ],
  /*
   ** Auth options
   */
  auth: {
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      user: "/",
      home: "/explore"
    },
    strategies: {
      local: false,
      password_grant: {
        _scheme: "local",
        endpoints: {
          login: {
            url: "/oauth/token",
            method: "post",
            propertyName: "access_token"
          },
          logout: false,
          user: {
            url: "api/v1/me",
            method: 'get',
            propertyName: false
          }
        }
      },
      password_grant_custom: {
        _scheme: "~/auth/schemes/PassportPasswordScheme.js",
        client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
        client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
        endpoints: {
          login: {
            url: "/oauth/token",
            method: "post",
            propertyName: "access_token"
          },
          logout: false,
          user: {
            url: "api/v1/me",
            method: 'get',
            propertyName: false
          }
        }
      },
      'laravel.passport': {
        url: "https://justbookr.com",
        client_id: process.env.PASSPORT_CLIENT_ID,
        client_secret: process.env.PASSPORT_CLIENT_SECRET,
        userinfo_endpoint: "https://justbookr.com/api/v1/me",
      }
    }
  },
  /*
   ** Router options
   */
  router: {
    middleware: ['auth']
  },
  /*
   ** Axios options
   */
  axios: {
    // proxyHeaders: false
    baseURL: process.env.LARAVEL_ENDPOINT
  }
}
