const Sequelize = require('sequelize');
const db = require('../config/database');


const labreportInfo = db.define('LabReportInfo', {
    labReportId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testName : {
        type : Sequelize.STRING,
        allowNull : false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    },
    desiredRange : {
        type: Sequelize.STRING,
        allowNull : false
    },
    resultValue : {
        type : Sequelize.STRING,
        allowNull : false
    },
    reportDate : {
        type : Sequelize.DATEONLY,
        allowNull : false
    },
    remarks : {
        type: Sequelize.STRING,
        allowNull: false
    },
    patientId : {
        type: Sequelize.STRING,
        allowNull : false
    },
    testId : {
        type: Sequelize.STRING,
        allowNull : false
    }
});

module.exports = labreportInfo;