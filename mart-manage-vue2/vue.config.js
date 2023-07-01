/*
 * @Author: heinan
 * @Date: 2020-09-29 09:01:36
 * @Last Modified by: heinan
 * @Last Modified time: 2021-08-02 11:28:19
 */

// const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
// const pxtoviewport = require('postcss-px-to-viewport');
// const postcssImport = require('postcss-import');

module.exports = {
  devServer: {
    proxy: "http://127.0.0.1:7001",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/public/spa/" : "/",
  lintOnSave: false,
};
