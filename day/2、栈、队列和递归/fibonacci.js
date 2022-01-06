/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-06 09:16:14
 * @LastEditTime: 2022-01-06 20:30:05
 * @LastEditors: mTm
 */
// function fibonacci(n) {
//   if (n === 1 || n === 2) {
//     return n
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

function fibonacci(n) {
  const map = new Map();
  map.set(1, 1);
  map.set(2, 2);
  function fibonacci_c(n) {
    const val = map.get(n);
    if (val) {
      return val;
    }
    const res = fibonacci_c(n - 1) + fibonacci_c(n - 2);
    map.set(n, res);
    return res;
  }
  return fibonacci_c(n);
}

module.exports = fibonacci;
