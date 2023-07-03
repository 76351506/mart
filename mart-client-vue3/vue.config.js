/*
 * @Author: heinan
 * @Date: 2023-06-29 10:37:15
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-03 16:51:38
 */
const { defineConfig } = require('@vue/cli-service')

const dynamicProxyName = process.env.VUE_APP_API

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: false, // 枚举 false关闭
      maxEntrypointSize: 999999, // 最大入口文件大小
      maxAssetSize: 999999, // 最大资源文件大小
      assetFilter: function (assetFilename) {
        //只给出js文件的性能提示
        return assetFilename.endsWith('.js')
      }
    }
  },
  devServer: {
    // 配置host
    host: 'localhost',
    // 端口号
    port: 8088,
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
