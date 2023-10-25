const Sequelize = require('sequelize');
const sequelize = require('../services/datebase');

class ContactUs extends Sequelize.Model {



}

ContactUs.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: true
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {msg: "Phone Number is Required"},
            is: {
                msg: "No Valid Phone Number",
                args: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/i,
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
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
    modelName: 'contactUs',
    timestamps: false
});

ContactUs.sync();

module.exports = ContactUs;