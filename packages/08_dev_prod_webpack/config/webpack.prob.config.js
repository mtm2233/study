/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-19 15:34:57
 * @LastEditTime: 2022-04-19 15:43:32
 * @LastEditors: mTm
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.comm.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/.DS_store', '**/index.html'],
          },
        },
      ],
    }),
  ],
});
