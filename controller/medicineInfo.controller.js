const medicineDao = require('../dao/medicineInfo.dao');
const medicineController = {
    addMedicine: addMedicine,
    findMedicine: findMedicine,
    findMedicineById:findMedicineById,
    updateMedicine: updateMedicine,
    deleteById: deleteById,
    findMedicineByDate:findMedicineByDate
}

function addMedicine(req, res) {
    let medicine = req.body;
    medicineDao.create(medicine).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicineById(req, res) {
    medicineDao.findById(req.params.medicineid).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicineByDate(req, res) {
    medicineDao.findByDate(req.params.dateMedicine).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    medicineDao.deleteById(req.params.medicineid).
        then((data) => {
            res.status(200).json({
                message: "prescription_medicine deleted successfully",
                medicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateMedicine(req, res) {
    medicineDao.updateMedicine(req.body, req.params.medicineid).
        then((data) => {
            res.status(200).json({
                message: "prescription_medicine updated successfully",
                medicine: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findMedicine(req, res) {
    medicineDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = medicineController;