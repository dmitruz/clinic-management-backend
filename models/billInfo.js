const Sequelize = require('sequelize');
const db = require('../config/database');

const billInfo = db.define('BillInfo', {
    billId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patientName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   
    patientId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = billInfo;