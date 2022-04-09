/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-04-09 22:37:38
 * @LastEditTime: 2022-04-09 22:49:15
 * @LastEditors: mTm
 */
const btn = document.querySelector('#session-btn')

btn.onclick = function () {
  sessionStorage.setItem('name', 'sessionStorage')
}

// console.log(btn);