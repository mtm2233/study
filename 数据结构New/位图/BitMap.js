/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-12-23 16:57:41
 * @LastEditTime: 2021-12-23 17:00:04
 * @LastEditors: mTm
 */
class BitMap {
  bytes = []
  nbits = 0
  constructor(nbits) {
    this.nbits = nbits;
    this.bytes = new Array(parseInt(nbits/16) + 1)
  }

  // 1 << bitIndex
  // 只占二进制的某一位
  // 100000
  // 10
  // 不可能出现1100


  // 证明二进制
  // bitmap.bytes[0] |= 11
  // true
  // console.log(bitmap.bytes[0] &= 1);

  set(k) {
    if (k > this.nbits) return;
    const byteIndex = parseInt(k / 16);
    const bitIndex = k % 16;
    this.bytes[byteIndex] |= (1 << bitIndex)
  }

  del(k) {
    if (k > this.nbits) return;
    const byteIndex = parseInt(k / 16);
    const bitIndex = k % 16;
    this.bytes[byteIndex] &= (~(1 << bitIndex))
  }

  get(k) {
    if (k > this.nbits) return;
    const byteIndex = parseInt(k / 16);
    const bitIndex = k % 16;
    return (this.bytes[byteIndex] & (1 << bitIndex)) !== 0;
  }
}

module.exports = BitMap