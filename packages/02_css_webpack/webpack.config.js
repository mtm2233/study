/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-04-18 09:59:36
 * @LastEditTime: 2022-04-18 10:45:21
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
    ],
  },
};
