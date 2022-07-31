/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-28 19:10:25
 * @LastEditTime: 2022-07-28 19:35:13
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  const map: Map<string, boolean> = new Map()
  const len = s.length;
  let flag = false;
  function wordBreak_c(start: number, str: string) {
    if (len === start) {
      flag = true;
    }

    const key = `${start}-${str}`
    if (map.get(key)) {
      return
    }
    map.set(key, true)

    let strLen = str.length;
    if (flag || len - start < strLen) {
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== s[start + i]) {
        return;
      }
    }

    wordDict.forEach(_str => wordBreak_c(start + strLen, _str));
  }

  wordBreak_c(0, '');
  return flag;
}
// @lc code=end
