/*
 * @Author: heinan
 * @Date: 2023-06-20 11:21:29
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-01 18:29:23
 */
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const dynamicProxyName = process.env.VUE_APP_API_URL

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  },
  devServer: {
    // 配置host
    host: 'localhost',
    // 端口号
    port: 8080,
    // 跨域代理
    proxy: {
      [dynamicProxyName]: {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          [`^${dynamicProxyName}`]: ''
        }
      }
    }
  }
})
