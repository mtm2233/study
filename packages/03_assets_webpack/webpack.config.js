/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:59:36
 * @LastEditTime: 2022-04-18 17:26:52
 * @LastEditors: mTm
 */
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        // loader: 'css-loader'
        use: [
          // { loader: 'css-loader', options: {} },
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')],
            //   },
            // },
          },
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   // file-loader url-loader css 图片不能显示
      //   // @see https://blog.csdn.net/wuyxinu/article/details/122959978
      //   use: {
      //     // loader: 'file-loader',
      //     loader: 'url-loader',
      //     options: {
      //       name: 'img/[name].[hash:10].[ext]',
      //       limit: 10 * 1024,
      //     }
      //   },
      // },


      /* asset module type */

      /* file-loader */
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name].[hash:10][ext]',
      //   },
      // },

      /* url-loader */
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   type: 'asset/inline',
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // type: 'asset/resource', // file-loader
        // type: 'asset/inline', // url-loader
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
      }
    ]
  },
};
