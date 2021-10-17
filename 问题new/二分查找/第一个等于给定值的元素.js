/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-17 16:46:20
 * @LastEditTime: 2021-10-17 18:41:32
 * @LastEditors: mTm
 */
function firstEqual(arr, k) {
  let low = 0; high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (arr[mid] < k) {
      low = mid + 1
    } else if (arr[mid] > k) {
      high = mid - 1
    } else {
      if (mid === 0 || arr[mid - 1] !== k) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }

  return -1
}

module.exports = firstEqual