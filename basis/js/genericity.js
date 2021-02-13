"use strict";
// 泛型
// 泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型效验)
// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// T表示泛型，具体什么类型是调用这个方法的时候决定的
// 泛型函数
// function getData(vlaue:number):number {
//     return vlaue;
// }
// getData(123);
// getData("abc"); // 错误
function getData(vlaue) {
    return vlaue;
}
// getData<number>("abc"); // 错误
getData(123);
getData("abc");
// 泛型类
// class MinClass {
//     public list:number[] = [];
//     add(num:number) {
//         this.list.push(num);
//     }
//     min():number {
//         let min = this.list[0];
//         this.list.forEach(v => {
//             if (min > v) {
//                 min = v
//             }
//         })
//         return min;
//     }
// }
// const min1 = new MinClass();
// min1.add(1);
// min1.add(0);
// min1.add(90);
// console.log(min1.min());
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var min = this.list[0];
        this.list.forEach(function (v) {
            if (min > v) {
                min = v;
            }
        });
        return min;
    };
    return MinClass;
}());
var min1 = new MinClass();
min1.add(1);
min1.add(0);
min1.add(90);
console.log(min1.min());
var min2 = new MinClass();
min2.add("a");
min2.add("z");
min2.add("c");
console.log(min2.min());
// 泛型接口
// interface ColorFn{
//     (v1:string,v2:string):string;
// }
// const cFu:ColorFn = function(v1:string,v2:string):string {
//     return v1 + v2;
// }
// cFu("red","pink");
// 第一种
// interface ColorFn{
//     <T>(v:T):T;
// }
// const cFu:ColorFn = function<T>(v:T):T {
//     return v;
// }
// cFu<string>("red");
// 第二种
// interface ColorFn<T>{
//     (v:T):T;
// }
// function fu<T>(v:T):T{
//     return v;
// }
// const cFu:ColorFn<string> = fu;
// cFu("red");
// 把类作为参数类型的泛型类
// 用户
var User = /** @class */ (function () {
    function User(params) {
        this.username = params.username;
        this.password = params.password;
    }
    return User;
}());
// 评论
var Report = /** @class */ (function () {
    function Report(params) {
        this.time = params.time;
        this.content = params.content;
        this.person = params.person;
    }
    return Report;
}());
// 操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
var u = new User({
    username: "ABC",
    password: "ABC123",
});
var userDb = new MysqlDb();
userDb.add(u);
var r = new Report({
    time: "ABC",
    content: "ABC123",
    person: 'AAA'
});
var reportDb = new MysqlDb();
// userDb.add(r); // 报错
reportDb.add(r);
