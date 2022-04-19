/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-19 23:17:47
 * @LastEditTime: 2022-04-19 23:27:48
 * @LastEditors: mTm
 */
const path = require('path');

const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: "source-map",
  devServer: {
    host: '127.0.0.1',
    port: 8001,
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, '../public')
    },
    compress: true,
    proxy: {
      "/api": {
        target: 'https://api.isdream.cn',
        pathRewrite: {
          "^/api": "",
        },
        secure: true,
        changeOrigin: true,
      }
    }
  },
});
