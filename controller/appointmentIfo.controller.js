const appointmentDao = require('../dao/appointmentInfo.dao');

function addAppointments(req, res) {
    let appointment = req.body;
    appointmentDao.create(appointment).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointmentById(req, res) {
    appointmentDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
function findAppointmentByDate(req, res) {
    appointmentDao.findByDate(req.params.appointmentDate).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
function deleteById(req, res) {
    appointmentDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Appointment deleted successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAppointment(req, res) {
    appointmentDao.updateAppointment(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Appointment updated successfully",
                appointment: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAppointments(req, res) {
    appointmentDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const appointmentInfoController = {
    addAppointments: addAppointments,
    findAppointments: findAppointments,
    findAppointmentByDate:findAppointmentByDate,
    findAppointmentById: findAppointmentById,
    updateAppointment: updateAppointment,
    deleteById: deleteById
}

module.exports = appointmentInfoController;