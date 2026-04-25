const staffInfo = require('../models/staffInfo');

function findAll() {
    return staffInfo.findAll();
}

function findById(staffId) {
    return staffInfo.findByPk(staffId);
}

function deleteById(staffId) {
    return staffInfo.destroy({ where: { staffId : staffId } });
}

function create(Staffs) {
    var newstaff = new staffInfo(Staffs);
    return newstaff.save();
}

function update(staff, staffId) {
    var updatestaff = {
        staffId: staff.staffId,
        staffName : staff.staffName,
        staffType : staff.staffType,
        qualification : staff.qualification,
        gender : staff.gender,
        dateOfBirth : staff.dateOfBirth,
        address : staff.address,
        dateOfJoin : staff.dateOfJoin,
        phone : staff.phone,
        email : staff.email,
        experience : staff.experience
    };
    return staffInfo.update(updatestaff, { where: { staffId : staffId } });
}
var staffInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    update: update
}

module.exports = staffInfoDao;