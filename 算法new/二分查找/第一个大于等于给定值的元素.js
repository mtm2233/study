/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-17 16:46:50
 * @LastEditTime: 2021-10-17 18:47:13
 * @LastEditors: mTm
 */
function firstGte(arr, k) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] >= k) {
      if (mid === 0 || arr[mid - 1] < k) {
        return mid
      } else {
        high = mid - 1
      }
    } else {
      low = mid + 1
    }
  }

  return -1
}

module.exports = firstGte