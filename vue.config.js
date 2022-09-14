const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/v-store/'
    : '/',
  transpileDependencies: true,
  css: {//this is used for autoimport style in all project
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/styles.scss";`
      },
    },
  },
  
});
  
