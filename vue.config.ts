/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-02-20 10:34:17
 * @LastEditTime: 2021-02-25 10:37:58
 * @LastEditors: mTm
 */
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    // 关闭每次保存都进行eslint检测
    // lintOnSave: false,
    publicPath: isProduction ? '/vue3/' : '/',
}