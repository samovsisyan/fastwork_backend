const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');

class PaidJobPost extends Sequelize.Model {
}

PaidJobPost.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.STRING(64),
        allowNull: false,
    },
    showSalary: {
        type: Sequelize.STRING(64),
        allowNull: false,
    },
    description: {
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
    modelName: 'paidJobPost',
    timestamps: false
});


PaidJobPost.sync();

module.exports = PaidJobPost;