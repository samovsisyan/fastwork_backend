const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');
// const md5 = require('md5');


class Category extends Sequelize.Model {


}

Category.init({
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
  type_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  img: {
    type: Sequelize.STRING,
    allowNull: true
  },
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
  modelName: 'category',
  timestamps: false
});

Category.sync();

module.exports = Category;