/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // const len = arr.length;
  // const _arr = [...arr];
  // let k = 0;
  // for (let i = 0; i < len; i++) {
  //   if (k >= len) {
  //     return;
  //   }

  //   arr[k++] = _arr[i];
  //   if (_arr[i] ==== 0 && k < len) {
  //     arr[k++] = 0;
  //   }
  // }

  const len = arr.length;
  let i;
  let count = 0;

  for (i = 0; i < len; i++) {
    count++;
    if (arr[i] === 0) {
      count++; // count of 0
    }
    if (count >= len) {
      break;
    }
  }

  for (let j = len - 1; j >= 0; j--) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
    } else if (arr[i] === 0 && count > len && j === len - 1) {
      //前面扫描时，最后一个是0，因为新增0会挤掉，所以只需要1个
      arr[j] = arr[i]; //这里arr[i] === 0
    } else {
      arr[j] = arr[i]; //非最后一个，arr[i] === 0，但占据2个位置
      arr[j - 1] = arr[i];
      j--;
    }
    i--;
  }
};
// @lc code=end
