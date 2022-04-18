/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-18 09:59:36
 * @LastEditTime: 2022-04-18 10:00:42
 * @LastEditors: mTm
 */
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  }
}