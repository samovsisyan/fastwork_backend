const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');
const Category = require("./Category");
// const md5 = require('md5');


class Restorants extends Sequelize.Model {


}

Restorants.init({
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // categoryId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   field: 'category_id',
  //   key: 'category_id',
  // },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  all_price: {
    type: Sequelize.INTEGER,
    allowNull: true // Make allPrice field optional
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // category_id: {
  //   type: Sequelize.BIGINT,
  //   allowNull: false,
  //   references: {
  //     model: 'category', // Name of the Category model
  //     key: 'id', // Primary key of the Category model
  //   },
  // },
  created_at: {
    type: Sequelize.DATE, // Use DATE or TIMESTAMP, depending on your database
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Set the default value to the current timestamp
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), // Update the timestamp on each update
  },
}, {
  sequelize,
  modelName: 'restorants',
  timestamps: false
});

Restorants.sync();

// Restorants.hasOne(Category, {
//   foreignKey: 'category_id',
// });

Restorants.hasOne(Category, { foreignKey: 'category_id' });

module.exports = Restorants;