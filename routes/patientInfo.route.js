const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientInfo.controller');

router.post('/', patientController.addPatients);
router.get('/', patientController.findPatients);
router.get('/:patientId',patientController.findPatientById);
router.put('/:patientId', patientController.updatePatient);
router.delete('/:patientId', patientController.deleteById);
router.get('/patient/:patientName',patientController.findPatientsByName)

module.exports = router;