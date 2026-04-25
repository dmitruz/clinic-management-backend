const Sequelize = require('sequelize');
const db = require('../config/database'); 

const testInfo = db.define('TestInfo', {
    testId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    testName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    },
    patientId : {
        type: Sequelize.INTEGER,
        allowNull : false,
        foreignKey : true
    }
});

module.exports = testInfo;