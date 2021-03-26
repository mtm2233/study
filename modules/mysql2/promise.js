/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:34:44
 * @LastEditTime: 2021-03-26 23:37:08
 * @LastEditors: mTm
 */
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'study',
    user: 'root',
    password: 'isdream2233.'
})

const statement = `SELECT * FROM products WHERE brand = ? && score > ?;`

connection.promise().execute(statement, ['小米', 6]).then(results => {
    console.log(results[0]);
}).catch(err => {
    console.log(err);
})