const patientDao = require('../dao/patientInfo.dao');

function addPatients(req, res) {
    let Patient = req.body;
    patientDao.create(Patient).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientById(req, res) {
    patientDao.findById(req.params.patientId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    patientDao.deleteById(req.params.patientId).
        then((data) => {
            res.status(200).json({
                message: "Patient deleted successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updatePatient(req, res) {
    patientDao.updatePatient(req.body, req.params.patientId).
        then((data) => {
            res.status(200).json({
                message: "Patient updated successfully",
                patient: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatients(req, res) {
    patientDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findPatientsByName(req, res) {
    patientDao.findByName(req.params.patientName).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


const patientInfoController = {
    addPatients: addPatients,
    findPatients: findPatients,
    findPatientById: findPatientById,
    updatePatient: updatePatient,
    deleteById: deleteById,
    findPatientsByName:findPatientsByName
}

module.exports = patientInfoController;