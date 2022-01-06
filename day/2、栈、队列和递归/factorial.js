/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-06 09:16:48
 * @LastEditTime: 2022-01-06 20:31:47
 * @LastEditors: mTm
 */
function factorial(n) {
  if (n === 1 || n === 2) {
    return n
  }
  return n * factorial(n - 1)
}

module.exports = factorial