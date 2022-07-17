/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-12 22:25:43
 * @LastEditTime: 2022-07-12 10:43:03
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  let res = 1
  let i = n < 0 ? -n : n;

  /* while循环的次数即i作减半直到为1的次数，
  而x *= x;相当于对幂作加倍，加倍的次数正好等于减半的次数。
  但是由于i/2在i为奇数时会造成损失，损失量刚好是上一次的x值，
  需要把这个值乘到res里面做弥补，同时最后一次i/2必然为1即奇数，
  所以最终得到的x和损失量相乘得到最终结果 */
  while (i !== 0) {
    if (i % 2 !== 0) {
      res *= x
    }
    x *= x

    // console.log(i, res, x);

    i = i >> 1
    i = i < 0 ? -i : i
  }

  return n < 0 ? 1 / res : res
};
// @lc code=end
// console.log(myPow(2, 19));