/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-27 16:16:22
 * @LastEditTime: 2021-03-27 16:45:37
 * @LastEditors: mTm
 */
const { Sequelize, Model, DataTypes, Op  } = require('sequelize')

const sequelize = new Sequelize('study','root','isdream2233.', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

class Student extends Model {}

Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: DataTypes.INTEGER
}, {
    sequelize,
    createdAt: false,
    updatedAt: false,
})

async function sequelizeQuery() {
    // 查询
    const result = await Student.findAll({})
    console.log(result);
    // const result1 = await Student.findAll({
    //     where: {
    //         age: {
    //             [Op.gte]: 20
    //         }
    //     }
    // })
    // console.log(result1);
    // 创建
    // const result3 = await Student.create({
    //     name: 'hmm',
    //     age: '20'
    // })
    // console.log(result3);
    // 更新
    // const result4 = await Student.update({
    //     age: 99
    // }, {
    //     where: {
    //         id: 6
    //     }
    // })
    // console.log(result4);
}

sequelizeQuery()