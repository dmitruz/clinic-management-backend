const usersInfoDao = require('../dao/userInfo.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config ()


function addAuthentication(req, res) {
    let authentication = {}
    authentication.userName = req.body.userName;
    authentication.password = bcrypt.hashSync(req.body.password);
    authentication.roleId  = req.body.roleId;
    
    usersInfoDao.create(authentication)
        .then((data) => {
            usersInfoDao.findByUserName(authentication.userName)
            .then(() => {
                // res.send(data);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: authentication.userId }, process.env.TOKEN_SECRET, {
                    expiresIn: expiresIn
                });

                //users.token = accessToken
    
                res.status(200).send({
                    "user": authentication, 
                    "accessToken": accessToken, 
                    "expires_in": expiresIn
                });

            }).catch((error) => {
                console.log(error);
                return res.status(500).send('Server error!');
            })


        })
        .catch((error) => {
            console.log(error);
        });
}


authenticationInfo = {}

function loginAuthentication(req, res) {
    const userName = req.body.userName;
    const password = req.body.password;
    
    usersInfoDao.findByUserName(userName)
        .then((data) => {
            console.log(data)
            enteredPassword = data.password;
            console.log(enteredPassword);
            const result = bcrypt.compareSync(password, enteredPassword);
            if (!result) return res.status(401).send('Password Wrong!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: data.userId, role: data.roleId }, process.env.TOKEN_SECRET, {
                expiresIn: expiresIn
            });
            authenticationInfo = data;
            res.status(200).send({
                "user": data,
                "accessToken": accessToken,
                "expires_in": expiresIn,
                "roleId" : data.roleId
            });
        })
        .catch((error) => {
            console.log(error);
            return res.status(404).send('Register First!');
        });
}

const usersInfoController = {
    registerUser : addAuthentication,
    loginUser : loginAuthentication,
}

module.exports = usersInfoController;