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

function getData<t>(vlaue:t):t {
    return vlaue;
}

// getData<number>("abc"); // 错误
getData<number>(123);
getData<string>("abc");

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

class MinClass<T> {
    public list:T[] = [];
    add(num:T) {
        this.list.push(num);
    }
    min():T {
        let min = this.list[0];
        this.list.forEach(v => {
            if (min > v) {
                min = v
            }
        })
        return min;
    }
}

const min1 = new MinClass<number>();
min1.add(1);
min1.add(0);
min1.add(90);
console.log(min1.min());
const min2 = new MinClass<string>();
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
class User {
    username: string | undefined;
    password: string | undefined;
    constructor(params: {
        username: string | undefined;
        password: string | undefined;
    }) {
        this.username = params.username;
        this.password = params.password;
    }
}
// 评论
class Report {
    time: string | undefined;
    content: string | undefined;
    person: string | undefined;
    constructor(params: {
        time: string | undefined;
        content: string | undefined;
        person: string | undefined;
    }) {
        this.time = params.time;
        this.content = params.content;
        this.person = params.person;
    }
}

// 操作数据库的泛型类
class MysqlDb<T> {
    add(info:T):boolean {
        console.log(info);
        return true;
    }
}

let u = new User({
    username: "ABC",
    password: "ABC123",
});

let userDb = new MysqlDb<User>();
userDb.add(u);


let r = new Report({
    time: "ABC",
    content: "ABC123",
    person: 'AAA'
});

let reportDb = new MysqlDb<Report>();
// userDb.add(r); // 报错
reportDb.add(r);