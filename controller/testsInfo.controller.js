const testsInfoDao = require('../dao/testsInfo.dao');

function addRoles(req, res) {
    let role = req.body;
    testsInfoDao.create(role)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoleById(req, res) {
    testsInfoDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    testsInfoDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "test deleted successfully",
                role: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRole(req, res) {
    testsInfoDao.updateRole(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "test updated successfully",
                test : data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoles(req, res) {
    testsInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}
const testsInfoController = {
    addRoles: addRoles,
    findRoles: findRoles,
    findRoleById: findRoleById,
    updateRole: updateRole,
    deleteById: deleteById
}


module.exports = testsInfoController;