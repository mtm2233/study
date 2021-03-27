/*
 * @Description:
 * @Author: mTm
 * @Date: 2021-03-27 16:33:33
 * @LastEditTime: 2021-03-27 16:45:19
 * @LastEditors: mTm
 */
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("study", "root", "isdream2233.", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

class Brand extends Model {}
Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNotNull: false,
    },
    website: DataTypes.STRING,
    phoneRank: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "brand",
    createdAt: false,
    updatedAt: false,
  }
);

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNotNull: false,
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER,
      references: {
        model: Brand,
        key: "id",
      },
    },
  },
  {
    tableName: "products",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);


Product.belongsTo(Brand, {
    foreignKey: 'brandId'
})


async function sequelizeQuery() {
    const result = await Product.findAll({
        include: {
            model: Brand
        }
    })
    console.log(result);
}

sequelizeQuery();