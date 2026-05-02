const express = require('express');
const router = express.Router();
const labreportInfoController = require('../controller/labreportInfo.controller');

router.post('/', labreportInfoController.addReport);
router.get('/', labreportInfoController.findReport);
router.get('/:id',labreportInfoController.findReportById);
router.put('/:id', labreportInfoController.updateReport);
router.delete('/:id', labreportInfoController.deleteById);
router.get('/tests/:patientId',labreportInfoController.findReportByPatient);

module.exports = router;