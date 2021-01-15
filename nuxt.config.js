let obj1 = require("vuetify/es5/util/colors");
let colors = obj1.default;
console.log(process.env.PORT, process.env.HOST);
module.exports = {
  env: {
    baseURL: process.env.BASE_URL
  },
  server: {
    host: "0.0.0.0"
  },
  // Global page headers ( https://go.nuxtjs.dev/config-head )

  // serverMiddleware: ["~/api/index.js"],
  head: {
    script: [
      {
        src: "https://checkout.stripe.com/checkout.js",
        defer: true
      }
    ],
    titleTemplate: "%s - project",
    title: "project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/moment"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "mdbvue/nuxt",
    "nuxt-leaflet",
    "@nuxtjs/pwa"
  ],
  pwa: {
    meta: {
      title: "THE ESCAPER",
      author: "GHOFRANE,AHMED,DHIA"
    },
    manifest: {
      name: "THE ESCAPER",
      short_name: "ESCAPER",
      lang: "en"
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://the-escaper.herokuapp.com/",
    https: true
  },
  mdbvue: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
