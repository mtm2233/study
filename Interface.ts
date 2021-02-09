/*
 * @Description: 
 * @Author: mTm
 * @Date: 2020-10-29 21:44:12
 * @LastEditTime: 2020-11-29 13:23:52
 * @LastEditors: mTm
 */
// 接口
// 定义标准
// 接口是一种规范的定义、定义了行为和动作的规范、限制和规范的作用
// 接口定义了某一批类所需要遵守的规范、接口不关心这些类的内部状态数据、也不关心这些类里方法的实现细节、
// 只规定这批类里必须提供的某些方法、提供这些方法的类就可以满足实际需要
// ts中的接口类似于java、同时还增加了更加灵活的接口类型、包括
// 属性、函数、可索引和类等

// ts中的接口
// 属性类接口
// 行为和动作的规范、对批量方法进行约束
// interface FullName {
//     // 注意;结束
//     firstName:string;
//     secondName:string;
// }
// function printName1(name:FullName) {
//     // 必须传入对象 firstName secondName
//     console.log(name.firstName + "--" + name.secondName);
// }
// printName('aaa') // 错误
// printName({firstName: "a",secondName: "b", age: 20}) // 错误 必须只包含firstName、secondName
// let fullName = {
//     firstName: "a",
//     secondName: "b",
//     age: 20
// }
// printName(fullName) // 正确

// 接口：可选属性
// interface fullName {
//     name: string,
//     age?:number
// }
// function showInfo(info:fullName) {
//     console.log(info.name + info.age);
// }
// showInfo({
//     name: 'abc',
//     age: 123
// })
// showInfo({
//     name: 'abc',
// })

// 函数类型
// 对方法传入的参数 以及返回值进行约束
// interface encrypt {
//     (key: string, value: string):string;
// }
// const md5:encrypt = function(key,value) {
//     // 模拟操作
//     return key + value;
//     return 0; // 错误
// }
// // 错误
// const md5:encrypt = function(key:number,value) {
//     // 模拟操作
//     return key + value;
// }
// md5("aa","bb");

// // 可索引接口、数组、对象的约束（不常用）

// // 索引接口 对数组的约束
// interface list {
//     [index:number]:string
// }
// // const arr:list = ['223',4456]; // 错误
// const arr:list = ['223','4561']; // 正确

// // 对象的约束
// interface Obj {
//     [index:string]:string
// }
// // const obj:Obj = ['123'] // 错误
// const obj:Obj = {
//     'name':'456'
// }

// 类类型接口：对类的约束 和 抽象类有点相似

// interface Animal {
//     name:string;
//     eat(str:number):number;
// }
// class Cat implements Animal {
//     name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     eat() {
//         console.log(123);
//         return 1
//     }
// }

// 接口扩展 接口可以继承接口
interface AdimalAPI {
    eat():void;
}
interface PersonAPI extends AdimalAPI {
    work():void;
}

interface TearchAPI {
    name:string;
}

class Person implements PersonAPI {
    eat() {

    }
    work() {
        
    }
}

class Teacher extends Person implements TearchAPI {
    name:string;
    constructor(name: string) {
        super();
        this.name = name;
    }
}