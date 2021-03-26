/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-26 23:42:10
 * @LastEditTime: 2021-03-26 23:46:11
 * @LastEditors: mTm
 */

// 创建一个Sequelize的对象，并且指定数据库、用户名、密码、数据库类型、主机地址等
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', 'isdream2233.', {
    host: 'localhost',
    dialect: 'mysql'
})


// 测试连接是否成功
sequelize.authenticate().then(() => {
    console.log('authenticate连接成功');
}).catch(err => {
    console.log('authenticate连接失败', err);
})