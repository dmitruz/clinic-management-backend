const Sequelize = require('sequelize');
const db = require('../config/database');

const patientInfo = db.define('PatientInfo', {
    patientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patientName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
   
    address:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
    phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = patientInfo;
