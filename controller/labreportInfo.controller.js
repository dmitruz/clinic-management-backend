const labreportInfoDao = require('../dao/labreportInfo.dao');

function addReport(req, res) {
    let role = req.body;
    labreportInfoDao.create(role)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findReportByPatient(req, res) {
    labreportInfoDao.findByPatient(req.params.patientId)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

function findReportById(req, res) {
    labreportInfoDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    labreportInfoDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Report deleted successfully",
                role: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateReport(req, res) {
    labreportInfoDao.updateReport(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Report updated successfully",
                patient : data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoles(req, res) {
    labreportInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
const labreportInfoController = {
    addReport: addReport,
    findReport: findRoles,
    findReportById: findReportById,
    updateReport: updateReport,
    deleteById: deleteById,
    findReportByPatient:findReportByPatient
}


module.exports = labreportInfoController;