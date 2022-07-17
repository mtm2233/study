/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-17 20:43:08
 * @LastEditTime: 2022-07-17 21:33:31
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const len = s.length;
  if (len < 4 || len > 12) {
    return [];
  }

  const ips = [];
  function restoreIpAddresses_c(str, index, ip, usable) {
    // 不能分配完
    if (len - index > usable * 3) {
      return;
    }
    // 前导 0
    if (ip[0] === '0' && ip.length > 1) {
      return;
    }
    // ip不合法
    if (!ip || (ip.length >= 3 && Number(ip) > 255)) {
      return;
    }

    // 合法ip
    if (usable === 0 && index === len) {
      ips.push(str + '.' + ip);
      return;
    }

    const _str = str ? str + '.' + ip : ip;

    restoreIpAddresses_c(
      _str,
      index + 1,
      s.slice(index, index + 1),
      usable - 1
    );
    restoreIpAddresses_c(
      _str,
      index + 2,
      s.slice(index, index + 2),
      usable - 1
    );
    restoreIpAddresses_c(
      _str,
      index + 3,
      s.slice(index, index + 3),
      usable - 1
    );
  }

  restoreIpAddresses_c('', 1, s.slice(0, 1), 3);
  restoreIpAddresses_c('', 2, s.slice(0, 2), 3);
  restoreIpAddresses_c('', 3, s.slice(0, 3), 3);
  return ips;
};
// @lc code=end
