const staffInfoDao = require('../dao/staffInfo.dao');

function add(req, res) {
    let Staffs  = req.body;
    staffInfoDao.create(Staffs).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findById(req, res) {
    staffInfoDao.findById(req.params.staffId).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    staffInfoDao.deleteById(req.params.staffId).
        then((data) => {
            res.status(200).json({
                message: "Staff deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function update(req, res) {
    staffInfoDao.update(req.body, req.params.staffId).
        then((data) => {
            res.status(200).json({
                message: "Staff updated successfully",
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function find(req, res) {
    staffInfoDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const staffInfoController = {
    add: add,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}


module.exports = staffInfoController;