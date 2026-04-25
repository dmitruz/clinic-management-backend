// User.dao

const userInfo = require('../models/userInfo');

function findAll() {
    return userInfo.findAll();
}

function findById(userId) {
    return userInfo.findByPk(AuthenticationID);
}

function findByUserName(UserName){
    return userInfo.findOne({
        where:{ userName : UserName}
    }
    );
    
}

function deleteById(UserID) {
    return userInfo.destroy({ where: { userId: UserID } });
}

function create(authentication) {
    var newAuthentication = new userInfo(authentication);
    return newAuthentication.save();
}


var userInfoDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,

    findByUserName : findByUserName
}


module.exports = userInfoDao;
