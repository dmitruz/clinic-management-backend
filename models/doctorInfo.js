const Sequelize = require('sequelize');
const db = require('../config/database');

const doctorInfo = db.define('DoctorInfo',
 {
    doctorId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    doctorName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialization: {
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

module.exports = doctorInfo;
