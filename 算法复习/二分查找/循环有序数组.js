/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-17 19:36:32
 * @LastEditTime: 2021-10-17 21:33:26
 * @LastEditors: mTm
 */
function loopSearch(arr, k) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (arr[mid] === k) {
      return mid
    }
    // 有序
    if (arr[mid] >= arr[low]) {
      if (arr[low] <= k && arr[mid] > k) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (arr[mid] < k && arr[high] >= k) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }

  return -1
}

module.exports = loopSearch