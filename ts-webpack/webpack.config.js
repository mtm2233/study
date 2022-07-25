/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-25 22:08:03
 * @LastEditTime: 2022-07-25 22:29:55
 * @LastEditors: mTm
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ts-webpack',
      template: './index.html'
    }),
  ]
}