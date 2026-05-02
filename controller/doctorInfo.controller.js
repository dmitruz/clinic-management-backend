const doctorInfoDao = require('../dao/doctorInfo.dao');

function add(req, res) {
    let doctor  = req.body;
    doctorInfoDao.create(doctor).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    doctorInfoDao.findById(req.params.doctorId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findByEmail(req, res) {
    doctorInfoDao.findByEmail(req.params.email).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    doctorInfoDao.deleteById(req.params.doctorId).
        then((data) => {
            res.status(200).json({
                message: "Doctor deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    doctorInfoDao.update(req.body, req.params.doctorId).
        then((data) => {
            res.status(200).json({
                message: "Doctor updated successfully",
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    doctorInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findDoctorsByName(req, res) {
    doctorInfoDao.findByName(req.params.doctorName).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


const doctorInfoController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById,
    findByEmail:findByEmail,
    findDoctorsByName:findDoctorsByName
}

module.exports = doctorInfoController;