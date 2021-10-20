/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-10-16 23:10:15
 * @LastEditTime: 2021-10-16 23:26:30
 * @LastEditors: mTm
 */
function binarySearch(arr, k) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (arr[mid] === k) {
      return mid
    }

    if (arr[mid] > k) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

// 递归
function binarySearchRecursion(arr, k) {
  return binarySearchRecursion_c(arr, k, 0, arr.length - 1)
}

function binarySearchRecursion_c(arr, k, low, high) {
  if (low > high) {
    return - 1
  }

  const mid = low + ((high - low) >> 1)

  if (arr[mid] === k) {
    return mid
  }

  if (arr[mid] > k) {
    return binarySearchRecursion_c(arr, k, low, mid - 1)
  } else {
    return binarySearchRecursion_c(arr, k, mid + 1, high)
  }
}

module.exports = {
  binarySearch,
  binarySearchRecursion,
}