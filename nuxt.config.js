export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'styles/rest.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      // baseURL: 'http://34.80.255.76:9999'
      baseURL: 'http://localhost:9999',
      contentType : 'application/json'
    }],
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.orrg/options
  */
  axios: {
    // proxy: true,
    baseURL: 'http://34.80.255.76:9999'
    // // prefix: '/api', // it not work
    // credentials: true,
  },
  proxy: [
    // [
    //   '/api',
    //   {
    //     target: 'http://localhost:8080', // api主机
    //     pathRewrite: {'^/api': '/'}
    //   }
    // ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseURL: 'http://34.80.255.76:9999'
  }
}
