const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');
const Category = require('./Category')

class Jobs extends Sequelize.Model {



}

Jobs.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.STRING,
        allowNull: true
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    salary: {
        type: Sequelize.STRING(64),
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responsibilities: {
        type: Sequelize.STRING,
        allowNull: false
    },
    requirements: {
        type: Sequelize.STRING,
        allowNull: false
    },
    skills: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deleted: {
        type: Sequelize.ENUM('0', '1'),
        allowNull: false,
        defaultValue: '0',
        // primaryKey: true
    },
    // categoryId: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //     key: 'category_id'
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
    modelName: 'jobs',
    timestamps: false
});


// Jobs.belongsTo(Category, {
//     foreignKey: 'categoryId',
// });

Jobs.sync();

module.exports = Jobs;