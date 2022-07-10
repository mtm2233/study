/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-07-05 20:01:14
 * @LastEditTime: 2022-07-05 20:17:34
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }
  
  const numChars = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  for (const num in numChars) {
    numChars[num] = numChars[num].split('');
  }

  const len = digits.length;
  const res = [];
  function letterCombinations_c(str, index) {
    if (index >= len) {
      res.push(str);
      return
    }
    (numChars[digits[index]] || []).forEach(char =>
      letterCombinations_c(str + char, index + 1)
    );
  }

  letterCombinations_c('', 0);

  return res
};
// @lc code=end