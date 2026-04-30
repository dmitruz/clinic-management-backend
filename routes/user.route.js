const express = require('express');
const router = express.Router();
const userController = require('../controller/userInfo.controller');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/', (req, res) => {
    res.status(200).send('This is an authentication server');
});


module.exports = router;