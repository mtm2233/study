/*
 * @Description:
 * @Author: mTm
 * @Date: 2022-01-14 13:45:08
 * @LastEditTime: 2022-01-18 23:05:22
 * @LastEditors: mTm
 */

/* 回溯 */
// 利⽤回溯算法求解⼋皇后问题
// const eightQueens = require('./eightQueens')
// const res = eightQueens()
// console.log(res);

// 利⽤回溯算法求解0-1背包问题
// const recallKnapsack01 = require('./recallKnapsack01')

// const arr = [
//   {
//     weight: 1,
//     value: 5,
//   },
//   {
//     weight: 5,
//     value: 2,
//   },
//   {
//     weight: 6,
//     value: 7,
//   },
//   {
//     weight: 4,
//     value: 4,
//   },
//   {
//     weight: 6,
//     value: 5,
//   },
//   {
//     weight: 1,
//     value: 2,
//   }
// ]
// console.log(recallKnapsack01(arr, 10));

/* 分治 */
// 利⽤分治算法求⼀组数据的逆序对个数
// const reverseNum = require('./reverseNum');

// const arr = [0, 3, 2, 1];
// console.log(reverseNum(arr));

/* 动态规划 */
// 0-1背包问题

// const knapsack01 = require('./knapsack01');
// const goods = [
//   { weight: 1, value: 5 },
//   { weight: 5, value: 1 },
//   { weight: 3, value: 2 },
//   { weight: 4, value: 3 },
//   { weight: 5, value: 1 },
// ];

// console.log(knapsack01(goods, 10));

// 最⼩路径和（详细可看@Smallfly整理的 Minimum Path Sum）
// @see https://leetcode-cn.com/problems/minimum-path-sum/

// 从 0,0 走的 2,2 的最短路径
// 只能向下或向右走
// data[i][j] += Math.min(data[i - 1][j], data[i][j - 1])
// const minPathSum = require('./minPathSum');
// const data = [
//   [1,2,3],
//   [7,8,9],
//   [4,5,6],
// ]
// console.log(minPathSum(data));

// 编程实现莱⽂斯坦最短编辑距离

// 此算法的概念很简单： Levenshtein Distance 指 两个字串之间，由一个转换成另一个所需的最少编辑操作次数 ，
// 允许的编辑操作包括：
// 将其中一个字符替换成另一个字符（ Substitutions ）。
// 插入一个字符（ Insertions ）。
// 删除一个字符（ Deletions ）。
// 这个数学公式最终得出的数值就是 LD 的值。
// const minEditDistance = require('./minEditDistance');
// // 'abc' => 'abcd'
// console.log(minEditDistance('aaaa', 'a'));

// 编程实现查找两个字符串的最⻓公共⼦序列

// 给定两个字符串 text1和text2，返回这两个字符串的最长公共子序列。
// 一个字符串的子序列是指这样一个新的字符串:
// 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace”是"abcde"的子序列，但 "aec"不是"abcde"的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
// 若这两个字符串没有公共子序列，则返回0。
// const longestCommonStr = require('./longestCommonStr');
// console.log(longestCommonStr('aced', 'abcde'));

// 编程实现⼀个数据序列的最⻓递增⼦序列

// 输入:[10,9,2,5,3,7,101,18]输出:4
// 解释:最长的上升子序列是[2,3, 7,101]，它的长度是4。说明:
// 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。你算法的时间复杂度应该为0(n2)
const longestIncreasing = require('./longestIncreasing');
const data = [10,9,2,5,3,7,101,18];
console.log(longestIncreasing(data));