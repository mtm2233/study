/*
 * @Description: 
 * @Author: mTm
 * @Date: 2021-03-27 16:46:16
 * @LastEditTime: 2021-03-27 16:58:00
 * @LastEditors: mTm
 */
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

class Course extends Model{};
Course.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: DataTypes.INTEGER
}, {
    sequelize,
    tableName: 'courses',
    createdAt: false,
    updatedAt: false,
})

class studentCourses extends Model {};

studentCourses.init({
    studentId: {
        field: 'student_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Student,
            key: 'id'
        }
    },
    courseId: {
        field: 'course_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Course,
            key: 'id'
        }
    },
},{
    sequelize,
    tableName: 'students_select_courses',
    createdAt: false,
    updatedAt: false,
})

Student.belongsToMany(Course, {
    through: studentCourses,
    foreignKey: 'studentId',
    otherKey: 'courseId'
})

Course.belongsToMany(Student, {
    through: studentCourses,
    foreignKey: 'courseId',
    otherKey: 'studentId'
})

async function sequelizeQuery() {
    // 查询
    const result = await Student.findAll({
        include: {
            model: Course
        }
    })
    console.log(result);
}

sequelizeQuery()