/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:25:43
 * @LastEditTime: 2021-03-26 23:31:50
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

connection.execute(statement, ['小米', 6], (err,results,fields) => {
    console.log(results);
})