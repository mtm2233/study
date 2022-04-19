/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-19 22:15:42
 * @LastEditTime: 2022-04-19 23:27:59
 * @LastEditors: mTm
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'web',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.cjs', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|ttf)/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.(js|mjs)/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(vue)$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new VueLoaderPlugin()
  ]
};
