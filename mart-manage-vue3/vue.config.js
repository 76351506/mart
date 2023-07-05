/*
 * @Author: heinan
 * @Date: 2023-06-20 11:21:29
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 10:44:43
 */
const { defineConfig } = require('@vue/cli-service')
const dynamicProxyName = process.env.VUE_APP_API_URL
const createThemeColorReplacerPlugin = require('./src/theme/theme-color-replacer.plugin.config')

const { query } = require('./server/mysql')
const { v4: uuidv4 } = require('uuid')
var bodyParser = require('body-parser')

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [createThemeColorReplacerPlugin()]
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
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
