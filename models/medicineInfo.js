const Sequelize = require('sequelize')
const db = require('../config/database')

const medicineInfo = db.define('Medicines', {
    medicineid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    patientId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    medicineName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dose: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    day: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateMedicine: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }

})

module.exports = medicineInfo;