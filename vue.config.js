module.exports = {
  css: {
    extract: false,

    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/main.scss";`
      },
      scss: {
        prependData: `@import "@/styles/main.scss";`
      }
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  }
};
