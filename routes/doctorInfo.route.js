const express = require('express');
const router = express.Router();

const doctorInfoController = require('../controller/doctorInfo.controller');

router.post('/', doctorInfoController.add);
router.get('/', doctorInfoController.find);
router.get('/:doctorId', doctorInfoController.findById);
router.put('/:doctorId', doctorInfoController.update);
router.delete('/:doctorId', doctorInfoController.deleteById);
//Searching doctor my name
router.get('/doctor/:doctorName',doctorInfoController.findDoctorsByName);
//search by email
router.get('/doctoremail/:email',doctorInfoController.findByEmail);
module.exports = router;