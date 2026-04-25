const Sequelize = require('sequelize');
const db = require('../config/database');

const staffInfo = db.define('StaffInfo',
 {
    staffId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    staffName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    staffType: {
        type : Sequelize.STRING,
        allowNull : false
    },
    qualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfJoin: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    phone: {
        type: Sequelize.BIGINT(10),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    experience: {
        type: Sequelize.STRING,
        allowNull: false
    }
  });

module.exports = staffInfo;