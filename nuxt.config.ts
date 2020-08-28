const pkg = require('./package')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

import { NuxtConfig  } from "@nuxt/types";

const config: NuxtConfig  = {
  mode: 'universal',
  env: {
    BaseUrl: '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/custom-theme-antd.less',
    '@/assets/style/reset.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  styleResources: {
    less: [
      './assets/style/mixin.less',
      './assets/style/variables.less',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        "postcss-px-to-viewport": {
          unitToConvert: "px",
          viewportWidth: 750,
          unitPrecision: 3,
          propList: [
            "*"
          ],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [
            /(\/|\\)(node_modules)(\/|\\)/,
          ] ,
        }
      }
    },
    loaders: {
      ts: {
        silent: true
      },
      tsx: {
        silent: true
      },
      jpg: {
        silent: true
      },
      less: {
      // @ts-ignore
        lessOptions: {
          javascriptEnabled: true,
        }
      },
    },
    extend(config, ctx) {
      if (!config.resolve) {
        config.resolve = {};
      }
      if (!config.resolve.plugins) {
          config.resolve.plugins = [];
      }
      config.resolve.plugins.push(new TsconfigPathsPlugin({configFile: "./tsconfig.json"}));
    }
  }
}

export default config;
