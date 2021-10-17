/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-17 16:47:15
 * @LastEditTime: 2021-10-17 19:00:38
 * @LastEditors: mTm
 */
function lastEqual(arr, k) {
  const len = arr.length - 1;
  let low = 0, high = len;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);

    if (arr[mid] > k) {
      high = mid - 1
    } else if(arr[mid] < k) {
      low = mid + 1
    } else {
      if (mid === len || arr[mid + 1] !== k) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }

  return -1;
}

module.exports = lastEqual