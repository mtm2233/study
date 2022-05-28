/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-05-27 09:36:41
 * @LastEditTime: 2022-05-27 10:44:44
 * @LastEditors: mTm
 */
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  //这个题有点意思，切勿眼高手低。
  //1对应A，26对应Z，看起来像是27进位，似乎应该每次余27，每次除以27。
  //但是，因为1对应A，而27对应的也是A，1%27=1, 27%27=0，同一个A余数不同，构成矛盾。
  //那么除以26行不行？
  //1%26=1,27%26=1，看起来这样似乎可以保持一致。
  //但是当26%26的时候，为0，可是实际的值却为Z，又构成了新的矛盾。

  // 所以，我们调整对应关系，让0对应A，25对应Z，26对应AA，这样就构成了一个正常的26进位。
  //这样对于A：0%26=0， 对于AA：26%26=0，在余数这里可以保持一致。
  //新的对应关系是原先对应关系-1得到，所以在每次操作的时候，都要让columnNumber-1，得到新的对应关系。
  let res = '';
  while (columnNumber > 0) {
    columnNumber = columnNumber - 1;
    res = String.fromCharCode(65 + (columnNumber % 26)) + res;
    columnNumber = parseInt(columnNumber / 26);
  }

  return res
};
// @lc code=end
