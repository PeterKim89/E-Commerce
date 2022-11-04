// import important parts of sequelize library
const { Model, DataTypes, DECIMAL } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // id - primary key, auto incrementing integer, cannot be null
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product name - given string value, cannot be null
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // price - given decimal value of up to x,xxx,xxx,xxx.xx , cannot be null and validates whether the value is a decimal
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      isDecimal: true
    },
    // stock - given integer value, otherwise defaults to 10. cannot be null and validates if value is a number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true
    },
    // category_id - given integer value, references category.id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
