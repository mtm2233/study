/*
 * @Description: 
 * @Author: mTm
 * @Date: 2020-10-26 20:20:08
 * @LastEditTime: 2020-11-29 00:35:14
 * @LastEditors: mTm
 */

// function run():string {
//     return '123';
// }
// const fun = function():number {
//     return 123
// }
// function g(name:string,age:number):string {
//     return `${name}---${age}`
// }
// console.log(g('a',1));


// function userInfo(name:string,age:number=20) {
//     return age ? `${name}---${age}` : `${name}---保密`
// }
// console.log(userInfo('aaa'));

// function sum(a:number,b:number,c:number,d:number):number {
//     return a + b + c +d;
// }
// function sum1(...arr:number[]):number {
//     let sum = 0;
//     arr.forEach(i => {
//         sum += i
//     })
//     return sum
// }
// console.log(sum1(1,2,3,4));


// function userInfo(name:string):string;
// function userInfo(age:number):number;
// function userInfo(str:any):any {
//     if(typeof str === "string") {
//         return "名字：" + str;
//     } else {
//         return "年龄：" + str;
//     }
// }
// console.log(userInfo("abc")); // 正确
// console.log(userInfo(12)); // 正确
// console.log(userInfo(true));  // 错误写法