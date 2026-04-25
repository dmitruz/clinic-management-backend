const doctorInfo = require('../models/doctorInfo');

function findAll() {
    return doctorInfo.findAll();
}

function findById(doctorId) {
    return doctorInfo.findByPk(doctorId);
}
function findByEmail(email) {
    return doctorInfo.findAll({ where: { email: email } });
}
function deleteById(doctorId) {
    return doctorInfo.destroy({ where: { doctorId : doctorId } });
}

function create(doctor) {
    var newDoctor = new doctorInfo(doctor);
    return newDoctor.save();
}

function findByName(doctorName) {
    return doctorInfo.findAll({ where: { doctorName: doctorName } });
}

function update(doctor, doctorId) {
    var updateDoctor = {
        doctorId: doctor.doctorId,
        doctorName : doctor.doctorName,
        specialization : doctor.specialization,
        qualification : doctor.qualification,
        gender : doctor.gender,
        dateOfBirth : doctor.dateOfBirth,
        address : doctor.address,
        dateOfJoin : doctor.dateOfJoin,
        phone : doctor.phone,
        email : doctor.email,
        experience : doctor.experience
    };
    return doctorInfo.update(updateDoctor, { where: { doctorId : doctorId } });
}
var doctorInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update,
    findByEmail:findByEmail,
    findByName:findByName
}

module.exports = doctorInfoDao;
