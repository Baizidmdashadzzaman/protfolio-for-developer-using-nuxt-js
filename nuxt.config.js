export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Asadzaman : Programmer/Developer/Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is an awesome description of my Nuxt app',
      },
    ],
    link: [
	{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	{ rel: "stylesheet", href: "http://fonts.googleapis.com/css2?family=Jost:wght@300;400;600&display=swap"},
	{ rel: "stylesheet", href: "/resources/assets/css/style-starter.css"},

	],
	script: [
    { src: "/resources/assets/js/customjs1.js", body: true },
    { src: "/resources/assets/js/theme-change.js", body: true },
    { src: "/resources/assets/js/jquery-3.3.1.min.js", body: true },
    { src: "/resources/assets/js/customjs2.js", body: true },
    { src: "/resources/assets/js/owl.carousel.js", body: true },
    { src: "/resources/assets/js/customjs3.js", body: true },
    { src: "/resources/assets/js/jquery.magnific-popup.min.js", body: true },
    { src: "/resources/assets/js/customjs4.js", body: true },
    { src: "/resources/assets/js/jquery.waypoints.min.js", body: true },
    { src: "/resources/assets/js/jquery.countup.js", body: true },
    { src: "/resources/assets/js/customjs5.js", body: true },
    { src: "/resources/assets/js/bootstrap.min.js", body: true },

  ],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: []
};
