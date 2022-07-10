/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-04 20:54:44
 * @LastEditTime: 2022-07-04 22:27:21
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return [];
  }
  // led
  const ledTimes = [1, 2, 4, 8, 16, 32, 1, 2, 4, 8];
  const times = [];

  // n 剩余亮着的 LED 的数量
  // h 小时
  // m 分钟
  // index 当前的LED
  function readBinaryWatch_c(n, h, m, index) {
    if (h > 11 || m > 59 || index > 10) {
      return
    }

    if (n === 0) {
      times.push(`${h}:${m < 10 ? '0' + m : m}`)
      return
    }

    // 分钟
    if(index < 6) {
      // 亮
      readBinaryWatch_c(n - 1, h, m + ledTimes[index], index + 1)
    } else {
      readBinaryWatch_c(n - 1, h + ledTimes[index], m, index + 1)
    }
    // 不亮
    readBinaryWatch_c(n, h, m, index + 1)
  }

  readBinaryWatch_c(turnedOn, 0, 0, 0);

  return times;
};
// @lc code=end