const appointmentInfo = require('../models/appointmentInfo');

function findAll() {
    return appointmentInfo.findAll();
}


function findById(id) {
    return appointmentInfo.findByPk(id);
}


function findByDate(appointmentDate) {
    return appointmentInfo.findAll({ where: { appointmentDate: appointmentDate } });
}

function deleteById(id) {
    return appointmentInfo.destroy({ where: { id: id } });
}

function create(appointment) {
    var newAppointment = new appointmentInfo(appointment);
    return newAppointment.save();
}

function updateAppointment(appointment, id) {
    var updateAppointment = {
        id:appointment.id,
        patientName:appointment.patientName,
        patientId:appointment.patientId,
        doctorName:appointment.doctorName,
        appointmentTime: appointment.appointmentTime,
        
       
        
    };
    return appointmentInfo.update(updateAppointment, { where: { id: id } });
}

var appointmentDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAppointment: updateAppointment,
    findByDate:findByDate
}

module.exports = appointmentDao;