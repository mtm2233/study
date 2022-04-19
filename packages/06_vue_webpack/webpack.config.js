/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:59:36
 * @LastEditTime: 2022-04-19 14:03:19
 * @LastEditors: mTm
 */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // 设置模式
  // development 开发阶段， 会设置development
  // production 准备打包上线时，设置production
  mode: 'development',
  // 设置source-map, 建立js映射文件，方便代码调试
  devtool: "source-map",
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [
              //   '@babel/plugin-transform-arrow-functions',
              //   '@babel/plugin-transform-block-scoping'
              // ]
              // presets: [
              //   ["@babel/preset-env"]
              // ]
            }
          }
        ]
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-plugin',
      template: './public/index.html'
    }),
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
    new VueLoaderPlugin()
  ]
};
