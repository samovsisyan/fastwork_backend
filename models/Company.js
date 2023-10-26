const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');

class Company extends Sequelize.Model {



}

Company.init({
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
    website: {
        type: Sequelize.STRING,
        allowNull: true
    },
    industry: {
        type: Sequelize.STRING,
        allowNull: false
    },
    social: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    logo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deleted: {
        type: Sequelize.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0',
        // primaryKey: true
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
    modelName: 'company',
    timestamps: false
});


Company.sync();

module.exports = Company;