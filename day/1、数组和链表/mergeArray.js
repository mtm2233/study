/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-05 10:36:03
 * @LastEditTime: 2022-01-05 15:32:34
 * @LastEditors: mTm
 */
function mergeArray(arr1, arr2) {
  const len1 = arr1.length,
    len2 = arr2.length;
  let k = 0,
    k1 = 0,
    k2 = 0;
  const arr = [];
  while (k1 < len1 && k2 < len2) {
    if (arr1[k1] <= arr2[k2]) {
      arr[k++] = arr1[k1++];
    } else {
      arr[k++] = arr2[k2++];
    }
  }

  // 填入剩余元素
  if (k1 < len1) {
    for (; k1 < len1; k1++) {
      arr[k++] = arr1[k1];
    }
  } else if (k2 < len2) {
    for (; k2 < len2; k2++) {
      arr[k++] = arr2[k2];
    }
  }

  return arr;
}

module.exports = mergeArray;
