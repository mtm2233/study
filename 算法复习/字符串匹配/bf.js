/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-17 23:21:58
 * @LastEditTime: 2021-11-18 00:19:51
 * @LastEditors: mTm
 */
function bf(main, pattern) {
  const pLen = pattern.length;
  const len = main.length - pLen;
  
  for (let i = 0; i <= len; i++) {
    let count = 0
    for (let j = 0; j < pLen; j++) {
      if (main[i + j] !== pattern[j]) {
        break;
      }
      count++
    }
    if (count === pLen) {
      return i
    }
  }

  return -1
}

module.exports = bf