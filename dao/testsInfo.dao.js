const testsInfo = require('../models/testInfo');

function findAll() {
    return testsInfo.findAll();
}

function findById(id) {
    return testsInfo.findByPk(id);
}

function deleteById(id) {
    return testsInfo.destroy({ where: { testId: id } });
}

function create(test) {
    var newtest = new testsInfo(test);
    return newtest.save();
}

function updateRole(test, id) {
    var updatetest = {
        testName : test.testName,
        description : test.description,
        patientId : test.patientId
    };
    return testsInfo.update(updatetest, { where: { testId: id } });
}

var testsInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateRole: updateRole
}

module.exports = testsInfoDao;