/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-08 13:58:47
 * @LastEditTime: 2022-01-08 23:10:18
 * @LastEditors: mTm
 */
// bf rk kmp bm

// 暴力匹配
function bf(main, pattern) {
  for (let i = 0; i < main.length; i++) {
    let j = 0;
    while (pattern[j] && main[i + j] === pattern[j++]) {}
    if (!pattern[j]) {
      return true;
    }
  }
  return false;
}

module.exports = bf