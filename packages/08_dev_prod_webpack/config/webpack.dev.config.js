/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-19 15:34:49
 * @LastEditTime: 2022-04-19 16:05:07
 * @LastEditors: mTm
 */
const path = require('path')
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8086,
    hot: true,
    open: true,
    static: {
      // 找不到的文件，再从这里找
      directory: path.resolve(__dirname, '../public'),
    },
    // 静态文件开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'https://api.isdream.cn',
        pathRewrite: {
          '^/api': '',
        },
        // 代理没有证书或证书过期的https
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
