/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:32:12
 * @LastEditTime: 2021-03-26 23:34:10
 * @LastEditors: mTm
 */
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'study',
    user: 'root',
    password: 'isdream2233.',
    connectionLimit: 10
})

const statement = `SELECT * FROM products WHERE brand = ? && score > ?;`

pool.execute(statement, ['小米', 6], (err,results,fields) => {
    console.log(results);
})