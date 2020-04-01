module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/main.scss";`
      },
      scss: {
        prependData: `@import "@/styles/main.scss";`
      }
    }
  }
};
