/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-07-31 18:29:11
 * @LastEditTime: 2022-07-31 18:58:06
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  const _paragraph = paragraph.toLowerCase() + '.';
  const wordCount = new Map();
  // 增加查找速度
  const _banned: { [key: string]: boolean } = {};
  [...banned, '!', '?', "'", ',', ';', '.', ' '].forEach(
    item => (_banned[item] = true)
  );

  let start = 0;
  let isBad = true;
  for (let i = 0; i < _paragraph.length; i++) {
    const char = _paragraph[i];
    if (_banned[char]) {
      if (!isBad) {
        const word = _paragraph.slice(start, i)
        if (!_banned[word]) {
          const count: number = wordCount.get(word) || 0
          wordCount.set(word, count + 1)
        }
      }
      start = i + 1
      isBad = true
    } else if (isBad) {
      isBad = false
    }
  }

  let maxWord = ''
  let maxCount = 0
  wordCount.forEach((count, word) => {
    if (count > maxCount) {
      maxCount = count
      maxWord = word
    }
  })

  return maxWord;
}
// @lc code=end
