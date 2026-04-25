const patientInfo = require('../models/patientInfo');

function findAll() {
    return patientInfo.findAll();
}

function findById(patientId) {
    return patientInfo.findByPk(patientId);
}

function findByName(patientName) {
    return patientInfo.findAll({ where: { patientName: patientName } });
}


function deleteById(patientId) {
    return patientInfo.destroy({ where: { patientId: patientId } });
}

function create(patient) {
    var newPatient = new patientInfo(patient);
    return newPatient.save();
}

function updatePatient(patient, patientId) {
    var updatePatient = {
        patientName: patient.patientName,
        dateOfBirth: patient.dateOfBirth,
        address: patient.address,
        phoneNumber: patient.phoneNumber
        
    };
    return patientInfo.update(updatePatient, { where: { patientId: patientId } });
}
var patientInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updatePatient: updatePatient,
    findByName:findByName
}

module.exports = patientInfoDao;
