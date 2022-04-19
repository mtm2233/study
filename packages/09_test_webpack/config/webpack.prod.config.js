/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 23:18:07
 * @LastEditTime: 2022-04-19 23:21:37
 * @LastEditors: mTm
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [
              '**/.DS_store',
              '**/index.html'
            ]
          }
        }
      ]
    }),
  ]
});