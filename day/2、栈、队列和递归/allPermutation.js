/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-01-06 09:18:12
 * @LastEditTime: 2022-01-06 20:50:22
 * @LastEditors: mTm
 */
function wrap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function allPermutation(arr) {
  const data = []
  function allPermutation_c(arr, index) {
    if (index < 0) {
      data.push(arr.join())
      return
    }
    for (let i = index; i >= 0; i--) {
      wrap(arr, i, index)
      allPermutation_c(arr, index - 1)
      wrap(arr, i, index)
    }
  }
  allPermutation_c(arr, arr.length - 1)
  return data
}

module.exports = allPermutation