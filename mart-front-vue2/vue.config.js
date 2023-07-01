console.log(process.env.VUE_APP_URL);

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
