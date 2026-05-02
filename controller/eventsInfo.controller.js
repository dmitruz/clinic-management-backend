const eventsDao = require('../dao/eventsInfo.dao');

function addEvents(req, res) {
    let event = req.body;
    eventsDao.create(event)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEventById(req, res) {
    eventsDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    eventsDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event deleted successfully",
                role: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEvent(req, res) {
    eventsDao.updateEvent(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event updated successfully",
                role: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEvents(req, res) {
    eventsDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const eventsController = {
    addEvents:   addEvents,
    findEvents: findEvents,
    findEventById: findEventById,
    updateEvent: updateEvent,
    deleteById: deleteById
}

module.exports = eventsController;