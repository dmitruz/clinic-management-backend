const eventsInfo = require('../models/eventsInfo');

function findAll() {
    return eventsInfo.findAll();
}

function findById(id) {
    return eventsInfo.findByPk(id);
}

function deleteById(id) {
    return eventsInfo.destroy({ where: { id: id } });
}

function create(event) {
    var newEvent = new eventsInfo(event);
    return newEvent.save();
}

function updateEvent(event, id) {
    var updateEvent = {
        eventName: event.eventName,
        description : event.description,
        dateOfEvent : event.dateOfEvent
    };
    return eventsInfo.update(updateEvent, { where: { id: id } });
}

var eventsDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateEvent: updateEvent
}

module.exports = eventsDao;