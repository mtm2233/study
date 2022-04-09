/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-09 23:39:29
 * @LastEditTime: 2022-04-09 23:44:51
 * @LastEditors: mTm
 */
const [cookieBtns, cookieBtns10s] = document.querySelectorAll('.cookie-btn')

cookieBtns.onclick = function () {
  document.cookie="name=test"
}

cookieBtns10s.onclick = function () {
  document.cookie="name10s=test;max-age=10"
}