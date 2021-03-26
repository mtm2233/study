/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:39:01
 * @LastEditTime: 2021-03-26 23:39:31
 * @LastEditors: mTm
 */
/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:18:09
 * @LastEditTime: 2021-03-26 23:25:13
 * @LastEditors: mTm
 */
const mysql = require('mysql2');

// 1.创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'study',
    user: 'root',
    password: 'isdream2233.'
})

// 2.执行SQL语句
const statement = `SELECT * FROM products;`

connection.query(statement, (err, results, fields) => {
    console.log(esults);
    connection.end()
})

connection.on('error', err => {
    console.log(err);
})