require('dotenv').config()

module.exports = {
  mode: 'spa',
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true
  },
  /*
   ** Headers
   ** Common headers are already provided by @nuxtjs/pwa preset
   */
  head: {
    title: "JustBookr Data Center",
    titleTemplate: '%s - ' + 'JustBookr Data Center',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'JustBookr Data Center for viewing and analyzing data on JustBookr' }
    ],
    noscript: [
      { innerHTML: 'Body No Scripts, Javascript is Required', body: true }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3e73b9',
    failedColor: '#FE4A49'
  },
  /*
   ** Customize app manifest
   */
  manifest: {
    theme_color: '#3e73b9',
    short_name: 'Data Center'
  },
  /*
   ** Modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
   ** Auth options
   */
  auth: {
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/users"
    },
    strategies: {
      local: false,
      'laravel.passport.custom': {
        _scheme: "oauth2",
        url: process.env.LARAVEL_ENDPOINT,
        client_id: process.env.PASSPORT_CLIENT_ID,
        authorization_endpoint: process.env.LARAVEL_ENDPOINT + "/oauth/authorize",
        response_type: "token",
        userinfo_endpoint: process.env.LARAVEL_ENDPOINT + "/api/v1/me",
        scope: '*',
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
   ** Loading indicator options
   */
  loadingIndicator: {
    background: "#f7f9fb"
  },
  /*
   ** Axios options
   */
  axios: {
    // proxyHeaders: false
    baseURL: process.env.LARAVEL_ENDPOINT
  }
}
