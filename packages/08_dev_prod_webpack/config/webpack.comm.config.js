/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-19 15:34:41
 * @LastEditTime: 2022-04-19 15:45:19
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
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:10][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:10][ext]',
        },
      },
      {
        test: /\.(m?js)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    
    new HtmlWebpackPlugin({
      title: 'webpack-plugin',
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
};
