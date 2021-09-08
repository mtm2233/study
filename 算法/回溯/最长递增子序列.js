/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-08-31 22:36:45
 * @LastEditTime: 2021-08-31 23:16:55
 * @LastEditors: mTm
 */
/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-08-31 22:36:45
 * @LastEditTime: 2021-08-31 22:53:43
 * @LastEditors: mTm
 */
function maxLen(arr) {
  const len = arr.length;
  if (!len || len === 1) {
    return len;
  }
  let distLen = Number.MIN_SAFE_INTEGER;
  let distNUms = [];
  const maxLen_c = (i, j, eLen, eNums) => {
    if (j === len) {
      if (eLen > distLen) {
        distLen = eLen;
        distNUms = eNums;
      }
      return;
    }
    // 没有选择开始点
    if (!eLen) {
      maxLen_c(i + 1, j + 1, eLen, []);
    }
    maxLen_c(i, j + 1, eLen, [...eNums]);
    if (arr[i] < arr[j]) {
      // 第一次
      if (!eLen) {
        maxLen_c(j, j + 1, eLen + 2, [...eNums, arr[i], arr[j]]);
      } else {
        maxLen_c(j, j + 1, eLen + 1, [...eNums, arr[j]]);
      }
    }
  };
  maxLen_c(0, 1, 0, []);

  console.log(distNUms);
  return distLen;
}
console.log(maxLen([10, 9, 2, 5, 3, 7, 101, 18]));
