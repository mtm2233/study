/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-11-23 21:38:45
 * @LastEditTime: 2021-11-23 22:04:58
 * @LastEditors: mTm
 */
function initNext(pattern, pl) {
  const next = new Array(pl).fill(-1)
  let k = -1
  for (let i = 1; i < pl; i++) {
    while (k !== -1 && pattern[k + 1] !== pattern[i]) {
      k = next[k]
    }
    if (pattern[k + 1] === pattern[i]) {
      ++k;
      next[i] = k;
    }
  }
  return next
}

function kmp(main, pattern) {
  const ml = main.length;
  const pl = pattern.length;

  const next = initNext(pattern, pl)
  let j = 0;
  // 1 2 1 2 3 5 1 2 6
  // 1 2 6
  for (let i = 0; i < ml; i++) {
    while (j > 0 && main[i] !== pattern[j]) {
      j = next[j - 1] + 1
    }
    if (main[i] === pattern[j]) {
      j++
    }
    if (j === pl) {
      return i - pl + 1
    }
  }

  return -1
}

module.exports = kmp