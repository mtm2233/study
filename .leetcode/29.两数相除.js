/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-05-20 20:38:07
 * @LastEditTime: 2022-07-11 11:15:17
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (divisor === 0) {
    return false;
  }

  let burden = false;
  let res = 0;
  if ((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)) {
    burden = true;
  }

  dividend = dividend < 0 ? -dividend : dividend;
  divisor = divisor < 0 ? -divisor : divisor;

  const divisors = [
    {
      divisor,
      n: 1,
    },
  ];

  let k = 0;

  while (dividend >= divisor) {
    const { divisor, n } = divisors[k];

    if (dividend >= divisor) {
      dividend -= divisor;
      res += n;

      if (dividend >= divisor) {
        divisors[++k] = {
          divisor: divisor << 1,
          n: n << 1,
        };
      }
    } else {
      --k;
    }
  }

  res = burden ? -res : res;

  // 环境只能存储 32 位有符号整数
  // -2147483648 ~ 2147483647
  if (res < -2147483648) {
    return -2147483648;
  } else if (res > 2147483647) {
    return 2147483647;
  }
  return res;
};
// @lc code=end