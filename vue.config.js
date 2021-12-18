module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 要公用的scss的路径
        prependData: `@import"@/assets/style/common.scss";`
      },
    },
  },
}
