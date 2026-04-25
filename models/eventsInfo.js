const Sequelize = require('sequelize');
const db = require('../config/database');

const EventsInfo = db.define('EventInfo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eventName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfEvent: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = EventsInfo;