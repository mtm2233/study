/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-17 16:47:39
 * @LastEditTime: 2021-10-17 19:03:27
 * @LastEditors: mTm
 */
function lastLte(arr, k) {
  const len = arr.length - 1;
  let low = 0, high = len;

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (arr[mid] <= k) {
      if (mid === len || arr[mid + 1] > k) {
        return mid
      } else {
        low = mid + 1
      }
    } else {
      high = mid - 1;
    }
  }

  return -1
}

module.exports = lastLte