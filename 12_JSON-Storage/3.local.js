/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-09 22:37:50
 * @LastEditTime: 2022-04-09 22:49:30
 * @LastEditors: mTm
 */
const localBtn = document.querySelector('#local-btn')

localBtn.onclick = function () {
  localStorage.setItem('name', 'localStorage')
}