const labreportInfo = require('../models/labreportInfo');

function findAll() {
    return labreportInfo.findAll();
}

function findById(id) {
    return labreportInfo.findByPk(id);
}
function findByPatient(patientid) {
    return labreportInfo.findAll({ where: { patientId: patientid }
    });
}

function deleteById(id) {
    return labreportInfo.destroy({ where: { labReportId: id } });
}

function create(report) {
    var newReport = new labreportInfo(report);
    return newReport.save();
}

function updateReport(report, id) {
    var updateReport = {
        testName : report.testName,
        description : report.description,
        desiredRange : report.desiredRange,
        resultValue : report.resultValue,
        remarks : report.remarks,
        patientId : report.patientId,
        testId : report.testId
    };
    return labreportInfo.update(updateReport, { where: { labReportId: id } });
}

var labreportInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateReport: updateReport,
    findByPatient:findByPatient
}

module.exports = labreportInfoDao;