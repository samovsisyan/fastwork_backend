const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');
const md5 = require('md5');
const Types = require('./Types');

class Users extends Sequelize.Model {

    static async getUserType(data) {
        const user = await this.findOne({
            where: {
                username: data.login,
                password: data.password
            },
            attributes: ['type']
        });

        return user;
    }

}

Users.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'username'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return undefined
        },
        set(val) {
            return md5(val)
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email'

    },
    peopleId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'people_id',
        key: 'people_id',
    },

    role: {
        type: Sequelize.ENUM('admin', 'manager', 'payer'),
        allowNull: false,
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
    modelName: 'users',
    timestamps: false
});


// Users.belongsTo(Types, {
//     foreignKey: 'type_id',
// });


Users.sync();


module.exports = Users;