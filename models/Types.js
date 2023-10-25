const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');

class Types extends Sequelize.Model {
    async getByPassport(passport) {
        const user = await this.findOne({passport});
        return user;
    }
}

Types.init({
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

    short_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    unit: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT(7, 4),
        allowNull: false
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
    modelName: 'types',
    timestamps: false
});


Types.sync();

module.exports = Types;