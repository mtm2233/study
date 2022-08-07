/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-08-03 21:37:00
 * @LastEditTime: 2022-08-03 21:54:10
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=868 lang=typescript
 *
 * [868] 二进制间距
 */

// @lc code=start
function binaryGap(n: number): number {
  let dp = 0;
  let k = 0;
  let prek: number | undefined;
  while (n > 0) {
    if (n & 1) {
      if (prek !== undefined && dp < k - prek) {
        dp = k - prek;
      }
      prek = k;
    }
    n = n >> 1;
    k++;
  }

  return dp;
}
// @lc code=end
