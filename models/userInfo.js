// Users - Authentication table

const Sequelize = require('sequelize');
const db = require('../config/database');
const Role = require('./roleInfo');


const User = db.define('userInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    roleId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references:{model:'roles',key:'id'}
    }

})

Role.hasMany(User)


module.exports = User;
