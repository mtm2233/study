/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:59:36
 * @LastEditTime: 2022-04-19 15:26:18
 * @LastEditors: mTm
 */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'web',
  // watch: true,
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
  devServer: {
    host: '127.0.0.1',
    port: 8086,
    // 开启模块热替换(HMR)
    hot: true,
    open: false,
    static: {
      // 找不到的文件，再从这里找
      directory: path.resolve(__dirname, './public'),
    },
    // 静态文件开启gzip
    compress: true,
    proxy: {
      "/api": {
        target: 'https://api.isdream.cn',
        pathRewrite: {
          "^/api": ""
        },
        // 代理没有证书或证书过期的https
        secure: false,
        changeOrigin: true,
      }
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.cjs', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
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
