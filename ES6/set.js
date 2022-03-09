/*
 * @Description: 
 * @Author: mTm
 * @Date: 2022-03-08 16:24:57
 * @LastEditTime: 2022-03-08 16:26:00
 * @LastEditors: mTm
 */

// 判断是否有重复项
const arr = [1,2,5,5,6,4,8,6]

console.log(new Set(arr).size === arr.length);