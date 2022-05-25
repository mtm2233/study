/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-05-23 09:23:39
 * @LastEditTime: 2022-05-23 10:02:37
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // 合法字符
  function legalChar(char) {
    return /[A-Z]|[a-z]|\d/.test(char)
  }

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    while (i < j && !legalChar(s[i])) {
      i++
    }
    while (i < j && !legalChar(s[j])) {
      j--
    }
    
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    }

    i++;
    j--;
  }

  return true;
};
// @lc code=end

