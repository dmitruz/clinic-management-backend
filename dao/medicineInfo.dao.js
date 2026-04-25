const medicineInfo = require('../models/medicineInfo');
var medicineInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateMedicine: updateMedicine,
    findByDate:findByDate
}

function findAll() {
    return medicineInfo.findAll();
}

function findById(medicineid) {
    return medicineInfo.findByPk(medicineid);
}
function findByDate(dateMedicine) {
    return medicineInfo.findAll({ where: { dateMedicine:dateMedicine}});
}
function deleteById(id) {
    return medicineInfo.destroy({ where: {medicineid: id } });
}

function create(medicine) {
    var newMedicine = new medicineInfo(medicine);
    return newMedicine.save();
}

function updateMedicine(medicine,medicineid) {
    var updateMedicine = {
        patientid: medicine.patientid,
        medicineName: medicine.medicineName,
        unit: medicine.unit,
        dose: medicine.dose,
        type:medicine.type,
        day:medicine.day,
        comment:medicine.comment,
        dateMedicine:medicine.dateMedicine
        
    };
    return medicineInfo.update(updateMedicine, { where: { medicineid:medicineid} });
}

module.exports = medicineInfoDao;